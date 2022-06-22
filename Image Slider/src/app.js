const slideshow = document.querySelectorAll('.image');
const num = document.querySelector('.container').childElementCount;
const left = document.getElementById('left');
const right = document.getElementById('right');
const index = document.getElementById('counter');

let counter = 1;

left.addEventListener('click', () => {
  for (let i = 0; i < num; i++) {
    if (slideshow[i].getAttribute('data') === 'shown') {
      slideshow[i].classList.remove('shown-image');
      slideshow[i + 1].classList.add('shown-image');
      counter.textContent = `${counter} / 4`;
      coutner--;
      if (counter === 0) {
        counter = 4;
      }
    }
  }
});

right.addEventListener('click', () => {
  for (let i = 0; i < num; i++) {
    if (counter < 4 && slideshow[counter - 1].getAttribute('data') === 'shown') {
      slideshow[counter - 1].removeAttribute('data');
      slideshow[counter - 1].setAttribute('data', 'hide');
      slideshow[counter - 1].classList.remove('shown-image');
      slideshow[counter].classList.add('shown-image');
      slideshow[counter].removeAttribute('data');
      slideshow[counter].setAttribute('data', 'shown');
      index.textContent = `${counter + 1} / 4`;
      counter++;
      console.log(counter);
      break;
    } else if (counter === 4) {
      counter = 0;
      slideshow[0].removeAttribute('data');
      slideshow[0].setAttribute('data', 'shown');
      slideshow[0].classList.remove('hide-img');
      slideshow[3].classList.add('shown-image');
      slideshow[3].classList.add('hide-image');
      slideshow[3].removeAttribute('data');
      slideshow[3].setAttribute('data', 'hide');
      index.textContent = `${counter + 1} / 4`;
      counter++;
      console.log(counter);
      break;
    }
  }
});

window.addEventListener('click', () => {

});
