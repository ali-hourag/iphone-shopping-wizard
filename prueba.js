

timeCounter() // called after clicking buy




function timeCounter() {
  let timeAlert = document.createElement("div");
  setTimeout(() => {
    timeAlert.style.cssText = 'position:absolute;width:200px;height:200px;opacity:0.6;background:#000;';//console.log("You have 4 minutes remaining");
    timeAlert.textContent = "You have 4 minutes remaining";
    document.body.appendChild(timeAlert);
  }, 60000);
  setTimeout(() => {
    console.log("You have 3 minutes remaining");
  }, 120000);
  setTimeout(() => {
    console.log("You have 2 minutes remaining");
  }, 180000);
  setTimeout(() => {
    console.log("You have 1030500 minutes remaining");
  }, 240000);
  setTimeout(() => {
    refreshPage();
  }, 300000);
}












/** Declaramos las variables globales
-- los 3 botones del header de modelos
-- los check selectores dentro de la main
-- botones de color
-- el boton de continuar*/





/** asignamos eventListeners necesarios para main
-- botones header para =====> cambiar modelo escogido
-- botones en main para ======> cambiar submodelo
-- botones color =======> elegir y mostrar color
-- boton siguiente para ===> lanzar funcion que cambia de pagina*/





/** Despues empieza una cadena de funciones, es decir, cada funcion llamada modificara el dom por completo, y lo dejará preparado para la siguiente llamada de funcion haciendo:
-- llevandose los datos necesarios y almacelandolos en variable (PROBABLEMENTE OBJETO o array)
-- ajustando el header y el footer convenientemente
-- dando display none, o visible (grid, flex o block) a las diferentes secciones
-- eliminando las variables anteriores (SI YA NO SON necesarias) 
-- eliminando e. listeners anteriores (SI YA NO SON necesarias)
-- declarando nuevas variables (SI SON) necesarias
-- declarando nuevos event listeners (SI SON) necesarios
-- Una vez la siguiente pagina es rellenada y se vuelve a pulsar continuar todo este ciclo se repite

# La funcion debera identificar desde que paso es llamada, y saber entonces que debe hacer exactamente, resultando en una misma función funcionando para todos los cambios de pagina*/





/** FUNCIONES

-- 1. FUNCION ESCOGER MODELO; se encarga de: 
- al pulsar un boton del header (seleccion de modelo) identificarlo y cambiar el contenido de la main page para ajustarse al modelo seleccionado. 

-- 2. FUNCIÖN HOVER DE IMAGENES MINIATURA, se encarga de:
- hacer que la imagen miniatura se muestre en el display grande cuandon se haga hover en el pequeño.

-- 3. FUNCIÓN CLEAR FORM, se encarga de:
- identificar en que formulario nos encontramos
- resetear sus inputs al valor inicial.

-- 4. FUNCION QUE GESTIONA EL PASO DE PAGINAS, se encarga de:
- recoger y conservar los datos introducidos
- eliminar lo innecesario (variables y listeners)
- cambiar los displays de las secciones (mostrar y ocultar las correctas
- crear lo necesario (variables y listeners).

-- 5. FUNCION/ES QUE CHEKEA/N LOS INPUTS, se encarga de:
- mediante setInterval comprobar "LIVE" que lo introducido en el input va cumpliendo con los requisitos pedidos.
- muestra un mensaje de error cerca del input avisando del error
- aplica un estilo al input para hacer notar que ahi hay un error.

-- 6. FUNCIÓN QUE CONECTA PAISES Y PREFIJOS, se encarga de:
- simple, vincula el país con el prefijo en el formulario. 

-- *7*. CUALQUIER FUNCION EXTRA QUE SURJA SIMILAR A LA ANTERIOR:
- funciones pequeñas y de poca complejidad para gestionar los forms, como por ejemplo LA OPCIÓN DE REGALO

-- 8. FUNCIÓN TIEMPO LÍMITE, se encarga de:
- iniciar un contador de 5 minutos cuando la página se carga
- lanzar un mensaje cada minuto avisando al usuario de que le quedan X minutos
- Si el tiempo se termina y el usuario no ha terminado:
  - lanzar mensaje avisando que el tiempo se ha terminado
  - iniciar un contador de 5 segundos
  - emviar de vuelta al principio (refrescar pagina)
- si el usuario termina el proceso con éxito (LLEGA A LA THANKS PAGE ANTES DE QUE ACABE EL CONTADOR):
  - el tiempo de compra (transcurrido) será almacenado y mostrado

-- **9. FUNCIÖN PARA INAHIBILITAR BOTÓN FINISH hasta que se haya cumplimentado todo lo requerido (**puede que se tenga que utilizar en TODOS LOS PASOS ANTERIORES), se encarga de:
- inhabilitar el botón de continuar hasta que los requisitos hayan sido cumplimentados.
  
-- 10. FUNCION PARA VOLVER AL PRINCIPIO (HACER REFRESH), se encarga de:
- hacewr refresh a la página para volver al principio.

--  */

