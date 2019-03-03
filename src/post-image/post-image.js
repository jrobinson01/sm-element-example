import SMElement, {html} from '/web_modules/sm-element.js';
import ProgressWheel from '../progress-wheel/progress-wheel.js';

export default class PostImage extends SMElement {

  static get machine() {
    return {
      initial:'initial',
      states: {
        initial: {
          name:'initial',
          transitions: [
            {
              event:'load_image',
              target: 'loading',
              condition({src}) {
                return src !== undefined;
              }
            }
          ]
        },
        loading: {
          name:'loading',
          onEntry({_src}) {
            const img = new Image();
            const handler = e => {
              this.send('complete', {event: e, src: _src});
              img.removeEventListener('load', handler);
              img.removeEventListener('error', handler);
            };
            img.addEventListener('load', handler);
            img.addEventListener('error', handler);
            img.src = _src;
          },
          transitions:[
            {
              event: 'complete',
              target: 'display',
              condition({event}) {
                return event.type === 'load';
              }
            },
            {
              event: 'complete',
              target: 'error',
              condition({event}) {
                return event.type === 'error';
              }
            },
            {
              event:'load_image',
              target: 'loading',
              condition({src}) {
                return src !== undefined;
              }
            }
          ],
          render() {
            return html`<progress-wheel></progress-wheel>`;
          }
        },
        display: {
          name: 'display',
          transitions: [
            {
              event:'load_image',
              target: 'loading',
              condition({src}) {
                return src !== undefined;
              }
            }
          ],
          render({_src, caption}) {
            return html`
            <img src="${_src}"></img>
            <div>${caption}</div>
            `;
          }
        },
        error: {
          name: 'error',
          transitions: [
            {
              event: 'try_again',
              target: 'loading'
            },
            {
              event:'load_image',
              target: 'loading',
              condition({src}) {
                return src !== undefined;
              }
            }
          ],
          render() {
            return html`<button @click="${e => this.send('try_again')}">image failed to load. try again?</button>`;
          }
        }
      }
    }
  }

  static get properties() {
    return {
      _src: {
        type: String,
      },
      caption: {
        type: String,
      }
    }
  }

  set src(newVal) {
    this._src = newVal;
    this.send('load_image', {src:this._src});
  }

  get src() {
    return this._src;
  }

  // connectedCallback() {
  //   super.connectedCallback();
  //   // need to call send in case our _src property
  //   // was set before the component is connected.
  //   // this.send('load_image', {src:this._src});
  // }

  render() {
    return html`
      <style>
        :host {
          display: flex;
          justify-content: center;
          text-align: center;
          font-style: italic;
          font-size: 12px;
          color: var(--color-theme-secondary-text);
          margin: 30px 0 30px;
        }
        button {
          border: none;
          color:var(--color-secondary-text-light);
        }
      </style>
      ${this._src
        ? html`
          <div>
            ${this.currentStateRender(this.data)}
          </div>
        `
        : ''}

    `;
  }

};

customElements.define('post-image', PostImage);
