import SMElement, {html} from '/web_modules/sm-element.js';
import style from './style.js';

export default class ProgressWheel extends SMElement {
  render({active}) {
    return html`
      ${style}
    `;
  }
};

customElements.define('progress-wheel', ProgressWheel);
