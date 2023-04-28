/* eslint-disable import/extensions */
import keyboardArray from './keyboardArray.js';

const searchBtn = (btn) => {
  let obj;
  keyboardArray.forEach((el) => {
    if (el.code === btn) {
      obj = el;
    }
  });
  return obj;
};

export default searchBtn;
