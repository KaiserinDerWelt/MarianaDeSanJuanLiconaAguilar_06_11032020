// Open my Modal
function openModalBox() {
    document.getElementById("myModal").style.display = "block";
  }
  
  // Close my Modal
  function closeModalBox() {
    document.getElementById("myModal").style.display = "none";
  }
  
  var slideIndex;
  function currentSlide(n) {
    openModalBox()
    slideIndex = n;
    showSlides(n)
  }

  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
  }