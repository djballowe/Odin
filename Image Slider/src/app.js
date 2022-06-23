const slideshow = document.getElementsByClassName('image');
const num = document.querySelector('.container').childElementCount;
const left = document.getElementById('left');
const right = document.getElementById('right');
const index = document.getElementById('counter');

let slide = 1;
if (slide > slideshow.length - 1) {
  resetSlide();
}

right.addEventListener('click', () => {
    slideshow[slide].style.display = 'flex';
    slideshow[slide - 1].style.display = 'none';
    slide++;
})

function resetSlide() {
  slide = 1;
  slideshow[0].style.display = 'flex';
  slideshow[slideshow.length - 1] = 'none';
}

