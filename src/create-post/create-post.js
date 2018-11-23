import SMElement, {html} from 'sm-element/sm-element';

export default class CreatePost extends SMElement {
  static get machine() {
    return {
      initial:'form',
      states: {
        form: {
          name: 'form',
          transitions: [
            {
              event: 'creating_post',
              target: 'loading',
            }
          ]
        },
        loading: {
          name: 'loading',
          transitions: [
            {
              event:'create_success',
              target: 'success',
              effect({id}) {
                return {postId: id};
              }
            },
            {
              event:'create_error',
              target: 'error',
            }
          ],
          render() {
            return html`<div>loading...</div>`;
          }
        },
        success: {
          name: 'success',
          transitions: [],
          render({postId}) {
            return html`<div><a href="/posts/${postId}" @click="${e => this.onClickPost(e)}">View post</a></div>`;
          }
        },
        error: {
          name: 'error',
          transitions: [
            {
              event: 'creating_post',
              target: 'loading',
            }
          ],
          render() {
            return html`<div>there was an error creating your post.</div>`
          }
        }
      }
    }
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
      <form @submit="${e => this.onSubmit(e)}">
        <label for="title">Title</label>
        <input name="title" type="text" .value="${title}" @input="${e => this.title = e.target.value}"></input>
        <label for="content">Content</label>
        <input name="content" type="text" .value="${content}" @input="${e => this.content = e.target.value}"></input>
        <button type="submit">Create</button>
        ${this.currentStateRender(this.data)}
      </form>
    `
  }

  onSubmit(e) {
    e.preventDefault();
    // How to handle this?
    // we need to dispatch an event which our parent handles,
    // and then transition to our loading state while our parent
    // makes a network request to save the post.
    // on success, tell our parent we're done.
    // should there be a 'creating_post' state on the parent?
    // ...
    this.send('creating_post');
    const event = new CustomEvent('create-post', {
      detail:{
        title: this.title,
        content: this.content
      }
    });
    this.dispatchEvent(event);
    event.detail.responder
    .then(newPost => {
      this.send('create_success', newPost);
    })
    .catch(err => {
      this.send('create_error');
    })
  }

  onClickPost(e) {
    e.preventDefault();
    this.dispatchEvent(new CustomEvent('view-new-post', {
      detail:{
        postId: this.postId
      }
    }));
  }
}

customElements.define('create-post', CreatePost);
