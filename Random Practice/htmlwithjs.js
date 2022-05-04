const container = document.querySelector('#container');

const red = document.createElement('p');
red.classList.add('red');
red.textContent = 'Hey Im red!';
red.style.color = 'red';

container.appendChild(red);

const blue = document.createElement('h2');
blue.classList.add('blue');
blue.textContent = 'Hey Im blue!';
blue.style.color = 'blue';

container.appendChild(blue);

const div = document.createElement('div');
div.classList.add('content');
div.style.border = 'thin solid black';
div.style.backgroundColor = 'pink';

container.appendChild(div);

