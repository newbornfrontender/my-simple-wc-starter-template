'use strict';

const template = document.createElement('template');

template.innerHTML = `
  <h1>Заголовок</h1>

  <p><slot></slot></p>
`;

class MyApp extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('my-app', MyApp);
