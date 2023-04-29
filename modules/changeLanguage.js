/* eslint-disable import/extensions */
import createKeyboard from './createKeyboard.js';
import changeKeyboard from './changeKeyboard.js';

const changeLanguage = (lang, register) => {
  const curKeys = createKeyboard(lang, register);
  changeKeyboard(curKeys);
};

export default changeLanguage;
