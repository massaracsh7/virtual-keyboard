import keyboardArray from '../modules/keyboardArray.js';
import Key from '../modules/Key.js';

let createKeyboard = (lang, register) => {
  let keyboard = document.createElement('div');
  keyboard.classList.add('keyboard');
  keyboardArray.forEach((el) => {
    let key = new Key(el);
    let btn = key.showLetter(lang, register);
    keyboard.appendChild(btn);
  })
  return keyboard;
}

export default createKeyboard;
