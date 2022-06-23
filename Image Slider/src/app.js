const slideshow = document.getElementsByClassName('image');
const num = document.querySelector('.container').childElementCount;
const left = document.getElementById('left');
const right = document.getElementById('right');
const index = document.getElementById('counter');

let slide = 1;

right.addEventListener('click', () => {
  if (slide > slideshow.length - 1) {
    resetSlideForward();
  } else {
    slideshow[slide].style.display = 'flex';
    slideshow[slide - 1].style.display = 'none';
    slide++;
  }
})

left.addEventListener('click', () => {
  console.log(slide)
  if (slide === 1) {
    resetSlideBackward();
  } else {
    slideshow[slide - 1].style.display = 'none';
    slideshow[slide - 2].style.display = 'flex';
    slide--;
  }
})

function resetSlideForward() {
  slide = 1;
  slideshow[0].style.display = 'flex';
  slideshow[slideshow.length - 1].style.display = 'none';
}

function resetSlideBackward() {
  slide = slideshow.length;
  slideshow[slideshow.length - 1].style.display = 'flex';
  slideshow[0].style.display = 'none';
}

