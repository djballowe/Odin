const drop = document.querySelector('#drop-down');
const home = document.querySelector('#home');

home.addEventListener('mouseover', () => {
  drop.style.display = 'block';
  window.addEventListener('mouseover', (e) => {
    if (e.target.getAttribute('data') !== 'drop') {
      drop.style.display = 'none';
    }
  });
});
