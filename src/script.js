function deleteKey(textarea) {
  const pos = textarea.selectionEnd;
  textarea.value = textarea.value.slice(0, textarea.selectionEnd)
    + textarea.value.slice(textarea.selectionEnd + 1);
  textarea.selectionEnd = pos;
}

function backspaceKey(textarea) {
  const pos = textarea.selectionEnd;
  if (textarea.selectionEnd - 1 > 0) {
    textarea.value = textarea.value.slice(0, textarea.selectionEnd - 1)
    + textarea.value.slice(textarea.selectionEnd);
  } else {
    textarea.value = textarea.value.slice(1);
  }

  textarea.selectionEnd = pos > 0 ? pos - 1 : pos;
}
function insertText(textarea, text) {
  const cursorPos = textarea.selectionEnd;
  textarea.value = textarea.value.slice(0, textarea.selectionEnd)
  + text + textarea.value.slice(textarea.selectionEnd);
  textarea.selectionEnd = cursorPos + text.length;
}
let capsLockStatus = localStorage.getItem('capsLockStatus');
let lang = localStorage.getItem('lang');
// Disable tab default behaviour
window.onkeydown = (evt) => {
  if (evt.key === 'Tab') {
    evt.preventDefault();
  }
};
function shiftHandler(insert = true) {
  const ru = document.querySelectorAll('.ru');
  const en = document.querySelectorAll('.en');
  const ruCaps = document.querySelectorAll('.ruCaps');
  const enCaps = document.querySelectorAll('.enCaps');
  const ruShift = document.querySelectorAll('.ruShift');
  const enShift = document.querySelectorAll('.enShift');
  if (insert === true) {
    if (lang === 'en') {
      for (let i = 0; i < 63; i += 1) {
        en[i].classList.add('disable');
        enCaps[i].classList.add('disable');
        enShift[i].classList.remove('disable');
      }
    }
    if (lang === 'ru') {
      for (let i = 0; i < 63; i += 1) {
        ru[i].classList.add('disable');
        ruCaps[i].classList.add('disable');
        ruShift[i].classList.remove('disable');
      }
    }
  } else if (capsLockStatus === 'false') {
    if (lang === 'en') {
      for (let i = 0; i < 63; i += 1) {
        en[i].classList.remove('disable');
        enCaps[i].classList.add('disable');
        enShift[i].classList.add('disable');
      }
    }
    if (lang === 'ru') {
      for (let i = 0; i < 63; i += 1) {
        ru[i].classList.remove('disable');
        ruCaps[i].classList.add('disable');
        ruShift[i].classList.add('disable');
      }
    }
  } else {
    if (lang === 'en') {
      for (let i = 0; i < 63; i += 1) {
        en[i].classList.add('disable');
        enCaps[i].classList.remove('disable');
        enShift[i].classList.add('disable');
      }
    }
    if (lang === 'ru') {
      for (let i = 0; i < 63; i += 1) {
        ru[i].classList.add('disable');
        ruCaps[i].classList.remove('disable');
        ruShift[i].classList.add('disable');
      }
    }
  }
}
function capsLockHandler() {
  const ru = document.querySelectorAll('.ru');
  const en = document.querySelectorAll('.en');
  const ruCaps = document.querySelectorAll('.ruCaps');
  const enCaps = document.querySelectorAll('.enCaps');
  if (capsLockStatus !== 'true') {
    localStorage.setItem('capsLockStatus', 'true');
    capsLockStatus = 'true';
    if (lang === 'en') {
      for (let i = 0; i < 63; i += 1) {
        en[i].classList.add('disable');
        enCaps[i].classList.remove('disable');
      }
    }
    if (lang === 'ru') {
      for (let i = 0; i < 63; i += 1) {
        ru[i].classList.add('disable');
        ruCaps[i].classList.remove('disable');
      }
    }
    document.querySelector('.CapsLock').classList.add('pushed');
  } else {
    if (lang === 'en') {
      for (let i = 0; i < 63; i += 1) {
        en[i].classList.remove('disable');
        enCaps[i].classList.add('disable');
      }
    }
    if (lang === 'ru') {
      for (let i = 0; i < 63; i += 1) {
        ru[i].classList.remove('disable');
        ruCaps[i].classList.add('disable');
      }
    }
    document.querySelector('.CapsLock').classList.remove('pushed');
    capsLockStatus = 'false';
    localStorage.setItem('capsLockStatus', 'false');
  }
}

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
    <textarea name="" id="textarea" cols="30" rows="10" ></textarea>
