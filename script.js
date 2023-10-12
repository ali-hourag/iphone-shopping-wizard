
//CALL TO mainLoaded when the page is loaded.
//Along with the data variable, are the only global variables.
const webLoaded = window.addEventListener('load', mainLoaded);

const data = [];

/*------------------MAIN PAGE--------------------------------------------------*/
/**
 * Function called when loading the page.
 * Puts the main page on display toggling between classes.
 */
function mainLoaded() {
  const mainPageSection = document.querySelector(".main-page");
  mainPageSection.classList.toggle("main-display-grid");

  //Now we show the top buttons on the header
  const btnsIphones = document.querySelector(".iphone-selector");
  btnsIphones.classList.toggle("top-display");


  btnsIphones.addEventListener("click", setMain);
  const btnSetMain = document.querySelector("#i14-btn");
  //Default one is shown is iphone 14
  btnSetMain.click();
}

/**
 * This function sets the min page out.
 * It makes use of the organization of the iphones folder organization
 * so that we can access it efficiently.
 * It calls different function to show images, colors, the models and storages.
 * @param {} event 
 * 
 */
function setMain(event) {

  if (event.target.tagName != "NAV") {
    const btnBuy = document.querySelector(".btn-buy");
    btnBuy.disabled = true;

    const fieldsetModel = document.querySelector(".iphone-model");
    let titlePhone = document.querySelector(".phone-title");
    let models = [];
    let model = "";
    let modelSrc = "";
    let iColorsH = [];
    let iColors = [];
    let storages = [];


    if (event.target.innerText.includes("iPhone 14")
      || event.target.innerText.includes("NEW")) {
      model = "14";
      modelSrc = "14/general"
      models = [['iPhone 14', '6.1-inch display', 'From $799'],
      ['iPhone 14 Plus', '6.7-inch display', 'From 899$'],
      ['iPhone 14 Pro', '6.1-inch display', 'From 999$'],
      ['iPhone 14 Pro Max', '6.7-inch display', 'From 1099$']];
      iColorsH = ["#85a5b0", "#e2d7e8", "#f1e723", "#22263b", "#efefe8", "#f90000"];
      iColors = ["Blue", "Purple", "Yellow", "Midnight", "StarLight", "Red"];
      storages = [["128 GB", "From $799"], ["256 GB", "From $899"],
      ["512 GB", "From $1099"]];

    } else if (event.target.innerText === "iPhone 13") {
      model = "13"
      modelSrc = "13/general";
      models = [["iPhone 13 mini", "5.4-inch display", "From $599"],
      ["iPhone 13", "6.1-inch display", "From $699"]];
      iColorsH = ["#206290", "#f6dddf", "#22263b", "#efefe8", "#033f1d", "#cd1c1c"];
      iColors = ["Blue", "Pink", "Midnight", "StarLight", "Green", "Red"];
      storages = [["128 GB", "From $699"], ["256 GB", "From $799"],
      ["512 GB", "From $999"]];

    } else if (event.target.innerText === "iPhone SE") {
      model = "SE"
      modelSrc = "SE/general";
      iColorsH = ["#22263b", "#efefe8", "#cd1c1c"];
      iColors = ["Midnight", "Starlight", "Red"];
      storages = [["64 GB", "From $429"], ["128 GB", "From $479"], ["256 GB", "From $579"]];
      fieldsetModel.style.margin = "0";
    }

    setImages(modelSrc);

    //Parte de phone model:
    titlePhone.innerHTML = "iPhone " + model;
    setModel(models, model);

    setColor(iColorsH, iColors);

    setStorage(storages);
  }
}

/**
 * Function called when a model (14, 14 Plus, 14 Pro, 14 Pro Max)
 * is clicked and shows different things.
 * 
 */
