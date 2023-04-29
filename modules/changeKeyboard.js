const changeKeyboard = (curKeys) => {
  const keyboard = document.querySelector('.keyboard');
  keyboard.innerHTML = '';
  keyboard.innerHTML = curKeys.innerHTML;
};

export default changeKeyboard;
