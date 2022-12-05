import lottieWeb from 'https://cdn.skypack.dev/lottie-web';

//Juhuslike tsitaatide JavaScripti alus võetud siit: https://www.webdevelopersnotes.com/random-text-display-using-javascript-1
//Tsitaadid: https://www.oberlo.com/blog/motivational-quotes 

//Arrayd on muutujad, millele saab väärtusi anda. Iga tsitaat on justkui üks array.
var r_text = new Array ();
r_text[0] = "“All our dreams can come true, if we have the courage to pursue them.” —Walt Disney";
r_text[1] = "“The secret of getting ahead is getting started.” —Mark Twain";
r_text[2] = "“It’s hard to beat a person who never gives up.” —Babe Ruth";
r_text[3] = "“If people are doubting how far you can go, go so far that you can’t hear them anymore.” —Michele Ruiz";
r_text[4] = "“It’s no use going back to yesterday, because I was a different person then.” ―Lewis Carroll";
r_text[5] = "“Do what you feel in your heart to be right―for you’ll be criticized anyway.” ―Eleanor Roosevelt";
r_text[6] = "“You can either experience the pain of discipline or the pain of regret. The choice is yours.” —Unknown";
r_text[7] = "“If you’re offered a seat on a rocket ship, don’t ask what seat! Just get on.” ―Sheryl Sandberg"
r_text[8] = "“Some people want it to happen, some wish it would happen, others make it happen.” ―Michael Jordan"
r_text[9] = "“Great things are done by a series of small things brought together.” ―Vincent Van Gogh"
r_text[10] = "“Keep your eyes on the stars, and your feet on the ground.” ―Theodore Roosevelt"
r_text[11] = "“Today is your opportunity to build the tomorrow you want.” ―Ken Poirot"
r_text[12] = "“Believe in yourself, take on your challenges, dig deep within yourself to conquer fears. Never let anyone bring you down. You got to keep going.” ―Chantal Sutherland"
var i = Math.floor(13*Math.random())    //Valitakse suvaline array ehk tsitaat.
document.write(r_text[i]);  //Kirjutab footerisse suvaliselt valitud tsitaati.


//Footeri nupu JavaScripti alus: https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
// Kui kasutaja vajutab footeris olevale nupule, kerib leht sujuvalt tagasi üles
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTo({ top: 0, behavior: "smooth"}) = 0; // For Chrome, Firefox, IE and Opera
}



