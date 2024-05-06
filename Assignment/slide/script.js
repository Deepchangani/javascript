let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");

let images = document.querySelectorAll(".image");

let Currentindex = 0;
function ShowCurrentImage() {
  images.forEach((slide, index) => {
    slide.style.display = index === Currentindex ? "block" : "none";
  }); 
}

function Prev() {
  Currentindex = (Currentindex - 1 + images.length) % images.length;
  ShowCurrentImage();
}

function Next() {
  Currentindex = (Currentindex + 1) % images.length;
  ShowCurrentImage();
}

window.onload = ShowCurrentImage;
