import {html} from 'sm-element/sm-element';

export default {
  name: 'loading',
  onEntry({title, content}) {
    // TODO: move to onExit handler for 'form' state?
    // we want to tell our parent to create a new post (server interaction),
    // and then be notified when it's been created.
    // first, dispatch an event so our parent can do it's thing
    const event = new CustomEvent('create-post', {
      detail: {
        title: title,
        content: content
      }
    });
    this.dispatchEvent(event);
    // parent stuffs a promise onto the event.detail
    event.detail.responder
    .then(newPost => {
      this.send('create_success', newPost);
    })
    .catch(err => {
      this.send('create_error');
    })
  },
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
};
