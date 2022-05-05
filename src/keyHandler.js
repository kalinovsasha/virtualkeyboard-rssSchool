const textarea = document.querySelector('#textarea');
const specialKeys = [];
document.addEventListener('keydown', (event) => {
  if (event.code !== 'Backspace') {
    textarea.value += event.code;
  }
  if (event.code === 'Backspace') {
    textarea.value = textarea.value.slice(0, textarea.value.length - 1);
  }
  console.log(event.code);
  try {
    document.querySelector(`.${event.code}`).classList.add('pushed');
  } catch (error) {
  }
});
document.addEventListener('keyup', (event) => {
  document.querySelector(`.${event.code}`).classList.remove('pushed');
});
