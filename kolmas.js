//Piltide fade-in JavaScripti alus: https://stackoverflow.com/questions/6121203/how-to-do-fade-in-and-fade-out-with-javascript-and-css

// Algne opacity 0 peal
document.getElementById("fade-in").style.opacity = 0;

//setInterval funktsiooniga saab suurendada elemendi opacityt
setInterval(function() {
    // võtame id kaudu elemendi
    var elem = document.getElementById("fade-in");
    // suurendame opacityt
    elem.style.opacity = parseFloat(elem.style.opacity) + 0.01;
    // opacity muutmine lõpeb, kui opacity on 1
    if (elem.style.opacity >= 1) {
      clearInterval(interval);
    }
  }, 10);

// Algne opacity 0 peal
document.getElementById("fade-in2").style.opacity = 0;
//setInterval funktsiooniga saab suurendada elemendi opacityt
setInterval(function() {
    // võtame id kaudu elemendi
    var elem = document.getElementById("fade-in2");
    // suurendame opacityt
    elem.style.opacity = parseFloat(elem.style.opacity) + 0.01;
    // opacity muutmine lõpeb, kui opacity on 1
    if (elem.style.opacity >= 1) {
      clearInterval(interval);
    }
  }, 10);