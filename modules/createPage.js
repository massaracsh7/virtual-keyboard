const createPage = () => {
  const container = document.createElement('div');
  container.classList.add('container');
  const descr = document.createElement('p');
  descr.innerHTML = 'Change language - AltRight \'\n\' OS Windows';
  const textarea = document.createElement('textarea');
  textarea.setAttribute('autofocus', true);
  textarea.classList.add('textarea');
  const keyboard = document.createElement('div');
  keyboard.classList.add('textarea');
  keyboard.innerHTML = 'Keyboard will be here';
  container.append(descr, textarea, keyboard);
  document.body.appendChild(container);
};

export default createPage;
