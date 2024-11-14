let Rbutton = document.getElementById('right_button');
let Lbutton = document.getElementById('left_button');
let slides = document.getElementById('slides');
let counter = 0;

Rbutton.addEventListener("click",()=>{
    counter-=700;
    if(counter == -2100) {
        counter = 0;
    }
    slides.style.transform = `translateX(${counter}px)`;
  });

Lbutton.addEventListener("click",()=>{
    counter+=700;
    if(counter > 0) {
        counter = -1400;
    }
    slides.style.transform = `translateX(${counter}px)`;
  });






