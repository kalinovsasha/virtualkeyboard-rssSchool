let capsLockStatus = localStorage.getItem('capsLockStatus');
let lang=localStorage.getItem('lang');
/// ///////////////////////////////////////////////////////////////////////////////////////////////
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
/// ////////////////////////////////////////////////////////////////////////////////////////////
function insertKeyboard(tag) {
  const body = document.querySelector(`${tag}`);
  const keyId = ['Backquote', 'Backspace', 'Delete', 'ShiftLeft', 'ShiftRight', 'MetaLeft', 'AltLeft', 'AltRight', 'Tab'];
  const digits = ['Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'BracketLeft', 'BracketRight', 'Backslash'];
  const row1Keys = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'];
  const row2Keys = ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'del'];
  const row2KeysRu = ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'del'];
  const row3Keys = ['Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'j', 'k', 'l', ';', '\'', 'Enter'];
  const row3KeysRu = ['Caps Lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', '\'', 'Enter'];
  const row4Keys = ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲', 'Shift'];
  const row4KeysRu = ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '', '▲', 'Shift'];
  const row5Keys = ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', '◄', '▼', '►', 'Ctrl'];
  //
  body.insertAdjacentHTML(
    'beforeend',
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
    if (row1Keys[13 - i] !== 'Backspace' && i != 13) {
      row4.insertAdjacentHTML(
        'afterbegin',
        `
            <div id="${row1Keys[13 - i].toLowerCase()}" class="key ${digits[12 - i]}">
                <div  class="ru disable">${row1Keys[13 - i]}</div>
                <div  class="ruCaps disable">${row1Keys[13 - i]}</div>
                <div class="en ">${row1Keys[13 - i]}</div>
                <div  class="enCaps disable">${row1Keys[13 - i]}</div>
            </div>
              `,
      );
    }
    if (row1Keys[13 - i] == 'Backspace') {
      row4.insertAdjacentHTML(
        'afterbegin',
        `
              <div class="key ${keyId[1]} longButton">
                  <div  class="en  longButton">${row1Keys[13 - i]}</div>
                  <div  class="ru  longButton">${row1Keys[13 - i]}</div>
              </div>
                `,
      );
    }
    if (i == 13) {
      row4.insertAdjacentHTML(
        'afterbegin',
        `
              <div class="key ${keyId[0]} ">
                  <div  class="en  ">${row1Keys[13 - i]}</div>
                  <div  class="ru  disable ">${row1Keys[13 - i]}</div>
              </div>
                `,
      );
    }
  }
  /// ////2 row
  const row3 = document.querySelector('.row3');
  for (let i = 0; i < 15; i += 1) {
    if (i > 3 && i != 14) {
      row3.insertAdjacentHTML(
        'afterbegin',
        `
            <div id="${row2Keys[14 - i].toLowerCase()}" class="key Key${row2Keys[14 - i].toUpperCase()}">
                <div  class="en ">${row2Keys[14 - i]}</div>
                <div class="ru disable">${row2KeysRu[14 - i]}</div>
                <div class="ruCaps disable">2</div>
                <div class="enCaps disable">2</div>
                
            </div>
              `,
      );
    }
    if (i == 14) {
      row3.insertAdjacentHTML(
        'afterbegin',
        `
              <div class="key ${keyId[8]} longButton">
                  <div  class="en longButton">${row2Keys[14 - i]}</div>
                  <div class="ru disable longButton ">${row2Keys[14 - i]}</div>
              </div>
                `,
      );
    }
    if (i < 4 && i !== 0) {
      row3.insertAdjacentHTML(
        'afterbegin',
        `
              <div class="key ${digits[15 - i]} ">
                  <div  class="en ">${row2Keys[14 - i]}</div>
                  <div class="ru disable  ">${row2Keys[14 - i]}</div>
              </div>
                `,
      );
    }
    if (i == 0) {
      row3.insertAdjacentHTML(
        'afterbegin',
        `
              <div class="key ${keyId[2]} ">
                  <div  class="en ">${row2Keys[14 - i]}</div>
                  <div class="ru disable  ">${row2Keys[14 - i]}</div>
              </div>
                `,
      );
    }
  }
  /// /3 row
  const row2 = document.querySelector('.row2');
  for (let i = 0; i < 14; i += 1) {
    if (row3Keys[13 - i] !== 'Caps Lock' && row3Keys[13 - i] !== 'Enter' && i != 1 && i != 2) {
      row2.insertAdjacentHTML(
        'afterbegin',
        `
            <div id="${row3Keys[13 - i].toLowerCase()}" class="key Key${row3Keys[13 - i].toUpperCase()}">
                <div  class="en ">${row3Keys[13 - i]}</div>
                <div class="enCaps disable"></div>
                <div class="ru disable">${row3KeysRu[13 - i]}</div>
                <div class="ruCaps disable">2</div>
            </div>
              `,
      );
    } if (i == 13) {
      row2.insertAdjacentHTML(
        'afterbegin',
        `
              <div class="key longButton CapsLock">
                  <div  class="en longButton">${row3Keys[13 - i]}</div>
                  <div class="ru disable longButton ">${row3Keys[13 - i]}</div>
              </div>
                `,
      );
    }
    if (i == 2) {
      row2.insertAdjacentHTML(
        'afterbegin',
        `
              <div class="key  Semicolon">
                  <div  class="en ">${row3Keys[13 - i]}</div>
                  <div class="ru disable  ">${row3Keys[13 - i]}</div>
              </div>
                `,
      );
    }
    if (i == 1) {
      row2.insertAdjacentHTML(
        'afterbegin',
        `
              <div class="key  Quote">
                  <div  class="en ">${row3Keys[13 - i]}</div>
                  <div class="ru disable  ">${row3Keys[13 - i]}</div>
              </div>
                `,
      );
    }
    if (i == 0) {
      row2.insertAdjacentHTML(
        'afterbegin',
        `
              <div class="key longButton Enter">
                  <div  class="en longButton">${row3Keys[13 - i]}</div>
                  <div class="ru disable longButton ">${row3Keys[13 - i]}</div>
              </div>
                `,
      );
    }
  }

  /// ////4 row
  const row1 = document.querySelector('.row1');
  for (let i = 0; i < 13; i += 1) {
    if (row4Keys[12 - i] !== 'Shift' && i > 4) {
      row1.insertAdjacentHTML(
        'afterbegin',
        `
            <div id="${row4Keys[12 - i].toLowerCase()}" class="key Key${row4Keys[12 - i].toUpperCase()}">
                <div  class="en ">${row4Keys[12 - i]}</div>
                <div class="enCaps disable">2</div>
                <div class="ru disable">${row4KeysRu[12 - i]}</div>
                <div class="ruCaps disable">2</div>
            </div>
              `,
      );
    }
    if (i == 12) {
      row1.insertAdjacentHTML(
        'afterbegin',
        `
              <div class="key ShiftLeft longButton">
                  <div  class="en longButton">${row4Keys[12 - i]}</div>
                  <div class="ru disable longButton ">${row4Keys[12 - i]}</div>
              </div>
                `,
      );
    }
    if (i == 0) {
      row1.insertAdjacentHTML(
        'afterbegin',
        `
              <div class="key ShiftRight longButton">
                  <div  class="en longButton">${row4Keys[12 - i]}</div>
                  <div class="ru disable longButton ">${row4Keys[12 - i]}</div>
              </div>
                `,
      );
    }

    if (i == 1) {
      row1.insertAdjacentHTML(
        'afterbegin',
        `
              <div class="key ArrowUp ">
                  <div  class="en ">${row4Keys[12 - i]}</div>
                  <div class="ru disable  ">${row4Keys[12 - i]}</div>
              </div>
                `,
      );
    }
    if (i == 2) {
      row1.insertAdjacentHTML(
        'afterbegin',
        `
              <div class="key Slash ">
                  <div  class="en ">${row4Keys[12 - i]}</div>
                  <div class="ru disable  ">${row4Keys[12 - i]}</div>
              </div>
                `,
      );
    }
    if (i == 3) {
      row1.insertAdjacentHTML(
        'afterbegin',
        `
              <div class="key Period ">
                  <div  class="en ">${row4Keys[12 - i]}</div>
                  <div class="ru disable  ">${row4Keys[12 - i]}</div>
              </div>
                `,
      );
    }
    if (i == 4) {
      row1.insertAdjacentHTML(
        'afterbegin',
        `
              <div class="key Comma ">
                  <div  class="en ">${row4Keys[12 - i]}</div>
                  <div class="ru disable  ">${row4Keys[12 - i]}</div>
              </div>
                `,
      );
    }
  }
  /// ////5 row
  const row0 = document.querySelector('.row0');
  for (let i = 0; i < 9; i += 1) {
    if (i == 8) {
      row0.insertAdjacentHTML(
        'afterbegin',
        `
                <div class="key ControlLeft">
                    <div  class="en ">${row5Keys[8 - i]}</div>
                    <div class="ru disable ">${row5Keys[8 - i]}</div>
                </div>
                  `,
      );
    }
    if (i == 7) {
      row0.insertAdjacentHTML(
        'afterbegin',
        `
                <div class="key MetaLeft">
                    <div  class="en ">${row5Keys[8 - i]}</div>
                    <div class="ru disable ">${row5Keys[8 - i]}</div>
                </div>
                  `,
      );
    }
    if (i == 6) {
      row0.insertAdjacentHTML(
        'afterbegin',
        `
                <div class="key AltLeft">
                    <div  class="en ">${row5Keys[8 - i]}</div>
                    <div class="ru disable ">${row5Keys[8 - i]}</div>
                </div>
                  `,
      );
    }
    if (i == 5) {
      row0.insertAdjacentHTML(
        'afterbegin',
        `
                <div class="key Space">
                </div>
                  `,
      );
    }
    if (i == 4) {
      row0.insertAdjacentHTML(
        'afterbegin',
        `
                <div class="key AltRight">
                    <div  class="en ">${row5Keys[8 - i]}</div>
                    <div class="ru disable ">${row5Keys[8 - i]}</div>
                </div>
                  `,
      );
    }
    if (i == 3) {
      row0.insertAdjacentHTML(
        'afterbegin',
        `
                <div class="key ArrowLeft">
                    <div  class="en ">${row5Keys[8 - i]}</div>
                    <div class="ru disable ">${row5Keys[8 - i]}</div>
                </div>
                  `,
      );
    }
    if (i == 2) {
      row0.insertAdjacentHTML(
        'afterbegin',
        `
                <div class="key ArrowDown">
                    <div  class="en ">${row5Keys[8 - i]}</div>
                    <div class="ru disable ">${row5Keys[8 - i]}</div>
                </div>
                  `,
      );
    }
    if (i == 1) {
      row0.insertAdjacentHTML(
        'afterbegin',
        `
                <div class="key ArrowRight">
                    <div  class="en ">${row5Keys[8 - i]}</div>
                    <div class="ru disable ">${row5Keys[8 - i]}</div>
                </div>
                  `,
      );
    }
    if (i == 0) {
      row0.insertAdjacentHTML(
        'afterbegin',
        `
                <div class="key ControlRight">
                    <div  class="en ">${row5Keys[8 - i]}</div>
                    <div class="ru disable ">${row5Keys[8 - i]}</div>
                </div>
                  `,
      );
    }
  }
}

