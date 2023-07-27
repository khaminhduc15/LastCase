let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("carousel-item");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function btnMenu(){
  var menuBtn = document.getElementById("menuBtn");
  var sideNav = document.getElementById("sideNav");
  var menu = document.getElementById("menu");
  // sideNav.style.right = "-250px";
  menuBtn.onclick = function () {
    if (sideNav.style.right == "-200px") {
      sideNav.style.right = "0";
      menu.src = "Images/close.png";
    }
    else {
      sideNav.style.right = "-200px";
      menu.src = "Images/menu.png"
    }
  }
}