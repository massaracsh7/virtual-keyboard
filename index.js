import keyboardArray from './modules/keyboardArray.js';
import createPage from './modules/createPage.js';
import createKeyboard from './modules/createKeyboard.js';

let lang = JSON.parse(localStorage.getItem('lang') || '"en"');
let register = 'low';
let keyboard = createKeyboard(lang, register);
createPage(lang, keyboard);