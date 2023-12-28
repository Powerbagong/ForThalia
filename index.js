var musik = "";

const dynamicText = document.querySelector("h1 span");
const words = ["Selamat ulang tahun!", "Buon compleanno!", "saeng-il chugha haeyo!", "Shēngrì kuàilè!", "Otanjōbiomedetōgozaimasu!"];

// Variables to track the position and deletion status of the word
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

var x = document.getElementById("myAudio"); 
x.loop = true;
var vid = document.getElementById("myVideo"); 


AOS.init({ once: true, }); 

var audio = new Audio(musik); 

vid.addEventListener('play', function() {
  // Pause the music when the video starts playing
  x.pause();
});

vid.addEventListener('pause', function() {
  // Play the music when the video is paused
  x.play();
});
function mulai() { 
  console.log("mulai function called");
  x.play();
  typeEffect();
  document.querySelector(".open").style = "opacity: 0;"; 
  document.querySelector(".body").style = "overflow-y: scroll;"; 
  setTimeout(function () { document.querySelector(".open").style.display = "none"; }, 1000); } 
  
  function wa(isi) { window.open("https://api.whatsapp.com/send?phone=6282130367766&text= " + isi); } 
  
  async function tanya() { 
    var { value: kado } = await 
    swal.fire({ title: "Di hari spesial ini kamu pingin nya apa?", 
    input: "text", showCancelButton: false, }); 
    if (kado) { await swal.fire("Kirim jawabannya ke wa aku ya"); wa(kado); } 
    else { await swal.fire("Jangan dikosongin dong");} 
  } 

  async function ester() {
    var { value: kado } = await swal.fire({
        title: "Не Уильям",
        html: '<img src="Asset/frog.gif" alt="Custom Alt Text" style="width:100%;">', // Replace with the actual path to your GIF
        showCancelButton: true,
        confirmButtonText: "Hehe",
        cancelButtonText: "hehe",
    });
}


  const typeEffect = () => {
      const currentWord = words[wordIndex];
      const currentChar = currentWord.substring(0, charIndex);
      dynamicText.textContent = currentChar;
      dynamicText.classList.add("stop-blinking");
  
      if (!isDeleting && charIndex < currentWord.length) {
          // If condition is true, type the next character
          charIndex++;
          setTimeout(typeEffect, 100);
      } else if (isDeleting && charIndex > 0) {
          // If condition is true, remove the previous character
          charIndex--;
          setTimeout(typeEffect, 100);
      } else {
          // If word is deleted then switch to the next word
          isDeleting = !isDeleting;
          dynamicText.classList.remove("stop-blinking");
          wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
          setTimeout(typeEffect, 1000);
      }
  }
  

  
  
   