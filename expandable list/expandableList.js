class ExpandableList extends HTMLUListElement {
  constructor() {
    super();

    // styles for the expandable list
    this.style.position = 'relative';

    // toggle btn to toggle expand-collapse
    // // const btn = this.toggleBtn;
    this.toggleBtn = document.createElement('button');

    // styles for button
    this.toggleBtn.style.position = 'absolute';
    this.toggleBtn.style.background = 'none';
    this.toggleBtn.style.outline = 'none';
    this.toggleBtn.style.border = 'none';
    this.toggleBtn.style.padding = 0;
    this.toggleBtn.style.top = 0;
    this.toggleBtn.style.left = '-10px';
    this.toggleBtn.style.cursor = 'pointer';
    this.toggleBtn.style.fontSize = '25px';
    this.toggleBtn.style.transition = 'all 0.5s';

    this.toggleBtn.innerText = '>';

    this.toggleBtn.addEventListener('click', () => {
      this.dataset.expanded = !this.isExpanded;
    });
    this.appendChild(this.toggleBtn);
  }

  static get observedAttributes() {
    return ['data-expanded'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.updateStyles();
  }

  connectCallback() {
    this.updateStyles();
  }

  get isExpanded() {
    return this.dataset.expanded !== null && this.dataset.expanded != 'false';
  }

  updateStyles() {
    const transform = this.isExpanded ? 'rotate(90deg)' : '';
    this.toggleBtn.style.transform = transform;

    [...this.children].forEach((child) => {
      if (child !== this.toggleBtn) {
        child.style.display = this.isExpanded ? '' : 'none';
      }
    });
  }
}

window.customElements.define('expandable-list', ExpandableList, {
  extends: 'ul',
});