function modelClicked() {
  let storages = [];
  let iColors = [];
  let iColorsH = [];
  let imgSource = "";
  if (this.getAttribute("id").includes("iphone-14")) {

    if (["iphone-140", "iphone-141"].indexOf(this.getAttribute("id")) !== -1) {
      iColorsH = ["#85a5b0", "#e2d7e8", "#f1e723", "#22263b", "#efefe8", "#f90000"];
      iColors = ["Blue", "Purple", "Yellow", "Midnight", "StarLight", "Red"];
      imgSource = "14/general";


      if (this.getAttribute("id") === "iphone-140") storages = [["128 GB", "From $799"], ["256 GB", "From $899"], ["512 GB", "From $1099"]];
      else storages = [["128 GB", "From $899"], ["256 GB", "From $999"], ["512 GB", "From $1199"]];


    } else {
      iColorsH = ["#51435d", "#f3eb9f", "#f1efef", "#182030"];
      iColors = ["DeepPurple", "Gold", "Silver", "SpaceBlack"];
      imgSource = "14/pro/general";

      if (this.getAttribute("id") === "iphone-142") storages = [["128 GB", "From $999"], ["256 GB", "From $1099"], ["512 GB", "From $1299"], ["1 TB", "From $1499"]];
      else storages = [["128 GB", "From $1099"], ["256 GB", "From $1199"], ["512 GB", "From $1399"], ["1 TB", "From $1599"]];

    }

  } else if (this.getAttribute("id").includes("iphone-13")) {
    iColorsH = ["#206290", "#f6dddf", "#22263b", "#efefe8", "#033f1d", "#cd1c1c"];
    iColors = ["Blue", "Pink", "Midnight", "StarLight", "Green", "Red"];
    imgSource = "13/general";

    if (this.getAttribute("id") === "iphone-130") storages = [["128 GB", "From $599"], ["256 GB", "From $699"], ["512 GB", "From $899"]];
    else storages = [["128 GB", "From $699"], ["256 GB", "From $799"], ["512 GB", "From $999"]];

  }
  setImages(imgSource);
  setStorage(storages);

  setColor(iColorsH, iColors);
  //Enable buttons
  const radioColor = document.querySelectorAll(".iphone-color input");
  for (let i = 0; i < radioColor.length; i++) {
    radioColor[i].disabled = false;
  }


  const colorLegend = document.querySelector(".color-legend");
  colorLegend.style.visibility = "visible";

}


/**
 * This function sets the images by clicking different colors.
 */
function setImgByColor() {
  //Model selectors
  const labelModel = document.querySelectorAll(".label-model");
  const radioColor = document.querySelectorAll(".iphone-color input");

  let colorChecked = "";
  let colorHChecked = "";
  //Guess which color is checked
  for (let i = 0; i < radioColor.length; i++) {
    if (radioColor[i].checked === true) {
      colorChecked = radioColor[i].getAttribute("color");
      colorHChecked = radioColor[i].getAttribute("colorH");
    }
  }
  const buyBtn = document.querySelector(".btn-buy");
  buyBtn.style.backgroundColor = colorHChecked;

  let source = "";

  if (labelModel.length !== 0) {

    //iPhone 14 and 13, discriminating between normal 14 and Pro-ProMax, 13 is the same
    //First see which one is checked
    const radioModel = document.querySelectorAll(".iphone-model input");
    let modelChecked = "";
    for (let i = 0; i < radioModel.length; i++) {
      if (radioModel[i].checked === true) modelChecked = radioModel[i].getAttribute("id").substring(7, radioModel[i].getAttribute("id").length);
    }
    if (modelChecked.includes("14")) {
      if (modelChecked === "140" || modelChecked === "141") source = "14/normal/";
      else source = "14/pro/";
    } else source = "13/";

  } else source = "SE/";  //iPhone SE

  setImages(source + colorChecked + "/" + colorChecked);

  const radioStorage = document.querySelectorAll(".iphone-storage input");
  for (let i = 0; i < radioStorage.length; i++) {
    radioStorage[i].disabled = false;
  }
  const legendStorage = document.querySelector(".iphone-storage legend");
  const pStorage = document.querySelector(".iphone-storage p");
  legendStorage.style.opacity = 1;
  pStorage.style.opacity = 1;
}


/**
 * To set the model up, it receives the model and different models.
 * iPhone 14 -> 14 Plus, Pro ... and shows what it has to show.
 * It is reused for different things.
 * @param {*} models 
 * @param {*} model 
 */
