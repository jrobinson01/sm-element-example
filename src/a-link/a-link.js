import SMElement, {html} from '/web_modules/sm-element.js';

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
        :host {
          color: var(--color-theme-text-dark);
          display: block;
        }
        :host([button]) {
          color: var(--color-theme-secondary-text-light);
          transform: skew(-10deg);
          padding: 8px 16px;
          margin: 16px 16px 16px 0;
          background: var(--color-theme-light);
          border: 1px solid var(--color-theme);
          display: inline-block;
          font-weight: 600;
          font-size: 18px;
          text-transform: uppercase;
          letter-spacing: -1px;
        }
        a {
          text-decoration: none;
          color: inherit;
          display: inherit;
          width: 100%;
        }
      </style>
      <a href="${href}"><slot></slot></a>
    `;
  }

  onClick(e) {
    // const newTab = e.metaKey || e.ctrlKey;
    // const isExternal = this.href.startsWith('http');
    // if (!newTab && !isExternal) {
    //   e.preventDefault();
    //   this.dispatchEvent(new CustomEvent('click-link', {
    //     bubbles: true,
    //     composed: true,
    //     detail:{
    //       href: this.href
    //     }
    //   }));
    // }
  }
}

customElements.define('a-link', ALink);
