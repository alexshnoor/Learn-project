const modalBtn = document.querySelector('.modal__button');
const courseBtn = document.querySelector('.course__button');
const modal = document.querySelector('.modal');
const modalInner = modal.querySelector('.modal__inner');

function buttonOpen(button) {
  button.addEventListener('click', () => {
    modal.style.display = 'flex';
  });
}

buttonOpen(modalBtn);
buttonOpen(courseBtn);

modal.addEventListener('click', (event) => {
  const modalContent = event.target.closest('.modal__inner');
  if (!modalContent) {
    modal.style.display = '';
  }
});


modalInner.style.position = 'relative';

const xBtn = document.createElement('div');
xBtn.innerHTML = '<span class="iconify" data-icon="emojione-monotone:cross-mark"></span>';
xBtn.style.cssText = `
  cursor: pointer;
  font-size: 2rem;
  position: absolute;
  top: 2rem;
  right: 2rem;
`;

modalInner.prepend(xBtn);

xBtn.addEventListener('click', () => {
  modal.style.display = '';
});