function setModel(models, model) {

  const fieldsetModel = document.querySelector(".iphone-model");

  while (fieldsetModel.children.length !== 0) {
    fieldsetModel.children[0].remove();
  }

  for (let i = 0; i < models.length; i++) {

    let inputModel = `
                      <input id="iphone-${model + i}" type="radio" name="iphone-model" value="iphone-${model + i}">
                      <label for="iphone-${model + i}" class="label-model">
                      <span class="text-phone">
                        <p class="model-selected">${models[i][0]}</p>
                        <p class="phone-dimension">${models[i][1]}</p>
                      </span>
                      <span class="text-price">${models[i][2]}</span>
                      </label>`;

    fieldsetModel.insertAdjacentHTML("beforeend", inputModel);

  }
  let radioModel = document.querySelectorAll(".iphone-model input");

  for (let i = 0; i < radioModel.length; i++) {
    radioModel[i].addEventListener("change", modelClicked);
  }

}



/**
 * This function set different images after receiving a modelSrc.
 * This one will be iPhone/14/general, iPhone/14/Pro, iPhone/13/
 * 
 * @param {*} modelSrc 
 */
function setImages(modelSrc) {
  const fieldsetImages = document.querySelector(".product-images")
  const bigImage = document.querySelector(".image-big")
  while (fieldsetImages.children.length !== 0) {
    fieldsetImages.children[0].remove();
  }

  let imageLength = 4;
  if (!modelSrc.includes("general")) imageLength = 3;

  for (let i = 0; i < imageLength; i++) {
    let imageSource = `src = "iphones/${modelSrc + i}.png"`;
    let inputImages = `<input id="image${i}" type="radio" name="iphone-images" value="image${i}">
                      <label for="image${i}"><img class="image" ${imageSource}></label>`;
    fieldsetImages.insertAdjacentHTML("beforeend", inputImages);

  }

  fieldsetImages.children[0].checked = true;
  bigImage.src = fieldsetImages.children[1].children[0].src;
  let labelImg = document.querySelectorAll(".product-images input + label");
  //To change image when clicked
  for (let i = 0; i < labelImg.length; i++) {
    labelImg[i].addEventListener("click", imageClicked);
    labelImg[i].addEventListener("mouseenter", imageClicked);
    labelImg[i].addEventListener("mouseleave", imageHoveredOut);
  }
}


/**
 * This function sets the color of the buttons and creates
 * then in the DOM after receiving the name of the color
 * and its hexadecimal code.
 * @param {*} iColorsH 
 * @param {*} iColors 
 */
function setColor(iColorsH, iColors) {
  const fieldsetColor = document.querySelector(".iphone-color");

  while (fieldsetColor.children.length !== 1) {
    fieldsetColor.children[1].remove();
  }
  const modelCheck = document.querySelector(".phone-title");
  let isDisabled = "disabled";
  if (modelCheck.innerText === "iPhone SE") isDisabled = "";

  for (let i = 0; i < iColorsH.length; i++) {
    let inputColor = `<input id="color${i}" type="radio" name="color-iphone" value="color${i}" ${isDisabled}>
                        <label for="color${i}" class="color-election"></label>`;

    fieldsetColor.insertAdjacentHTML("beforeend", inputColor);
  }


  const colorLegend = document.querySelector(".color-legend");

  if (isDisabled === "disabled") {

    colorLegend.style.visibility = "hidden";
  } else {
    colorLegend.style.visibility = "visible";
  }



  let colorLabel = document.querySelectorAll(".color-election");
  let colorRadio = document.querySelectorAll(".iphone-color input");

  for (let i = 0; i < colorLabel.length; i++) {
    colorLabel[i].style.backgroundColor = iColorsH[i];
    colorLabel[i].setAttribute("color", iColors[i]);
    colorLabel[i].addEventListener("mouseover", overColor);
    colorLabel[i].addEventListener("mouseout", outColor);

    colorRadio[i].addEventListener("change", setImgByColor);
    colorRadio[i].setAttribute("color", iColors[i]);
    colorRadio[i].setAttribute("colorH", iColorsH[i]);
  }

}

/**
 * Creates the storage in the DOM after receiving a string of the 
 * of the storage of the model and its price.
 * @param {*} storages 
 */