`,
  );
}
/// /////////////////////////////////////////////////////////////////////////////////////////
function insertKeyboard(tag) {
  const body = document.querySelector(`${tag}`);
  const keyId = ['Backquote', 'Backspace', 'Delete', 'ShiftLeft', 'ShiftRight', 'MetaLeft', 'AltLeft', 'AltRight', 'Tab'];
  const digits = ['Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'BracketLeft', 'BracketRight', 'Backslash'];
  const row1Keys = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'];
  const row1KeysShift = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace'];
  const row1KeysRu = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'];
  const row1KeysShiftRu = ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace'];
  const row2Keys = ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'del'];
  const row2KeysShift = ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '{', '}', '|', 'del'];
  const row2KeysShiftRu = ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '/', 'del'];
  const row2KeysRu = ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'del'];
  const row3Keys = ['Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter'];
  const row3KeysShift = ['Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ':', '"', 'Enter'];
  const row3KeysRu = ['Caps Lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'];
  const row4Keys = ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲', 'Shift'];
  const row4KeysShift = ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '<', '>', '?', '▲', 'Shift'];
  const row4KeysRu = ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '▲', 'Shift'];
  const row4KeysShiftRu = ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', ',', '▲', 'Shift'];
  const row5Keys = ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', '◄', '▼', '►', 'Ctrl'];
  //
  body.insertAdjacentHTML(
    'beforeend',
    `
<div class="keyboard">
</div>
`,
  );
  body.insertAdjacentHTML(
    'beforeend',
    `
