import SMElement, {html} from 'sm-element/sm-element';
import style from './style';

export default class ProgressWheel extends SMElement {
  render({active}) {
    return html`
      ${style}
    `;
  }
};

customElements.define('progress-wheel', ProgressWheel);