function setStorage(storages) {
  const fieldsetStorage = document.querySelector(".iphone-storage");

  while (fieldsetStorage.children.length !== 2) {
    fieldsetStorage.children[2].remove();
  }

  for (let i = 0; i < storages.length; i++) {
    let inputStorage = `<input id="${"storage" + "-" + i}" type="radio" name="storage" value="${"storage" + "-" + i}" disabled>
                            <label for="${"storage" + "-" + i}" class="label-storage">
                                <span class="storage-selected">${storages[i][0]}</span>
                                <span class="price-storage">${storages[i][1]}</span>
                            </label>`;
    fieldsetStorage.insertAdjacentHTML("beforeend", inputStorage);
  }
  const legendStorage = document.querySelector(".iphone-storage legend");
  const pStorage = document.querySelector(".iphone-storage p");
  legendStorage.style.opacity = "0.3";
  pStorage.style.opacity = "0.3";

  const radioStorage = document.querySelectorAll(".iphone-storage input");
  for (let i = 0; i < radioStorage.length; i++) {
    radioStorage[i].addEventListener("change", enableBuy);
  }
}

/**
 * Function called when the image is clicked.
 * It shows that image as the principal one.
 */
function imageClicked() {
  let bigImage = document.querySelector(".image-big");
  bigImage.src = this.children[0].src;
  bigImage = undefined;
}


/**
 * Removes the image as the principal one after hovering out from it,
 * taking into account that it is not the checked one.
 * If it is the checked one, it will be shown by default.
 */
function imageHoveredOut() {
  let bigImage = document.querySelector(".image-big");
  let imageChecked = document.querySelectorAll(".product-images input");
  let images = document.querySelectorAll(".image");
  for (let i = 0; i < imageChecked.length; i++) {
    if (imageChecked[i].checked === true) {
      bigImage.src = images[i].src;
    }
  }
  bigImage = undefined;
  imageChecked = undefined;
  images = undefined;
}


/**
 * Shows the color legend while hovering through it.
 */
function overColor() {
  let legendColor = document.querySelector(".color-legend");
  legendColor.innerText = "Color -" + " " + this.getAttribute("color");
  legendColor = undefined;
}


/**
 * Removes the color legend while hovering out from it.
 */
function outColor() {
  let legendColor = document.querySelector(".color-legend");
  legendColor.innerText = "";
  legendColor = undefined;
}


/**
 * To enable but button and create an eventListener
 */
function enableBuy() {
  const btnBuy = document.querySelector(".btn-buy");
  btnBuy.disabled = false;
  btnBuy.addEventListener("click", collectData);
}


/**
 * Collect data from the main, store it and change the page.
 */
function collectData() {
  const btnBuy = document.querySelector(".btn-buy");
  btnBuy.removeEventListener("click", collectData);
  //Funcion nitida;
  const modelSelected = document.querySelectorAll(".iphone-model input");
  const colorSelected = document.querySelectorAll(".iphone-color input");
  const storageSelected = document.querySelectorAll(".iphone-storage input");
  const productSelected = {};
  for (let i = 0; i < modelSelected.length; i++) {
    if (modelSelected[i].checked === true) {
      const labelModelSelected = document.querySelectorAll(".iphone-model label");
      let model = labelModelSelected[i].children[0].children[0].innerText;
      let display = labelModelSelected[i].children[0].children[1].innerText;
      productSelected.model = model;
      productSelected.display = display;
    }
  }

  for (let i = 0; i < colorSelected.length; i++) {
    if (colorSelected[i].checked === true) {
      productSelected.color = colorSelected[i].getAttribute("color");
      productSelected.colorH = colorSelected[i].getAttribute("colorH");
    }
  }

  for (let i = 0; i < storageSelected.length; i++) {
    if (storageSelected[i].checked === true) {
      const labelStorageSelected = document.querySelectorAll(".iphone-storage label");
      let storage = labelStorageSelected[i].children[0].innerText; // gigas
      let price = labelStorageSelected[i].children[1].innerText; // price
      productSelected.storage = storage;
      productSelected.price = price.substring(5, price.length);
    }
  }

  const topDisplay = document.querySelector(".iphone-selector");
  const progress = document.querySelector(".progress");
  topDisplay.classList.toggle("top-display");
  progress.classList.toggle("top-display");
  data.push(productSelected);

  nextStep([".main-page", "grid"], [".profile", "flex"]);
  timeCounter();

  time2Buy(); //Second position of the data array is initial seconds


}


/*----------------------------FUNCTION TO CHANGE BETWEEN PAGES------------------------------------------------------- */
/**
 * RECEIVES THE CLASS OF THE PREVIOUS SECTION AND ITS DISTRIBUTION ("GRID OR FLEX")
 * AND THEN SHOWS NEXT ONE AND REMOVES THE PREVIOUS ONE
 * @param {*} previousPage 
 * @param {*} nextPage 
 */