<p>Клавиатура создана в операционной системе Windows</p>
<p>Для переключения языка комбинация: левыe shift + alt</p>
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
    if (row1Keys[13 - i] !== 'Backspace' && i !== 13) {
      row4.insertAdjacentHTML(
        'afterbegin',
        `
            <div id="${row1Keys[13 - i].toLowerCase()}" class="key ${digits[12 - i]}">
                <div  class="ru disable">${row1Keys[13 - i]}</div>
                <div  class="ruCaps disable">${row1Keys[13 - i].toLocaleUpperCase()}</div>
                <div  class="ruShift disable">${row1KeysShiftRu[13 - i].toLocaleUpperCase()}</div>
                <div class="en ">${row1Keys[13 - i]}</div>
                <div  class="enCaps disable">${row1Keys[13 - i].toLocaleUpperCase()}</div>
                <div  class="enShift disable">${row1KeysShift[13 - i].toLocaleUpperCase()}</div>
            </div>
              `,
      );
    }
    if (row1Keys[13 - i] === 'Backspace') {
      row4.insertAdjacentHTML(
        'afterbegin',
        `
              <div class="key ${keyId[1]} longButton">
                  <div  class="en  longButton">${row1Keys[13 - i]}</div>
                  <div  class="ru  disable longButton">${row1Keys[13 - i]}</div>
                  <div  class="enCaps disable  longButton">${row1Keys[13 - i]}</div>
                  <div  class="enShift longButton disable">${row1KeysShift[13 - i]}</div>
                  <div  class="ruCaps disable longButton">${row1Keys[13 - i]}</div>
                  <div  class="ruShift longButton disable">${row1KeysShiftRu[13 - i]}</div>
              </div>
                `,
      );
    }
    if (i === 13) {
      row4.insertAdjacentHTML(
        'afterbegin',
        `
              <div class="key ${keyId[0]} ">
                  <div  class="en  ">${row1Keys[13 - i]}</div>
                  <div  class="ru  disable ">${row1KeysRu[13 - i]}</div>
                  <div  class="enCaps disable  ">${row1Keys[13 - i]}</div>
                  <div  class="enShift disable">${row1KeysShift[13 - i].toLocaleUpperCase()}</div>
                  <div  class="ruCaps  disable ">${row1KeysRu[13 - i].toUpperCase()}</div>
                  <div  class="ruShift disable">${row1KeysShiftRu[13 - i].toLocaleUpperCase()}</div>
              </div>
                `,
      );
    }
  }
  /// ////2 row
  const row3 = document.querySelector('.row3');
  for (let i = 0; i < 15; i += 1) {
    if (i > 3 && i !== 14) {
      row3.insertAdjacentHTML(
        'afterbegin',
        `
            <div class="key Key${row2Keys[14 - i].toUpperCase()}">
                <div  class="en ">${row2Keys[14 - i]}</div>
                <div class="ru disable">${row2KeysRu[14 - i]}</div>
                <div class="ruCaps disable">${row2KeysRu[14 - i].toUpperCase()}</div>
                <div class="enCaps disable">${row2Keys[14 - i].toUpperCase()}</div>
                <div  class="enShift disable">${row2KeysShift[14 - i].toLocaleUpperCase()}</div>
                <div  class="ruShift disable">${row2KeysShiftRu[14 - i].toLocaleUpperCase()}</div>
                
            </div>
              `,
      );
    }
    if (i === 14) {
      row3.insertAdjacentHTML(
        'afterbegin',
        `
              <div class="key ${keyId[8]} longButton">
                  <div  class="en longButton">${row2Keys[14 - i]}</div>
                  <div class="ru disable longButton ">${row2Keys[14 - i]}</div>
                  <div  class="enCaps disable longButton">${row2Keys[14 - i]}</div>
                  <div class="ruCaps disable longButton ">${row2Keys[14 - i]}</div>
                  <div  class="enShift longButton disable">${row2KeysShift[14 - i]}</div>
                  <div  class="ruShift longButton disable">${row2KeysShiftRu[14 - i]}</div>
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
                  <div class="ru disable  ">${row2KeysRu[14 - i]}</div>
                  <div  class="enCaps disable">${row2Keys[14 - i]}</div>
                  <div class="ruCaps disable  ">${row2KeysRu[14 - i].toUpperCase()}</div>
                  <div  class="enShift disable">${row2KeysShift[14 - i]}</div>
                  <div  class="ruShift disable">${row2KeysShiftRu[14 - i].toUpperCase()}</div>
                  
              </div>
                `,
      );
    }
    if (i === 0) {
      row3.insertAdjacentHTML(
        'afterbegin',
        `
              <div class="key ${keyId[2]} ">
                  <div  class="en ">${row2Keys[14 - i]}</div>
                  <div class="ru disable  ">${row2Keys[14 - i]}</div>
                  <div  class="enCaps disable ">${row2Keys[14 - i]}</div>
                  <div class="ruCaps disable  ">${row2Keys[14 - i]}</div>
                  <div  class="enShift disable">${row2KeysShift[14 - i]}</div>
                  <div  class="ruShift disable">${row2KeysShiftRu[14 - i]}</div>
              </div>
                `,
      );
    }
  }
  /// /3 row
  const row2 = document.querySelector('.row2');
  for (let i = 0; i < 13; i += 1) {
    if (row3Keys[12 - i] !== 'Caps Lock' && row3Keys[12 - i] !== 'Enter' && i !== 1 && i !== 2) {
      row2.insertAdjacentHTML(
        'afterbegin',
        `
            <div  class="key Key${row3Keys[12 - i].toUpperCase()}">
                <div  class="en ">${row3Keys[12 - i]}</div>
                <div class="enCaps disable">${row3Keys[12 - i].toUpperCase()}</div>
                <div class="ru disable">${row3KeysRu[12 - i]}</div>
                <div class="ruCaps disable">${row3KeysRu[12 - i].toUpperCase()}</div>
                <div  class="enShift  disable">${row3KeysShift[12 - i].toUpperCase()}</div>
                <div  class="ruShift  disable">${row3KeysRu[12 - i].toUpperCase()}</div>
            </div>
              `,
      );
    } if (i === 12) {
      row2.insertAdjacentHTML(
        'afterbegin',
        `
              <div class="key longButton CapsLock">
                  <div  class="en longButton">${row3Keys[12 - i]}</div>
                  <div class="ru disable longButton ">${row3Keys[12 - i]}</div>
                  <div  class="enCaps disable longButton">${row3Keys[12 - i]}</div>
                  <div class="ruCaps disable longButton ">${row3Keys[12 - i]}</div>
                  <div  class="enShift longButton disable">${row3KeysShift[12 - i]}</div>
                  <div  class="ruShift longButton disable">${row3KeysRu[12 - i]}</div>
              </div>
                `,
      );
    }
    if (i === 2) {
      row2.insertAdjacentHTML(
        'afterbegin',
        `
              <div class="key  Semicolon">
                  <div class="en ">${row3Keys[12 - i]}</div>
                  <div class="enCaps disable ">${row3Keys[12 - i]}</div>
                  <div class="ru disable  ">${row3KeysRu[12 - i]}</div>
                  <div class="ruCaps disable  ">${row3KeysRu[12 - i].toUpperCase()}</div>
                  <div  class="enShift  disable">${row3KeysShift[12 - i]}</div>
                <div  class="ruShift  disable">${row3KeysRu[12 - i].toUpperCase()}</div>
              </div>
                `,
      );
    }
    if (i === 1) {
      row2.insertAdjacentHTML(
        'afterbegin',
        `
              <div class="key  Quote">
                  <div  class="en ">${row3Keys[12 - i]}</div>
                  <div class="ru disable  ">${row3KeysRu[12 - i]}</div>
                  <div  class="enCaps disable ">${row3Keys[12 - i]}</div>
                  <div class="ruCaps disable  ">${row3KeysRu[12 - i].toUpperCase()}</div>
                  <div  class="enShift  disable">${row3KeysShift[12 - i]}</div>
                  <div  class="ruShift  disable">${row3KeysRu[12 - i].toUpperCase()}</div>
              </div>
                `,
      );
    }
    if (i === 0) {
      row2.insertAdjacentHTML(
        'afterbegin',
        `
              <div class="key longButton Enter">
                  <div  class="en longButton">${row3Keys[12 - i]}</div>
                  <div class="ru disable longButton ">${row3Keys[12 - i]}</div>
                  <div  class="enCaps  disable longButton">${row3Keys[12 - i]}</div>
                  <div class="ruCaps disable longButton ">${row3Keys[12 - i]}</div>
                  <div  class="enShift  longButton disable">${row3KeysShift[12 - i]}</div>
                  <div  class="ruShift  longButton disable">${row3KeysRu[12 - i]}</div>
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
                <div class="enCaps disable">${row4Keys[12 - i].toUpperCase()}</div>
                <div class="ru disable">${row4KeysRu[12 - i]}</div>
                <div class="ruCaps disable">${row4KeysRu[12 - i].toUpperCase()}</div>
                <div  class="enShift  disable">${row4KeysShift[12 - i].toUpperCase()}</div>
                <div  class="ruShift  disable">${row4KeysShiftRu[12 - i].toUpperCase()}</div>
            </div>
              `,
      );
    }
    if (i === 12) {
      row1.insertAdjacentHTML(
        'afterbegin',
        `
              <div class="key ShiftLeft longButton">
                  <div class="en longButton">${row4Keys[12 - i]}</div>
                  <div class="ru disable longButton ">${row4Keys[12 - i]}</div>
                  <div class="enCaps disable longButton">${row4Keys[12 - i]}</div>
                  <div class="ruCaps disable longButton ">${row4Keys[12 - i]}</div>
                  <div  class="enShift  longButton disable">${row4KeysShift[12 - i]}</div>
                  <div  class="ruShift  longButton disable">${row4KeysShiftRu[12 - i]}</div>
              </div>
                `,
      );
    }
    if (i === 0) {
      row1.insertAdjacentHTML(
        'afterbegin',
        `
              <div class="key ShiftRight longButton">
                  <div class="en longButton">${row4Keys[12 - i]}</div>
                  <div class="ru disable longButton ">${row4Keys[12 - i]}</div>
                  <div class="enCaps disable longButton">${row4Keys[12 - i]}</div>
                  <div class="ruCaps disable longButton ">${row4Keys[12 - i]}</div>
                  <div  class="enShift  longButton disable">${row4KeysShift[12 - i]}</div>
                  <div  class="ruShift  longButton disable">${row4KeysShiftRu[12 - i]}</div>
              </div>
                `,
      );
    }

    if (i === 1) {
      row1.insertAdjacentHTML(
        'afterbegin',
        `
              <div class="key ArrowUp ">
                  <div  class="en ">${row4Keys[12 - i]}</div>
                  <div class="ru disable  ">${row4Keys[12 - i]}</div>
                  <div class="enCaps disable ">${row4Keys[12 - i]}</div>
                  <div class="ruCaps disable  ">${row4Keys[12 - i]}</div>
                  <div  class="enShift   disable">${row4KeysShift[12 - i]}</div>
                  <div  class="ruShift   disable">${row4KeysShiftRu[12 - i]}</div>
              </div>
                `,
      );
    }
    if (i === 2) {
      row1.insertAdjacentHTML(
        'afterbegin',
        `
              <div class="key Slash ">
                  <div  class="en ">${row4Keys[12 - i]}</div>
                  <div class="ru disable  ">${row4KeysRu[12 - i]}</div>
                  <div class="enCaps disable ">${row4Keys[12 - i]}</div>
                  <div class="ruCaps disable  ">${row4KeysRu[12 - i].toUpperCase()}</div>
                  <div  class="enShift   disable">${row4KeysShift[12 - i]}</div>
                  <div  class="ruShift   disable">${row4KeysShiftRu[12 - i].toUpperCase()}</div>
              </div>
                `,
      );
    }
    if (i === 3) {
      row1.insertAdjacentHTML(
        'afterbegin',
        `
              <div class="key Period ">
                  <div  class="en ">${row4Keys[12 - i]}</div>
                  <div class="ru disable  ">${row4KeysRu[12 - i]}</div>
                  <div class="enCaps disable ">${row4Keys[12 - i]}</div>
                  <div class="ruCaps disable  ">${row4KeysRu[12 - i].toUpperCase()}</div>
                  <div  class="enShift   disable">${row4KeysShift[12 - i]}</div>
                  <div  class="ruShift   disable">${row4KeysShiftRu[12 - i].toUpperCase()}</div>
              </div>
                `,
      );
    }
    if (i === 4) {
      row1.insertAdjacentHTML(
        'afterbegin',
        `
              <div class="key Comma ">
                  <div  class="en ">${row4Keys[12 - i]}</div>
                  <div class="ru disable  ">${row4KeysRu[12 - i]}</div>
                  <div class="enCaps disable ">${row4Keys[12 - i]}</div>
                  <div class="ruCaps disable  ">${row4KeysRu[12 - i].toUpperCase()}</div>
                  <div  class="enShift   disable">${row4KeysShift[12 - i]}</div>
                  <div  class="ruShift   disable">${row4KeysShiftRu[12 - i].toUpperCase()}</div>
              </div>
                `,
      );
    }
  }
  /// ////5 row
  const row0 = document.querySelector('.row0');
  for (let i = 0; i < 9; i += 1) {
    if (i === 8) {
      row0.insertAdjacentHTML(
        'afterbegin',
        `
                <div class="key ControlLeft">
                    <div class="en ">${row5Keys[8 - i]}</div>
                    <div class="ru disable ">${row5Keys[8 - i]}</div>
                    <div class="enCaps disable">${row5Keys[8 - i]}</div>
                    <div class="ruCaps disable ">${row5Keys[8 - i]}</div>
                    <div class="enShift disable">${row5Keys[8 - i]}</div>
                    <div class="ruShift disable ">${row5Keys[8 - i]}</div>
                </div>
                  `,
      );
    }
    if (i === 7) {
      row0.insertAdjacentHTML(
        'afterbegin',
        `
                <div class="key MetaLeft">
                    <div  class="en ">${row5Keys[8 - i]}</div>
                    <div class="ru disable ">${row5Keys[8 - i]}</div>
                    <div class="enCaps disable">${row5Keys[8 - i]}</div>
                    <div class="ruCaps disable ">${row5Keys[8 - i]}</div>
                    <div class="enShift disable">${row5Keys[8 - i]}</div>
                    <div class="ruShift disable ">${row5Keys[8 - i]}</div>
                </div>
                  `,
      );
    }
    if (i === 6) {
      row0.insertAdjacentHTML(
        'afterbegin',
        `
                <div class="key AltLeft">
                    <div  class="en ">${row5Keys[8 - i]}</div>
                    <div class="ru disable ">${row5Keys[8 - i]}</div>
                    <div class="enCaps disable">${row5Keys[8 - i]}</div>
                    <div class="ruCaps disable ">${row5Keys[8 - i]}</div>
                    <div class="enShift disable">${row5Keys[8 - i]}</div>
                    <div class="ruShift disable ">${row5Keys[8 - i]}</div>
                </div>
                  `,
      );
    }
    if (i === 5) {
      row0.insertAdjacentHTML(
        'afterbegin',
        `
                <div class="key Space">
                </div>
                  `,
      );
    }
    if (i === 4) {
      row0.insertAdjacentHTML(
        'afterbegin',
        `
                <div class="key AltRight">
                    <div  class="en ">${row5Keys[8 - i]}</div>
                    <div class="ru disable ">${row5Keys[8 - i]}</div>
                    <div class="enCaps disable">${row5Keys[8 - i]}</div>
                    <div class="ruCaps disable ">${row5Keys[8 - i]}</div>
                    <div class="enShift disable">${row5Keys[8 - i]}</div>
                    <div class="ruShift disable ">${row5Keys[8 - i]}</div>
                </div>
                  `,
      );
    }
    if (i === 3) {
      row0.insertAdjacentHTML(
        'afterbegin',
        `
                <div class="key ArrowLeft">
                    <div  class="en ">${row5Keys[8 - i]}</div>
                    <div class="ru disable ">${row5Keys[8 - i]}</div>
                    <div class="enCaps disable">${row5Keys[8 - i]}</div>
                    <div class="ruCaps disable ">${row5Keys[8 - i]}</div>
                    <div class="enShift disable">${row5Keys[8 - i]}</div>
                    <div class="ruShift disable ">${row5Keys[8 - i]}</div>
                </div>
                  `,
      );
    }
    if (i === 2) {
      row0.insertAdjacentHTML(
        'afterbegin',
        `
                <div class="key ArrowDown">
                    <div  class="en ">${row5Keys[8 - i]}</div>
                    <div class="ru disable ">${row5Keys[8 - i]}</div>
                    <div class="enCaps disable">${row5Keys[8 - i]}</div>
                    <div class="ruCaps disable ">${row5Keys[8 - i]}</div>
                    <div class="enShift disable">${row5Keys[8 - i]}</div>
                    <div class="ruShift disable ">${row5Keys[8 - i]}</div>
                </div>
                  `,
      );
    }
    if (i === 1) {
      row0.insertAdjacentHTML(
        'afterbegin',
        `
                <div class="key ArrowRight">
                    <div  class="en ">${row5Keys[8 - i]}</div>
                    <div class="ru disable ">${row5Keys[8 - i]}</div>
                    <div class="enCaps disable">${row5Keys[8 - i]}</div>
                    <div class="ruCaps disable ">${row5Keys[8 - i]}</div>
                    <div class="enShift disable">${row5Keys[8 - i]}</div>
                    <div class="ruShift disable ">${row5Keys[8 - i]}</div>
                </div>
                  `,
      );
    }
    if (i === 0) {
      row0.insertAdjacentHTML(
        'afterbegin',
        `
                <div class="key ControlRight">
                    <div  class="en ">${row5Keys[8 - i]}</div>
                    <div class="ru disable ">${row5Keys[8 - i]}</div>
                    <div class="enCaps disable">${row5Keys[8 - i]}</div>
                    <div class="ruCaps disable ">${row5Keys[8 - i]}</div>
                    <div class="enShift disable">${row5Keys[8 - i]}</div>
                    <div class="ruShift disable ">${row5Keys[8 - i]}</div>
                </div>
                  `,
      );
    }
  }
}
/// Mouse click on keyboard
function clickHandler(e) {
  const exclude = ['Shift', 'Caps Lock', 'Ctrl', 'del', 'Tab', 'Alt', 'Backspace', 'Win', 'Enter', ''];
  const textarea = document.querySelector('#textarea');
  if (!exclude.includes(e.currentTarget.innerText)) {
    insertText(textarea, e.currentTarget.innerText);
    e.currentTarget.classList.add('pushed');
  }
  if (e.currentTarget.innerText === 'Caps Lock') {
    capsLockHandler();
    e.currentTarget.classList.add('pushed');
    if (capsLockStatus !== 'true') {
      e.currentTarget.classList.remove('pushed');
    }
  }
  if (e.currentTarget.innerText === '') {
    insertText(textarea, ' ');
    e.currentTarget.classList.add('pushed');
  }
  if (e.currentTarget.innerText === 'Tab') {
    insertText(textarea, '    ');
    e.currentTarget.classList.add('pushed');
  }
  if (e.currentTarget.innerText === 'Enter') {
    insertText(textarea, '\n');
    e.currentTarget.classList.add('pushed');
  }
  if (e.currentTarget.innerText === 'Backspace') {
    backspaceKey(textarea);
    e.currentTarget.classList.add('pushed');
  }
  if (e.currentTarget.innerText === 'del') {
    deleteKey(textarea);
    e.currentTarget.classList.add('pushed');
  }
  if (e.currentTarget.innerText === 'Shift') {
    shiftHandler();
    e.currentTarget.classList.add('pushed');
  }
}
function clickHandlerUp(e) {
  if (e.currentTarget.innerText !== 'Caps Lock') {
    e.currentTarget.classList.remove('pushed');
  }
  shiftHandler(false);
  document.querySelector('#textarea').focus();
}
function getCapsLockStatus() {
  const ru = document.querySelectorAll('.ru');
  const en = document.querySelectorAll('.en');
  const ruCaps = document.querySelectorAll('.ruCaps');
  const enCaps = document.querySelectorAll('.enCaps');
  if (capsLockStatus === 'true') {
    if (lang === 'en') {
      for (let i = 0; i < 63; i += 1) {
        en[i].classList.add('disable');
        enCaps[i].classList.remove('disable');
        ru[i].classList.add('disable');
        ruCaps[i].classList.add('disable');
      }
    }
    if (lang === 'ru') {
      for (let i = 0; i < 63; i += 1) {
        ru[i].classList.add('disable');
        en[i].classList.add('disable');
        enCaps[i].classList.add('disable');
        ruCaps[i].classList.remove('disable');
      }
    }
    document.querySelector('.CapsLock').classList.add('pushed');
  } else {
    if (lang === 'en') {
      for (let i = 0; i < 63; i += 1) {
        ru[i].classList.add('disable');
        en[i].classList.remove('disable');
        enCaps[i].classList.add('disable');
      }
    }
    if (lang === 'ru') {
      for (let i = 0; i < 63; i += 1) {
        en[i].classList.add('disable');
        ru[i].classList.remove('disable');
        ruCaps[i].classList.add('disable');
      }
    }
    document.querySelector('.CapsLock').classList.remove('pushed');
  }
}
function addKeyHandlers() {
  const keys = document.querySelectorAll('.key');
  for (let i = 0; i <= 63; i += 1) {
    keys[i].addEventListener('mousedown', clickHandler);
    keys[i].addEventListener('mouseup', clickHandlerUp);
  }
}