/*const webLoaded = window.addEventListener('load', mainLoaded);

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


  //Event listener para estudiar funciones dependiendo a que le de
  //Botones de arriba que se cambie el iphone showed
  //Mouseover eventlistener
  //opacidad a elementos hasta que se le de click a algo
  //Finalmente el boton de buy resetea todo
}



function setMain(event) {

  if (event.target.tagName != "NAV") {
    const images = document.querySelectorAll(".image");
    const fieldsetImages = document.querySelector(".product-images");
    const fieldsetModel = document.querySelector(".iphone-model");
    const fieldsetColor = document.querySelector(".iphone-color");
    const fieldsetStorage = document.querySelector(".iphone-storage");
    let titlePhone = document.querySelector(".phone-title");
    let bigImage = document.querySelector(".image-big");
    let models = [];
    let model = "";
    let iColorsH = [];
    let iColors = [];
    let storages = [];
    //Remove the ting
    while (fieldsetImages.children.length !== 0) {
      fieldsetImages.children[0].remove();
    }

    while (fieldsetModel.children.length !== 0) {
      fieldsetModel.children[0].remove();
    }
    while (fieldsetColor.children.length !== 1) {
      fieldsetColor.children[1].remove();
    }
    while (fieldsetStorage.children.length !== 2) {
      fieldsetStorage.children[2].remove();
    }
    //Removed
    if (event.target.innerText.includes("iPhone 14")
      || event.target.innerText.includes("NEW")) {
      model = "14";
      models = [['iPhone 14', '6.1-inch display', 'From $799'],
      ['iPhone 14 Plus', '6.7-inch display', 'From 899$'],
      ['iPhone 14 Pro', '6.1-inch display', 'From 999$'],
      ['iPhone 14 Pro Max', '6.7-inch display', 'From 1099$']];
      iColorsH = ["#85a5b0", "#e2d7e8", "#f1e723", "#22263b", "#efefe8", "#f90000"];
      iColors = ["Blue", "Purple", "Yellow", "Midnight", "Starlight", "Red"];
      storages = [["128 GB", "From $799"], ["256 GB", "From $899"],
      ["512 GB", "From $1099"]];

    } else if (event.target.innerText === "iPhone 13") {
      model = "13";
      models = [["iPhone 13 mini", "5.4-inch display", "From $599"],
      ["iPhone 13", "6.1-inch display", "From $699"]];
      iColorsH = ["#206290", "#f6dddf", "#22263b", "#efefe8", "#033f1d", "#cd1c1c"];
      iColors = ["Blue", "Pink", "Midnight", "Starlight", "Green", "Red"];
      storages = [["128 GB", "From $699"], ["256 GB", "From $799"],
      ["512 GB", "From $999"]];

    } else if (event.target.innerText === "iPhone SE") {
      model = "SE";
      iColorsH = ["#22263b", "#efefe8", "#cd1c1c"];
      iColors = ["Midnight", "Starlight", "Red"];
      storages = [["64 GB", "From $429"], ["128 GB", "From $479"], ["256 GB", "From $579"]];
      fieldsetModel.style.margin = "0";
    }
    //Parte de las imágenes
    for (let i = 0; i < 4; i++) {
      let imageSource = `src = "iphones/${model}/general${i}.png"`;
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


    //Parte de phone model:
    titlePhone.innerHTML = "iPhone " + model;
    for (let i = 0; i < models.length; i++) {

      let inputModel = `<input id="iphone-${model + i}" type="radio" name="iphone-model" value="iphone-${model + i}">
                          <label for="iphone-${model + i}" class="label-model">
                          <span class="text-phone">
                            <p class="model-selected">${models[i][0]}</p>
                            <p class="phone-dimension">${models[i][1]}</p>
                          </span>
                          <span class="text-price">${models[i][2]}</span>
                          </label>`;

      fieldsetModel.insertAdjacentHTML("beforeend", inputModel);
    }
    let labelModel = document.querySelectorAll(".label-model");
    let radioModel = document.querySelectorAll(".iphone-model input");

    //console.log(labelModel[0].getAttribute("for").includes("iphone-14"));


    if (fieldsetModel.hasAttribute("model")) {
      if (fieldsetModel.getAttribute("model") === "iphone-140") {
        radioModel[0].checked = true;
        labelModel[0].click();
      } else if (fieldsetModel.getAttribute("model") === "iphone-141") {
        radioModel[1].checked = true;
        labelModel[1].click();
      } else if (fieldsetModel.getAttribute("model") === "iphone-130") {
        radioModel[0].checked = true;
        labelModel[0].click();
      } else {
        radioModel[1].checked = true;
        labelModel[1].click();
      }
      fieldsetModel.removeAttribute("model");
    }

    for (let i = 0; i < labelModel.length; i++) {
      radioModel[i].addEventListener("change", modelClicked);
    }


    for (let i = 0; i < iColorsH.length; i++) {
      let inputColor = `<input id="color${i}" type="radio" name="color-iphone" value="color${i}">
                          <label for="color${i}" class="color-election"></label>`;

      fieldsetColor.insertAdjacentHTML("beforeend", inputColor);

      let colors = document.querySelectorAll(".color-election");
      colors[colors.length - 1].style.backgroundColor = iColorsH[i];
      colors[colors.length - 1].color = iColors[i];
      colors[colors.length - 1].addEventListener("mouseover", overColor);
      colors[colors.length - 1].addEventListener("mouseout", outColor);
    }

    for (let i = 0; i < storages.length; i++) {
      let inputStorage = `<input id="${"storage" + "-" + i}" type="radio" name="storage" value="${"storage" + "-" + i}">
                              <label for="${"storage" + "-" + i}" class="label-storage">
                                  <span class="storage-selected">${storages[i][0]}</span>
                                  <span class="price-storage">${storages[i][1]}</span>
                              </label>`;
      fieldsetStorage.insertAdjacentHTML("beforeend", inputStorage);
    }


  }
}

function modelClicked() {
  //let labelModel = document.querySelectorAll(".label-model");
  let radioModel = document.querySelectorAll(".iphone-model input");
  const fieldsetModel = document.querySelector(".iphone-model");

  if (this.getAttribute("id") === "iphone-140" ||
    this.getAttribute("id") === "iphone-141" ||
    this.getAttribute("id").includes("iphone-13")) {

    const btnsIphones = document.querySelector(".iphone-selector");

    btnsIphones.addEventListener("click", setMain);

    //Default one is shown is iphone 14
    let btnSetMain;
    if (this.getAttribute("id").includes("iphone-14")) {
      console.log("le he dado al" + this.getAttribute("id"));
      fieldsetModel.setAttribute("model", this.getAttribute("id"));
      btnSetMain = document.querySelector("#i14-btn");
    } else {
      console.log("le he dado al" + this.getAttribute("id"));
      fieldsetModel.setAttribute("model", this.getAttribute("id"));
      btnSetMain = document.querySelector("#i13-btn");
    }

    btnSetMain.click();


  }
}

function imageClicked() {
  let bigImage = document.querySelector(".image-big");
  bigImage.src = this.children[0].src;
  bigImage = undefined;
}
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

function overColor() {
  let legendColor = document.querySelector(".color-legend");
  legendColor.innerText = "Color -" + " " + this.color;
  legendColor = undefined;
}

function outColor() {
  let legendColor = document.querySelector(".color-legend");
  legendColor.innerText = "";
  legendColor = undefined;
}*/





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

  timeCounter()

}


function timeCounter() {
  setTimeout(() => {
    console.log("You have 4 minutes remaining");
  }, 60000);
  setTimeout(() => {
    console.log("You have 4 minutes remaining");
  }, 120000);
  setTimeout(() => {
    console.log("You have 4 minutes remaining");
  }, 180000);
  setTimeout(() => {
    console.log("You have 4 minutes remaining");
  }, 240000);
  setTimeout(() => {
    refreshPage();
  }, 300000);
}