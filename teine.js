
//funktsioon, mis nuppu vajutusel kuvab ekraanile muusikat ning seejärel sellesama nuppu abil saab muusikat peita.
//allikad: https://bobbyhadz.com/blog/javascript-show-hide-div-by-id; https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_toggle_hide_show
function myFunction() {
    const btn = document.getElementById("btn")//nupp id-ga "btn" html failist.
    var x = document.getElementById("sport");//block, mida kuvatakse kui nuppu vajutatakse(muusika).
    if (x.style.display === "none") {//kui block on peidetud.
      x.style.display = "block";//block tuleb esile.
      btn.textContent = 'Hide content below';//nuppu tekst muutub.
    } else {
      x.style.display = "none";//block peidetakse.
      btn.textContent = 'Click here to find some relaxing music';//nuppu tekst muutub.
    }
  }


//programm, mis nuppu abil genereerib juhuslikke pilte.
//allikas: https://codepen.io/jsd041313/pen/RQEOWm
  const imageArray = [    //piltide kogu
    "loomad/1.png",
    "loomad/2.png",
    "loomad/3.png",
    "loomad/4.png",
    "loomad/5.png",
    "loomad/6.png",
    "loomad/7.png",
    "loomad/8.png",
    "loomad/10.png",
    "loomad/11.JPG",
    "loomad/12.JPG",
    "loomad/13.JPG",
    "loomad/14.JPG",
    "loomad/15.JPG",
    "loomad/16.JPG",
    "loomad/17.JPG",
    "loomad/18.JPG",
    "loomad/19.JPG",
    "loomad/20.JPG",
    "loomad/21.JPG",
    "loomad/22.JPG",
    "loomad/23.JPG",
    "loomad/24.JPG",
    "loomad/25.JPG",
    "loomad/26.JPG",
    "loomad/27.JPG",
    "loomad/28.JPG",
    "loomad/29.JPG",
    "loomad/30.JPG",
    "loomad/31.JPG",
    "loomad/32.JPG",
    "loomad/33.JPG",
    "loomad/34.JPG",
    "loomad/35.JPG",
    "loomad/36.JPG",
    "loomad/37.JPG",
    "loomad/38.JPG",
    "loomad/39.JPG",
    "loomad/40.JPG",
  ]
  const image = document.querySelector("img");//leiab html failist img.
  const button = document.querySelector("button");// leiab html failist nuppu.
  
  window.onload = () => generateRandomPicture(imageArray);//lehe sättimine.
  
  button.addEventListener("click", () => generateRandomPicture(imageArray));//kui nuppu vajutatakse, kutsutakse välja  generateRandomPicture funktsioon. 
  
  function generateRandomPicture(array){//pildile omistatakse suvaline number ning selle, alusel kuvataske suvalisi pilte.
    let randomNum = Math.floor(Math.random() * array.length); 
    image.setAttribute("src", array[randomNum]);
  }

  