function nextStep(previousPage, nextPage) {
  const pPage = document.querySelector(previousPage[0]);
  const nPage = document.querySelector(nextPage[0]);

  //([".profile", "flex"],[".main", "grid"]);

  pPage.classList.remove(`main-display-${previousPage[1]}`);
  nPage.classList.add(`main-display-${nextPage[1]}`);

  switch (nextPage[0]) {
    case ".profile": setProfile();
      break;
    case ".address": setAddress();//;
      break;
    case ".shipping": setShipping();
      break;
    case ".finish": setFinish(".finish");
      break;
    case ".greeting": setGreeting();
      break;
  }
}
/*-------------------------------PROFILE PAGE---------------------------------------------------- */
/**
 * Function to set the profile.
 */
function setProfile() {

  setTimeout(() => {
    const round1 = document.querySelector(".round-1");
    round1.style.backgroundColor = data[0].colorH;
  }, 500);

  const btnBuy = document.querySelector(".btn-buy");
  btnBuy.style.display = "none";

  const inputProfile = document.querySelectorAll(".profile input");
  for (let i = 0; i < inputProfile.length; i++) {

    inputProfile[i].addEventListener("focusout", checkProfileValidity);

    if (i > 0) inputProfile[i].disabled = true;
  }
  const clearBtn = document.querySelector(".clear-btn");
  const nextBtn = document.querySelector(".next-btn");
  const skipBtn = document.querySelector(".skip-btn");
  nextBtn.disabled = true;

  nextBtn.addEventListener("click", checkProfileValidity);
  clearBtn.addEventListener("click", clearForm);
  skipBtn.addEventListener("click", () => {

    let profileData = {};
    profileData.username = "DearGuest"
    profileData.email = "guest@gmail.com";
    profileData.password = "Hola@1234";
    data.push(profileData);
    nextStep([".profile", "flex"], [".address", "flex"])

  });

}


/**
 * ClearForm button of the Profile page
 */
function clearForm() {
  const error = document.querySelector(".username-fieldset");
  const errorP = document.querySelector(".password-fieldset");
  errorP.setAttribute("error-password", "");
  error.setAttribute("error-username", "");
  error.setAttribute("error-email", "");

  const inputProfile = document.querySelectorAll(".profile input");
  for (let i = 0; i < inputProfile.length; i++) {
    inputProfile[i].addEventListener("focusout", checkProfileValidity);
    if (i > 0) inputProfile[i].disabled = true;
  }
  const nextBtn = document.querySelector(".next-btn");
  nextBtn.disabled = true;
}

/**
 * Function to study different errors after entering the 
 * profile data.
 */
function checkProfileValidity() {

  const error = document.querySelector(".username-fieldset");
  const errorP = document.querySelector(".password-fieldset");

  const inputProfile = document.querySelectorAll(".profile input");
  let inputNext;
  for (let i = 0; i < inputProfile.length; i++) {
    if (inputProfile[i].getAttribute("id") === this.getAttribute("id")) {
      inputNext = inputProfile[i + 1];
    }
  }
  const nextBtn = document.querySelector(".next-btn");

  if (this.getAttribute("id") === "username") {

    if ((5 > this.value.length || this.value.length > 20) || this.value.includes(" ")) {
      if (5 > this.value.length || this.value.length > 20) error.setAttribute("error-username", "Length between 5 and 20");
      else if (this.value.includes(" ")) error.setAttribute("error-username", "No blank spaces");
    } else {
      error.setAttribute("error-username", "");
      inputNext.disabled = false
    }
  } else if (this.getAttribute("id") === "email") {
    if (!this.value.match(/^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/g) || this.value.length > 50) error.setAttribute("error-email", "Not valid");
    else {
      error.setAttribute("error-email", "");
      inputNext.disabled = false;
    }
  } else if (this.getAttribute("id") === "password") {

    if (!this.value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!/@#$%^&*()_+]).{8,20}$/g)) {
      errorP.setAttribute("error-password", "invalid password");

    }
    else {
      errorP.setAttribute("error-password", "");
      inputNext.disabled = false;
      inputNext.setAttribute("passwordLegit", this.value);
    }
  } else if (this.getAttribute("id") === "confirm-password") {


    if (!(this.value === this.getAttribute("passwordLegit"))) {

      errorP.setAttribute("error-password", "invalid password or not matching");
    }

  } else if (this.innerText === "Next") {


    let profileData = {};
    profileData.username = inputProfile[0].value;
    profileData.email = inputProfile[1].value;
    profileData.password = inputProfile[2].value;
    data.push(profileData);

    nextStep([".profile", "flex"], [".address", "flex"]);

  }

  for (let i = 0; i < inputProfile.length; i++) {
    if (inputProfile[i].value === "" && inputProfile[inputProfile.length - 1].disabled === true) {
      nextBtn.disabled = true;
      i = inputProfile.length;
    }
  }

  if ((error.getAttribute("error-username") !== "" ||
    error.getAttribute("error-email") !== "" ||
    errorP.getAttribute("error-password") !== "")) {
    nextBtn.disabled = true;
  } else nextBtn.disabled = false;
}
/*---------------------------------ADDRESS PAGE-------------------------------------------------- */

