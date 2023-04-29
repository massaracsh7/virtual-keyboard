/* eslint-disable import/extensions */
import keyboardArray from './keyboardArray.js';
import Key from './Key.js';

const createKeyboard = (lang, register) => {
  const keyboard = document.createElement('div');
  keyboard.classList.add('keyboard');
  keyboardArray.forEach((el) => {
    const key = new Key(el);
    const btn = key.showLetter(lang, register);
    keyboard.appendChild(btn);
  });
  return keyboard;
};

export default createKeyboard;
