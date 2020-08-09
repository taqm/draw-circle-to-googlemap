export default class ContextMenu {
  constructor(elem, items) {
    this.elem = elem;
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);

    this.bindRows(elem, items);
  }

  bindRows(ul, items) {
    items.forEach((item) => {
      const li = document.createElement('li');
      li.textContent = item.label;
      li.classList.add('context-menu__item');
      li.addEventListener('click', () => {
        item.onClick(this.latlng);
        this.hide(); // クリック後はメニューを閉じる
      });
      ul.appendChild(li);
    });
  }

  show(latlng, pixel) {
    this.elem.dataset.active = 'true';
    this.elem.style.top = `${pixel.y}px`;
    this.elem.style.left = `${pixel.x}px`;
    this.latlng = latlng;
  }

  hide() {
    this.elem.dataset.active = null;
    this.elem.style.top = null;
    this.elem.style.left = null;
  }
}
