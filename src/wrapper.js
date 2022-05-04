function generateWraper() {
  const body = document.querySelector('body');
  body.insertAdjacentHTML(
    'afterbegin',
    `
<div class="wrapper">
</div>
`,
  );
  const wrapper = document.querySelector('.wrapper');
  wrapper.insertAdjacentHTML(
    'afterbegin',
    `
    <h1>Virtual Keyboard </h1>
    <textarea name="" id="textarea" cols="30" rows="10" readonly></textarea>
`,
  );
}
generateWraper();
