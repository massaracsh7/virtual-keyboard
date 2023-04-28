const createPage = (lang, keyboard) => {
  const container = document.createElement('div');
  container.classList.add('container');
  const descr = document.createElement('p');
  descr.innerHTML = 'Change language - AltRight  OS Windows';
  const textarea = document.createElement('textarea');
  textarea.setAttribute('autofocus', true);
  textarea.classList.add('textarea');
  container.append(descr, textarea, keyboard);
  document.body.appendChild(container);
};

export default createPage;