/**
 * Sets the address page.
 */
function setAddress() {
  setTimeout(() => {
    const round2 = document.querySelector(".round-2");
    round2.style.backgroundColor = data[0].colorH;
  }, 1600);

  const bar1 = document.querySelector(".bar-1");
  bar1.style.backgroundPosition = "left bottom";

  const inputAddress = document.querySelectorAll(".address input");
  for (let i = 0; i < inputAddress.length; i++) {
    inputAddress[i].addEventListener("focusout", checkAddressValidity);
  }
  const selectAddress = document.querySelector(".address select");
  selectAddress.addEventListener("change", checkAddressValidity);

  const nextBtnAddress = document.querySelector(".next-btn-address");
  nextBtnAddress.addEventListener("click", checkAddressValidity);
  nextBtnAddress.disabled = true;


}

/**
 * Checks the address data and shows error if needed.
 */
function checkAddressValidity() {
  const inputAddress = document.querySelectorAll(".address input");
  const selectAddress = document.querySelector(".address select");
  const nextBtn = document.querySelector(".next-btn-address");
  const selectPrefix = document.querySelector(".prefix-number");
  if (this.getAttribute("id") === "first-name" || this.getAttribute("id") === "last-name") {
    if (!this.value.match(/(^[a-zA-Z]{3,15})+(([\s',.-][a-zA-Z])?[a-zA-Z]*)$/g)) {
      this.classList.add("border-address");


    } else this.classList.remove("border-address");
  }
  else if (this.getAttribute("id") === "birth-date") {
    if (this.value === "") {
      this.classList.add("border-address");

    } else this.classList.remove("border-address");

  } else if (this.getAttribute("id") === "address-1") {

    if (!this.value.match(/^[#ºÑñ.0-9a-zA-ZÀ-ÿ\s,-]+$/g)) {
      this.classList.add("border-address");

    } else this.classList.remove("border-address");

  } else if (this.getAttribute("postal-code")) {
    if (!this.value.match(/[0-9A-Za-z]{5,9}/g)) {
      this.classList.add("border-address");

    } else this.classList.remove("border-address");

  } else if (this.getAttribute("id") === "country") {
    if (this.value !== "") {
      const selectPrefixOptions = document.querySelectorAll(".phone-container .select-country-form option");
      selectPrefixOptions[this.selectedIndex - 1].selected = true;
    }
  } else if (this.getAttribute("id") === "phone-country-code") {
    if (!this.value.match(/[0-9]{8,11}/g)) {
      this.classList.add("border-address");

    } else this.classList.remove("border-address");

  } else if (this.getAttribute("id") === "next-btn-address") {
    let addressData = {};
    addressData.name = inputAddress[0].value;
    addressData.lastName = inputAddress[1].value;
    addressData.birthDate = inputAddress[2].value;
    addressData.address1 = inputAddress[3].value;
    addressData.address2 = inputAddress[4].value;
    addressData.postalCode = inputAddress[5].value;
    addressData.country = selectAddress.value;
    addressData.prefixNumber = selectPrefix.value;
    addressData.phoneNumber = inputAddress[6].value;
    data.push(addressData);
    nextStep([".address", "flex"], [".shipping", "flex"]);

  }


  let existError = false;

  if (selectAddress.value !== "") {
    for (let i = 0; i < inputAddress.length; i++) {
      if ((inputAddress[i].getAttribute("id") !== "address-2") &&
        (inputAddress[i].value == "" || inputAddress[i].classList.contains("border-address")))
        existError = true;
    }
  } else existError = true;

  if (!existError) nextBtn.disabled = false;
  else nextBtn.disabled = true;

}


/*---------------------------------SHIPPING PAGE-------------------------------------------------- */
/**
 * Sets shipping page out.
 */
function setShipping() {
  setTimeout(() => {
    const round3 = document.querySelector(".round-3");
    round3.style.backgroundColor = data[0].colorH;
  }, 1600);

  const bar2 = document.querySelector(".bar-2");
  bar2.style.backgroundPosition = "left bottom";

  const finishBtn = document.querySelector(".btn-buy");
  finishBtn.addEventListener("click", finishButton);
  finishBtn.style.display = "block";
  finishBtn.innerText = "FINISH";
  finishBtn.disabled = true;
  const shippmentType = document.querySelectorAll(".shipping-type input");

  for (let i = 0; i < shippmentType.length; i++) {
    shippmentType[i].addEventListener("change", checkShippingValidity);
  }

}

/**
 * Checks the data entered
 */
function checkShippingValidity() {

  const finishBtn = document.querySelector(".btn-buy");
  finishBtn.disabled = false;
}

/**
 * Finish button to toggle from pages and store information
 */
function finishButton() {
  const finishBtn = document.querySelector(".btn-buy");
  finishBtn.removeEventListener("click", finishButton);
  const shippmentType = document.querySelectorAll(".shipping-type input");
  const shippmentTypeLabel = document.querySelectorAll(".shipping-type label");
  const shippmentTypeSpan = document.querySelectorAll(".shipping-type label span");
  let found = 0;
  for (let i = 0; i < shippmentType.length; i++) {
    if (shippmentType[i].checked === true) found = i;
  }
  let shippingData = {};

  shippingData.shippment = shippmentTypeLabel[found].innerText.split("-")[0].trim();

  let price = shippmentTypeSpan[found].innerText;
  if (price === "") price = 0;
  else {
    price = price.trim();
    price = price.substring(1, price.length);
  }
  shippingData.price = price;

  data.push(shippingData);
  nextStep([".shipping", "flex"], [".finish", "grid"]);
}
/*------------------------------------FINISH PAGE----------------------------------------------- */
/**
 * Sets finish page and greeting page.
 * Both sections are showed here.
 * As you can see it receives the section param
 * which will be ".finish" or ".greeting", since both
 * or them are almost the same
 * @param {*} section 
 */
function setFinish(section) {

  setTimeout(() => {
    const round4 = document.querySelector(".round-4");
    round4.style.backgroundColor = data[0].colorH;
  }, 1600);



  const bar3 = document.querySelector(".bar-3");
  bar3.style.backgroundPosition = "left bottom";

  let productInf = data[0];
  let shippingInf = data[4];
  const imageFinish = document.querySelector(section + " .img-f");
  const iphoneModel = document.querySelector(section + " .sec-aside h3");
  const iphoneModelInfo = document.querySelectorAll(section + " .sec-aside p");
  const root = document.querySelector(':root');
  const purchaseDetails = document.querySelectorAll(section + " .lastAside p");

  let model = productInf.model;
  //Set color
  root.style.setProperty('--finish-color', productInf.colorH);
  const finishH2 = document.querySelector(".section-title");
  const congrats = document.querySelector(".congrats");
  const thanks = document.querySelector(".thanks");
  if (["#206290", "#033f1d", "#cd1c1c", "#22263b",
    "#f90000", "#85a5b0", "#182030", "#51435d", "#22263b", "#cd1c1c"].indexOf(productInf.colorH) !== -1) {
    finishH2.style.color = "var(--bg-white)";
    congrats.style.color = "var(--bg-white)";
    thanks.style.color = "var(--bg-white)";
  }

  //Set image
  if (model.includes("iPhone 14")) {
    if (model.includes("Pro")) {
      imageFinish.src = `iphones/14/pro/${productInf.color}/${productInf.color}0.png`;
    } else {
      imageFinish.src = `iphones/14/normal/${productInf.color}/${productInf.color}0.png`;
    }
  } else if (model.includes("iPhone 13")) {
    imageFinish.src = `iphones/13/${productInf.color}/${productInf.color}0.png`;
  } else {
    imageFinish.src = `iphones/SE/${productInf.color}/${productInf.color}0.png`;
  }

  //Model information
  //Model

  iphoneModel.innerText = model;
  //
  iphoneModelInfo[0].innerText = `Screen: ${productInf.display}`;
  iphoneModelInfo[1].innerText = `Color: ${productInf.color}`;
  iphoneModelInfo[2].innerText = `Storage: ${productInf.storage}`;

  //Purchase details

  purchaseDetails[0].innerText = "Order nº: " + Math.floor(Math.random() * 100000);
  purchaseDetails[1].innerText = 'Model: ' + model;
  purchaseDetails[2].innerText = 'Screen: ' + productInf.display;
  purchaseDetails[3].innerText = 'Color: ' + productInf.color;
  purchaseDetails[4].innerText = 'Storage: ' + productInf.storage;
  purchaseDetails[5].innerText = 'Subtotal: ' + productInf.price;
  purchaseDetails[6].innerText = shippingInf.shippment + ": $" + shippingInf.price;
  let price = productInf.price.trim();
  price = price.substring(1, price.length);
  purchaseDetails[7].innerText = `Total: $${parseInt(price) + parseInt(shippingInf.price)}`;

  let termsCheck = document.querySelector(".terms-check");
  termsCheck.addEventListener("change", allowFinish);
  const buyBtn = document.querySelector(".btn-buy");
  buyBtn.addEventListener("click", buyButtonClicked);
  if (section === ".finish") buyBtn.disabled = true;
  else {
    buyBtn.removeEventListener("click", buyButtonClicked);
    buyBtn.disabled = true;
    buyBtn.addEventListener("click", reloadPage);
    buyBtn.innerText = "HOME";
    setTimeout(() => {
      buyBtn.disabled = false;
    }, 5000);
  }

}

/**
 * Allows finish button
 */
function allowFinish() {
  let termsCheck = document.querySelector(".terms-check");
  const buyBtn = document.querySelector(".btn-buy");
  if (termsCheck.checked === true) buyBtn.disabled = false;
  else buyBtn.disabled = true;
}


function buyButtonClicked() {
  nextStep([".finish", "grid"], [".greeting", "grid"]);
  const buyBtn = document.querySelector(".btn-buy");
  buyBtn.removeEventListener("click", buyButtonClicked);
}



/*------------------------------------STORE TIME----------------------------------------------- */
function setGreeting() {
  const progress = document.querySelector(".progress");
  progress.style.opacity = "0";


  time2Buy();

  let finalSeconds = data[data.length - 1];
  let totalSeconds = finalSeconds - data[1];
  console.log(totalSeconds);
  console.log(finalSeconds);
  let min = parseInt(totalSeconds / 60);
  let sec = totalSeconds % 60;

  let timeAlert = document.createElement("div");
  timeAlert.classList.add("time-taken");
  timeAlert.textContent = `You took ${min} minutes and ${sec} seconds to finish your purchase`;
  document.body.appendChild(timeAlert);

  const logo = document.querySelector(".logo-container img");
  logo.style.left = "calc(50vw - 210px)";

  setFinish(".greeting");
}
/*------------------------------------RELOAD----------------------------------------------- */
function reloadPage() {
  window.location.reload();
}

/*--------------------------------------- TIME COUNTER -------------------------------------------- */

function timeCounter() {
  let timeAlert = document.createElement("div");
  timeAlert.classList.add("time-alert");
  let counter = 4;


  let timeInterval = setInterval(() => {
    if (counter === 0) {
      stopInterval(timeInterval);

    } else {
      timeAlert.textContent = "You have " + counter-- + " minutes left!";
      document.body.appendChild(timeAlert);
      setTimeout(() => {
        document.body.removeChild(timeAlert);
      }, 5000);
    }
  }, 60000);

}


function stopInterval(timeInterval) {
  let timeAlert = document.createElement("div");
  timeAlert.classList.add("time-alert");
  clearInterval(timeInterval);
  timeAlert.textContent = "Your time has expired!";
  document.body.appendChild(timeAlert);
  setTimeout(() => {
    window.location.reload();
  }, 5000);
}

function time2Buy() {
  let date = new Date();
  let seconds = date.getSeconds();
  let min = date.getMinutes();
  let initialSeconds = min * 60 + seconds;
  data.push(initialSeconds);
}
