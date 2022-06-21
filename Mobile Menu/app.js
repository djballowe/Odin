const overlay = document.getElementById("overlay");
const menu = document.getElementById("pop-out");
const burg = document.getElementById("hamburger");

burg.addEventListener("click", () => {
   menu.classList.add('pop-out-open');
});

overlay.addEventListener('click', () => {
    menu.classList.remove('pop-out-open');
})
