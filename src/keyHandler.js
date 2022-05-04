let keycode;
const textarea = document.querySelector('#textarea');
document.addEventListener('keydown', (event) => {
  textarea.value += event.code;
  console.log(event.code);
  try {
    document.querySelector(`.key${event.key.toLowerCase()}`).classList.add('pushed');
  } catch (error) {
  }
});
document.addEventListener('keyup', (event) => {
  document.querySelector(`.key${event.key.toLowerCase()}`).classList.remove('pushed');
});
