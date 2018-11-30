import SMElement, {html} from 'sm-element/sm-element';
import machine from './machine/machine';
import style from './style.js';

export default class CreatePost extends SMElement {

  static get machine() {
    return machine;
  }

  static get properties() {
    return {
      title:{
        type: String,
        value: ''
      },
      content: {
        type: String,
        value: ''
      },
      postId: {
        type: String,
      },
    }
  }

  render({title, content}) {
    return html`
      ${style}
      <form @submit="${e => this.onSubmit(e)}">
        <div>
          <label for="title">Title</label>
          <input name="title" type="text" .value="${title}" @input="${e => this.title = e.target.value}"></input>
        </div>
        <div>
          <label for="content">Content</label>
          <input name="content" type="text" .value="${content}" @input="${e => this.content = e.target.value}"></input>
        </div>
        <button type="submit">Create</button>
        ${this.currentStateRender(this.data)}
      </form>
    `
  }

  onSubmit(e) {
    e.preventDefault();
    this.send('creating_post');
  }

}

customElements.define('create-post', CreatePost);
