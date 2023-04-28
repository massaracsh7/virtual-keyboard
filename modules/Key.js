export default class Key {
  constructor(el) {
    this.code = el.code;
    this.key = el.key;
    this.shift = el.shift;
    this.keyRu = el.keyRu;
    this.shiftRu = el.shiftRu;
  }
  showLetter(lang, register) {
    let btn = document.createElement('button');
    btn.classList.add('keyboard__key');
    btn.dataset.code = this.code;
    if (this.code === 'ShiftRight' || this.code === 'ShiftLeft' || this.code === 'Backspace' || this.code === 'Enter' || this.code === 'CapsLock' || this.code === 'Tab') {
      btn.classList.add('keyboard__key--wide');
    }
    if (this.code === 'Space') {
      btn.classList.add('keyboard__key--extra-wide');
    }

    lang === 'en' ? btn.innerHTML = this.key : btn.innerHTML = this.keyRu;

    if (register === 'caps' && (this.code.startsWith('Key'))) {
      lang === 'en' ? btn.innerHTML = this.shift : btn.innerHTML = this.shiftRu;
    }
    if (register === 'caps' && (this.code === 'Semicolon' || this.code === 'Quote' || this.code === 'Comma' || this.code === 'Period' || this.code === 'BracketLeft' || this.code === 'BracketRight' || this.code === 'Backquote')) {
      lang === 'en' ? btn.innerHTML = this.key : this.innerHTML = this.shiftRu;
    }
    return btn;
  }
}
