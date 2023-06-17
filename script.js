const da_ky1 = document.querySelector('.da_ky1');
const da_ky2 = document.querySelector('.da_ky2');
const ky_ten1 = document.querySelector('.ky_ten1');
const ky_ten2 = document.querySelector('.ky_ten2');

ky_ten1.addEventListener('focus', () => {
  da_ky1.classList.add('active');
});

ky_ten2.addEventListener('focus', () => {
  da_ky2.classList.add('active');
});

ky_ten1.addEventListener('blur', () => {
  da_ky1.classList.add('active');

});

ky_ten2.addEventListener('blur', () => {
  da_ky1.classList.add('active');
});