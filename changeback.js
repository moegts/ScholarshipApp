let btnRed = document.querySelector('#btn-red');
let btnGray = document.querySelector('#btn-gray');
let btnBlue = document.querySelector('#btn-blue');
let dropdown = document.querySelector('select');

btnRed.addEventListener('click', () => {
  document.body.style.background='red';
})

btnGray.addEventListener('click', () => {
  document.body.style.background='#2c2f33';
})

btnBlue.addEventListener('click', () => {
  document.body.style.background='blue';
})

