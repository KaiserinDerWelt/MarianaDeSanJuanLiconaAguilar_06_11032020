// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".contactButton");
const formData = document.querySelectorAll(".formData");


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


// Close modal
function closeModal(){
  modalbg.style.display ="none";
}

function closeSuccess(){
  modalbg.style.display ="none";
}


//Close modal with esc for accesibility affairs
window.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    modalbg.style.display = 'none'
  }
})