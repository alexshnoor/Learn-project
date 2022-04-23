'use strict'

const modalBtn = document.querySelector('.modal__button');
const modal = document.querySelector('.modal');
const courseBtn = document.querySelector('.course__button');

modalBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
})

courseBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
})

modal.addEventListener('click', (event) => {
    const modalContent = event.target.closest('.modal__inner');

    if (!modalContent) {
        modal.style.display = '';
    }
})

let xBtn = document.createElement('div');
xBtn.innerText = 'X';

modalInner.prepend(xBtn);

xBtn.style.cssText = `
    font-size:20px; 
    position:relative; 
    display:inline; 
    padding:10px; 
    bottom:75px; 
    left:240px; 
    cursor:pointer;
`;

xBtn.addEventListener('click', () => {
    modal.style.display = '';
})

