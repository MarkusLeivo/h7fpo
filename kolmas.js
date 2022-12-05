//Piltide fade-in JavaScripti alus: https://stackoverflow.com/questions/6121203/how-to-do-fade-in-and-fade-out-with-javascript-and-css

// set the initial opacity to 0
document.getElementById("fade-in").style.opacity = 0;

// use the setInterval function to gradually increase the element's opacity
setInterval(function() {
    // get the element
    var elem = document.getElementById("fade-in");
    // increase the element's opacity
    elem.style.opacity = parseFloat(elem.style.opacity) + 0.01;
    // stop the interval when the element is fully visible
    if (elem.style.opacity >= 1) {
      clearInterval(interval);
    }
  }, 10);

// set the initial opacity to 0
document.getElementById("fade-in2").style.opacity = 0;

// use the setInterval function to gradually increase the element's opacity
setInterval(function() {
    // get the element
    var elem = document.getElementById("fade-in2");
    // increase the element's opacity
    elem.style.opacity = parseFloat(elem.style.opacity) + 0.01;
    // stop the interval when the element is fully visible
    if (elem.style.opacity >= 1) {
      clearInterval(interval);
    }
  }, 10);