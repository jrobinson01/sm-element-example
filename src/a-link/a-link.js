import SMElement, {html} from 'sm-element/sm-element';

export default class ALink extends SMElement {
  static get properties() {
    return {
      href:{
        type: String,
      }
    };
  }

  render({href}) {

    return html`
      <style>
        a {
          text-decoration: none;
        }
      </style>
      <a href="${href}" @click="${e => this.onClick(e)}"><slot></slot></a>
    `;
  }

  onClick(e) {
    const newTab = e.metaKey || e.ctrlKey;
    const isExternal = this.href.startsWith('http');
    if (!newTab && !isExternal) {
      e.preventDefault();
      this.dispatchEvent(new CustomEvent('click-link', {
        bubbles: true,
        composed: true,
        detail:{
          href: this.href
        }
      }));
    }
  }
}

customElements.define('a-link', ALink);
