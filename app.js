const num5 = document.querySelector('#num5');
const num9 = document.querySelector('#num9');
const num0 = document.querySelector('#num0');

const list = [];

num5.addEventListener('click', () => {
  list.push(5);
  console.log(list);
});
num9.addEventListener('click', () => {
  list.push(9);
  console.log(list);
});
num0.addEventListener('click', () => {
  list.push(0);
  console.log(list);
});
