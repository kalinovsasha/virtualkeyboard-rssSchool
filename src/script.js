function insertKeyboard(tag) {
  const body = document.querySelector(`${tag}`);
  const row1Keys = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'];
  const row2Keys = ['TAB', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'del'];
  const row3Keys = ['Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'j', 'k', 'l', ';', '\'', 'Enter'];
  const row4Keys = ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲', 'Shift'];
  const row5Keys = ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', '◄', '▼', '►', 'Ctrl'];
  //
  body.insertAdjacentHTML(
    'afterbegin',
    `
<div class="keyboard">
</div>
`,
  );
  // Create rows 4-0
  const keyboard = document.querySelector('.keyboard');
  for (let i = 0; i < 5; i += 1) {
    keyboard.insertAdjacentHTML(
      'afterbegin',
      `
        <div class="keyboard_rows row${i}"></div>
    `,
    );
  }
  /// 1 row
  const row4 = document.querySelector('.row4');
  for (let i = 0; i < 14; i += 1) {
    if (row1Keys[13 - i] !== 'Backspace') {
      row4.insertAdjacentHTML(
        'afterbegin',
        `
            <div class="key">
                <div  class="ru disableRu"><p>${row1Keys[13 - i]}</p></div>
                <div class="en "><p>${row1Keys[13 - i]}</p></div>
            </div>
              `,
      );
    } else {
      row4.insertAdjacentHTML(
        'afterbegin',
        `
              <div class="key longButton">
                  <div  class="en longButton"><p>${row1Keys[13 - i]}</p></div>
                  <div class="ru disableRu longButton "><p>2</p></div>
              </div>
                `,
      );
    }
  }
  /// ////2 row
  const row3 = document.querySelector('.row3');
  for (let i = 0; i < 15; i += 1) {
    if (row2Keys[14 - i] !== 'TAB') {
      row3.insertAdjacentHTML(
        'afterbegin',
        `
            <div class="key">
                <div  class="en "><p>${row2Keys[14 - i]}</p></div>
                <div class="ru disableRu"><p>2</p></div>
            </div>
              `,
      );
    } else {
      row3.insertAdjacentHTML(
        'afterbegin',
        `
              <div class="key longButton">
                  <div  class="en longButton"><p>${row2Keys[14 - i]}</p></div>
                  <div class="ru disableRu longButton "><p>2</p></div>
              </div>
                `,
      );
    }
  }
  /// ////3 row
  const row2 = document.querySelector('.row2');
  for (let i = 0; i < 14; i += 1) {
    if (row3Keys[13 - i] !== 'Caps Lock' && row3Keys[13 - i] !== 'Enter') {
      row2.insertAdjacentHTML(
        'afterbegin',
        `
            <div class="key">
                <div  class="en "><p>${row3Keys[13 - i]}</p></div>
                <div class="ru disableRu"><p>2</p></div>
            </div>
              `,
      );
    } else {
      row2.insertAdjacentHTML(
        'afterbegin',
        `
              <div class="key longButton">
                  <div  class="en longButton"><p>${row3Keys[13 - i]}</p></div>
                  <div class="Ru disableRu longButton "><p>2</p></div>
              </div>
                `,
      );
    }
  }

  /// ////4 row
  const row1 = document.querySelector('.row1');
  for (let i = 0; i < 13; i += 1) {
    if (row4Keys[12 - i] !== 'Shift') {
      row1.insertAdjacentHTML(
        'afterbegin',
        `
            <div class="key">
                <div  class="en "><p>${row4Keys[12 - i]}</p></div>
                <div class="ru disableRu"><p>2</p></div>
            </div>
              `,
      );
    } else {
      row1.insertAdjacentHTML(
        'afterbegin',
        `
              <div class="key longButton">
                  <div  class="en longButton"><p>${row4Keys[12 - i]}</p></div>
                  <div class="Ru disableRu longButton "><p>2</p></div>
              </div>
                `,
      );
    }
  }
  /// ////5 row
  const row0 = document.querySelector('.row0');
  for (let i = 0; i < 9; i += 1) {
    if (row5Keys[8 - i] === 'Space') {
      row0.insertAdjacentHTML(
        'afterbegin',
        `
                  <div class="key space">
                      <div  class="en space"></div>
                      <div class="ru disableRu space"><p></p></div>
                  </div>
                    `,
      );
    }
    if (row5Keys[8 - i] === 'Ctrl') {
      row0.insertAdjacentHTML(
        'afterbegin',
        `
                <div class="key ctrlBtn">
                    <div  class="en "><p>${row5Keys[8 - i]}</p></div>
                    <div class="ru disableRu "><p>${row5Keys[8 - i]}</p></div>
                </div>
                  `,
      );
    }
    if (row5Keys[8 - i] === 'Win') {
      row0.insertAdjacentHTML(
        'afterbegin',
        `
                <div class="key winBtn">
                    <div  class="en "><p>${row5Keys[8 - i]}</p></div>
                    <div class="ru disableRu "><p>${row5Keys[8 - i]}</p></div>
                </div>
                  `,
      );
    }
    if (row5Keys[8 - i] === 'Alt') {
      row0.insertAdjacentHTML(
        'afterbegin',
        `
                <div class="key altBtn">
                    <div  class="en "><p>${row5Keys[8 - i]}</p></div>
                    <div class="ru disableRu "><p>${row5Keys[8 - i]}</p></div>
                </div>
                  `,
      );
    }
    if (row5Keys[8 - i] === '◄') {
      row0.insertAdjacentHTML(
        'afterbegin',
        `
                <div class="key leftBtn">
                    <div  class="en "><p>${row5Keys[8 - i]}</p></div>
                    <div class="ru disableRu "><p>${row5Keys[8 - i]}</p></div>
                </div>
                  `,
      );
    }
    if (row5Keys[8 - i] === '▼') {
      row0.insertAdjacentHTML(
        'afterbegin',
        `
                <div class="key downBtn">
                    <div  class="en "><p>${row5Keys[8 - i]}</p></div>
                    <div class="ru disableRu "><p>${row5Keys[8 - i]}</p></div>
                </div>
                  `,
      );
    }
    if (row5Keys[8 - i] === '►') {
      row0.insertAdjacentHTML(
        'afterbegin',
        `
                <div class="key rightBtn">
                    <div  class="en "><p>${row5Keys[8 - i]}</p></div>
                    <div class="ru disableRu "><p>${row5Keys[8 - i]}</p></div>
                </div>
                  `,
      );
    }
  }
}

insertKeyboard('body');