generateWraper();
insertKeyboard('.wrapper');
addKeyHandlers();
getCapsLockStatus();

const textarea = document.querySelector('#textarea');
// Textarea Js only
textarea.addEventListener('keydown', (event) => {
  event.preventDefault();
});
// Key handler
document.addEventListener('keydown', (event) => {
  const arr = ['Delete', 'Backspace', 'CapsLock', 'AltLeft', 'AltRight', 'MetaLeft', 'ControlLeft', 'ControlRight', 'ShiftLeft', 'ShiftRight', 'Tab', 'Enter'];
  const ru = document.querySelectorAll('.ru');
  const en = document.querySelectorAll('.en');
  const ruCaps = document.querySelectorAll('.ruCaps');
  const enCaps = document.querySelectorAll('.enCaps');
///////Change Language
  if (event.shiftKey && event.altKey) {
    lang = (lang !== 'ru') ? 'ru' : 'en';
    localStorage.setItem('lang', lang);
    if (lang !== 'en') {
      for (let i = 0; i < 63; i += 1) {
        if (localStorage.getItem('capsLockStatus') === 'false') {
          ru[i].classList.remove('disable');
          ruCaps[i].classList.add('disable');
          en[i].classList.add('disable');
          enCaps[i].classList.add('disable');
        } else {
          ru[i].classList.add('disable');
          ruCaps[i].classList.remove('disable');
          en[i].classList.add('disable');
          enCaps[i].classList.add('disable');
        }
      }
    } else {
      for (let i = 0; i < 63; i += 1) {
        if (localStorage.getItem('capsLockStatus') === 'false') {
          en[i].classList.remove('disable');
          enCaps[i].classList.add('disable');
          ru[i].classList.add('disable');
          ruCaps[i].classList.add('disable');
        } else {
          en[i].classList.add('disable');
          enCaps[i].classList.remove('disable');
          ru[i].classList.add('disable');
          ruCaps[i].classList.add('disable');
        }
      }
    }
  }
  if (!arr.includes(event.code)) {
    insertText(textarea, document.querySelector(`.${event.code}`).innerText);
  }
  if (event.code === 'Enter') {
    insertText(textarea, '\n');
  }
  if (event.code === 'Tab') {
    insertText(textarea, '    ');
  }
  if (event.code === 'Space') {
    insertText(textarea, ' ');
  }
  if (event.code === 'Backspace') {
    backspaceKey(textarea);
  }
  if (event.code === 'Delete') {
    deleteKey(textarea);
  }
  /// //////////CapsLock
  if (event.code === 'CapsLock') {
    capsLockHandler();
  }
  if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    document.querySelector(`.${event.code}`).classList.add('pushed');
    shiftHandler();
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
  if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    shiftHandler(false);
    document.querySelector(`.${event.code}`).classList.remove('pushed');
  }
});
