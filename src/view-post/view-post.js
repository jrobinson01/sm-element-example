import SMElement, {html} from 'sm-element/sm-element';
import style from './style';
import ALink from '../a-link/a-link';
import PostImage from '../post-image/post-image';

export default class ViewPost extends SMElement {

  static get properties() {
    return {
      post: {
        type: Object,
        value: ()=> {{}}
      },
      preview: {
        type: Boolean,
        value: false
      }
    }
  }

  render({post}) {
    return html`
      ${style}
      <header>
        <h5>
          ${post.title}
        </h5>
        <span class="sub-title">
          ${post.author}, ${post.date.toLocaleDateString()}
        </span>
      </header>
      <article>
        ${this.preview
          ? html`
            <p>
              ${post.content[0]}...
            </p>
          `
          : html `
            ${post.content.map(p => html`
                ${typeof p === 'string'
                  ? html`<p>${p}</p>`
                  :html`<post-image .src=${p.src} .caption="${p.caption}"></post-image>`}
            `)}
          `
        }
      </article>
      ${this.preview
        ? html`<footer><a-link href="/posts/${post.id}">continue reading</a-link></footer>`
        : ''}
    `;
  }
};

customElements.define('view-post', ViewPost);
