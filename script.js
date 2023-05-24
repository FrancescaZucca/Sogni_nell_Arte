/* NAVBARNAVBARNAVBARNAVBARNAVBARNAVBARNAVBARNAVBAR */
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunctionCatalogo() {
  document.getElementById("myDropdownCatalogo").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtnCatalogo')) {
  var myDropdownCatalogo = document.getElementById("myDropdownCatalogo");
    if (myDropdownCatalogo.classList.contains('show')) {
      myDropdownCatalogo.classList.remove('show');
    }
  }
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunctionProgetto() {
  document.getElementById("myDropdownProgetto").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtnProgetto')) {
  var myDropdownProgetto = document.getElementById("myDropdownProgetto");
    if (myDropdownProgetto.classList.contains('show')) {
      myDropdownProgetto.classList.remove('show');
    }
  }
}


/* SLIDESHOWHOMESLIDESHOWHOMESLIDESHOWHOMESLIDESHOWHOMESLIDESHOWHOMESLIDESHOWHOMESLIDESHOWHOMESLIDESHOWHOMESLIDESHOWHOMESLIDESHOWHOMESLIDESHOWHOMESLIDESHOWHOMESLIDESHOWHOME */

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("indexSlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

/* CAMBIOSFONDOINDEXCAMBIOSFONDOINDEXCAMBIOSFONDOINDEXCAMBIOSFONDOINDEXCAMBIOSFONDOINDEXCAMBIOSFONDOINDEXCAMBIOSFONDOINDEXCAMBIOSFONDOINDEX */

function indexBackground1() {
  document.getElementById("INDEX").style.backgroundImage = "url(img/opere/TheNightmare_Fuseli.jpeg)";
}

function indexBackground2() {
  document.getElementById("INDEX").style.backgroundImage = "url(img/opere/SuenoCausadoVueloAbejaAlrededorGranadaSegundoAntesDespertar_Dalì.jpg)";
}

function indexBackground3() {
  document.getElementById("INDEX").style.backgroundImage = "url(img/opere/TheSleepofReasonProducesMonsters_Goya.jpg)";
}

/* FILTRICATALOGOFILTRICATALOGOFILTRICATALOGOFILTRICATALOGOFILTRICATALOGOFILTRICATALOGOFILTRICATALOGOFILTRICATALOGO */

function apriChiudi() {
  var staDentro = document.getElementById("staDentro");
  var staFuori = document.getElementById("staFuori");
  if (staDentro.style.display === "none") {
    staDentro.style.display = "block";
    staFuori.style.left = "15%";
  } else {
    staDentro.style.display = "none";
    staFuori.style.left = "0";
  }
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function InOrdine() {
  document.getElementById("InOrdineContenuto").classList.toggle("show");
}
