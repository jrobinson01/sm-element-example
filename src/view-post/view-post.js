import SMElement, {html} from 'sm-element/sm-element';
import style from './style';

export default class ViewPost extends SMElement {

  static get properties() {
    return {
      post: {
        type: Object,
        value: ()=> {{}}
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
        ${post.content}
      </article>
    `;
  }
};

customElements.define('view-post', ViewPost);