function addKeyHandlers() {
  const keys = document.querySelectorAll('.key');
  for (let i = 0; i <= 64; i++) {
    keys[i].addEventListener('mousedown', clickHandler);
    keys[i].addEventListener('mouseup', clickHandlerUp);
  }
}

function clickHandler(e) {
  const exclude = ['Shift', 'Caps Lock', 'Ctrl', 'del', 'Tab', 'Alt', 'Backspace', 'Win', 'Enter'];
  const textarea = document.querySelector('#textarea');
  if (!exclude.includes(e.currentTarget.innerText)) {
    textarea.value += e.currentTarget.innerText;
    e.currentTarget.classList.add('pushed');
  }
}
function clickHandlerUp(e) {
  e.currentTarget.classList.remove('pushed');
}
function getCapsLockStatus() {
  if (capsLockStatus == 'true') {
    document.querySelector('.CapsLock').classList.add('pushed');
  } else {
    document.querySelector('.CapsLock').classList.remove('pushed');
  }
}

generateWraper();
insertKeyboard('.wrapper');
addKeyHandlers();
getCapsLockStatus();

const textarea = document.querySelector('#textarea');
document.addEventListener('keydown', (event) => {
/////////////Change LAnguage
  if (event.shiftKey && event.altKey) {
    let ru = document.querySelectorAll('.ru')
    let en= document.querySelectorAll('.en')
    lang=(lang!='Ru')?"Ru":"En";
    localStorage.setItem('lang',lang);
		textarea.value +=(localStorage.getItem('lang'));
    if(lang!="En"){
      console.log( document.querySelector('.en'))
      for(i in ru){
        ru[i].classList.remove('disable');
        en[i].classList.add('disable');
      }
    }else{
      for(i in en){
        en[i].classList.remove('disable');
        ru[i].classList.add('disable');
      }
    }
	}
  if (event.code !== 'Backspace' && event.code !== 'CapsLock') {
    textarea.value += document.querySelector(`.${event.code}`).innerText;
  }
  if (event.code === 'Backspace') {
    textarea.value = textarea.value.slice(0, textarea.value.length - 1);
  }
  if (event.code === 'CapsLock') {
    if (capsLockStatus !== 'true') {
      localStorage.setItem('capsLockStatus', 'true');
      capsLockStatus = 'true';
      document.querySelector(`.${event.code}`).classList.add('pushed');
    } else {
      document.querySelector(`.${event.code}`).classList.remove('pushed');
      capsLockStatus = 'false';
      localStorage.setItem('capsLockStatus', 'false');
    }
  }
  try {
    if (event.code !== 'CapsLock') {
      document.querySelector(`.${event.code}`).classList.add('pushed');
    }
  } catch (error) {
  }
});
document.addEventListener('keyup', (event) => {
  if (event.code !== 'CapsLock') {
    document.querySelector(`.${event.code}`).classList.remove('pushed');
  }
});

