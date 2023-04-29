/* eslint-disable import/extensions */
import createPage from './modules/createPage.js';
import createKeyboard from './modules/createKeyboard.js';
import searchBtn from './modules/searchBtn.js';
import changeKeyboard from './modules/changeKeyboard.js';
import changeLanguage from './modules/changeLanguage.js';

let lang = JSON.parse(localStorage.getItem('lang') || '"en"');
let register = 'low';
let upper = 'off';
const keyboard = createKeyboard(lang, register);
createPage(lang, keyboard);

document.addEventListener('mousedown', (event) => {
  const textarea = document.querySelector('textarea');
  textarea.focus();
  if (event.target.classList.contains('keyboard__key')) {
    event.target.classList.add('active');
    const targetBtn = searchBtn(event.target.dataset.code);
    if (targetBtn.code === 'ShiftLeft' || targetBtn.code === 'ShiftRight') {
      register = register === 'low' ? 'caps' : 'low';
      const curKeys = createKeyboard(lang, register);
      changeKeyboard(curKeys);
    }

    if (targetBtn.code === 'Enter') textarea.value += '\n';
    if (targetBtn.code === 'Tab') textarea.value += '\u0009';
    if (targetBtn.code === 'CapsLock') {
      register = register === 'low' ? 'caps' : 'low';
      upper = upper === 'off' ? 'on' : 'off';
      const curKeys = createKeyboard(lang, register);
      changeKeyboard(curKeys);
    }

    if (targetBtn.code === 'AltRight') {
      lang = lang === 'en' ? 'ru' : 'en';
      localStorage.setItem('lang', JSON.stringify(lang));
      changeLanguage(lang, register);
    }

    if (targetBtn.code === 'Backspace' && textarea.value.length > 0) {
      textarea.value = textarea.value.substring(0, textarea.value.length - 1);
    }

    if (event.target.innerHTML.length === 1) {
      if (lang === 'en' && register === 'low') {
        textarea.value += targetBtn.key;
      }
      if (lang === 'ru' && register === 'low') {
        textarea.value += targetBtn.keyRu;
      }
      if (lang === 'en' && register === 'caps' && upper === 'off') {
        textarea.value += targetBtn.shift;
      }
      if (lang === 'en' && register === 'caps' && upper === 'on') {
        textarea.value += targetBtn.key.toUpperCase();
      }
      if (lang === 'ru' && register === 'caps' && upper === 'off') {
        textarea.value += targetBtn.shiftRu;
      }
      if (lang === 'ru' && register === 'caps' && upper === 'on') {
        textarea.value += targetBtn.keyRu.toUpperCase();
      }
    }

    if (targetBtn.code === 'ArrowLeft' || targetBtn.code === 'ArrowRight'
      || targetBtn.code === 'ArrowDown' || targetBtn.code === 'ArrowUp' || targetBtn.code === 'Space') {
      textarea.value += event.target.innerText;
    }
  }
});

document.addEventListener('mouseup', (event) => {
  const textarea = document.querySelector('textarea');
  textarea.focus();
  event.target.classList.remove('active');
  if (event.target.code === 'ShiftLeft' || event.target.code === 'ShiftRight') {
    register = register === 'low' ? 'caps' : 'low';
  }
});

document.addEventListener('keydown', (event) => {
  event.preventDefault();
  const textarea = document.querySelector('.textarea');
  textarea.focus();
  const btn = document.querySelector(`[data-code=${event.code}]`);
  const targetBtn = searchBtn(btn.dataset.code);
  if (btn) {
    btn.classList.add('active');
    if (targetBtn.code === 'Enter') textarea.value += '\n';
    if (targetBtn.code === 'Space') textarea.value += ' ';
    if (targetBtn.code === 'Tab') textarea.value += '\u0009';
    if (targetBtn.code === 'CapsLock') {
      register = register === 'low' ? 'caps' : 'low';
      upper = upper === 'off' ? 'on' : 'off';
      const curKeys = createKeyboard(lang, register);
      changeKeyboard(curKeys);
    }
    if (targetBtn.code === 'AltRight') {
      lang = lang === 'en' ? 'ru' : 'en';
      localStorage.setItem('lang', JSON.stringify(lang));
      changeLanguage(lang, register);
    }
    if (targetBtn.code === 'Backspace' && textarea.value.length > 0) {
      textarea.value = textarea.value.slice(0, textarea.value.length - 1);
    }
    if (targetBtn.code === 'ShiftLeft' || targetBtn.code === 'ShiftRight') {
      register = register === 'low' ? 'caps' : 'low';
      const curKeys = createKeyboard(lang, register);
      changeKeyboard(curKeys);
    }

    if (btn.innerHTML.length === 1) {
      if (lang === 'en' && register === 'low') {
        textarea.value += targetBtn.key;
      }
      if (lang === 'ru' && register === 'low') {
        textarea.value += targetBtn.keyRu;
      }
      if (lang === 'en' && register === 'caps' && upper === 'off') {
        textarea.value += targetBtn.shift;
      }
      if (lang === 'en' && register === 'caps' && upper === 'on') {
        textarea.value += targetBtn.key.toUpperCase();
      }
      if (lang === 'ru' && register === 'caps' && upper === 'off') {
        textarea.value += targetBtn.shiftRu;
      }
      if (lang === 'ru' && register === 'caps' && upper === 'on') {
        textarea.value += targetBtn.keyRu.toUpperCase();
      }
    }

    if (targetBtn.code === 'ArrowLeft' || targetBtn.code === 'ArrowRight'
      || targetBtn.code === 'ArrowDown' || targetBtn.code === 'ArrowUp') {
      textarea.value += btn.innerText;
    }
  }
});

document.addEventListener('keyup', (event) => {
  event.preventDefault();
  const btn = document.querySelector(`[data-code=${event.code}]`);
  if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    register = register === 'low' ? 'caps' : 'low';
    const curKeys = createKeyboard(lang, register);
    changeKeyboard(curKeys);
  }
  if (btn) {
    btn.classList.remove('active');
  }
});
