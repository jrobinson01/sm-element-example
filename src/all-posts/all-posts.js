import SMElement, {html} from '/web_modules/sm-element.js';
import style from './style.js';

export default class AllPosts extends SMElement {

  static get properties() {
    return {
      posts:{
        type: Array,
        value: () => []
      }
    }
  }

  render({posts}) {
    return html`
      ${style}
      <header>
        <h5>
          All posts
        </h5>
      </header>
      <article>
        <ul>
        ${posts.map(p => html`
          <li>
            <a-link href="/posts/${p.id}">${p.title}</a-link>
            <div class="sub-title">
              ${p.author}, ${p.date.toLocaleDateString()}
            </div>
          </li>
          `)}
        </ul>
      </article>
    `;
  }
};

customElements.define('all-posts', AllPosts);
