// @ts-nocheck
import sharedTransitions from './shared-transitions.js';
import {html} from '/web_modules/sm-element.js';
import CreatePost from '../../../create-post/create-post.js';

/** @type import("sm-element/sm-element").State */
const state = {
  name: 'create',
  transitions: sharedTransitions.concat([
    {
      event: 'create_post',
      effect({event}) {
        event.detail.responder = new Promise((resolve, reject) => {
          setTimeout(() => {
            if (event.detail.title === 'error') {
              reject('an error occured');
            } else {
              // create a new post!
              const createdPost = {
                id:String(this.posts.length + 1),
                title: event.detail.title,
                content: event.detail.content
              };
              // TODO: This is still ugly. We shouldn't change state here!
              //...
              this.posts = this.posts.concat([createdPost]);
              console.log('updated posts?', this.posts);
              resolve(createdPost);
            }
          }, 2000);
        });
        // needs to return any updates to current state.
        // we have none yet, so just return an empty object.
        return {};
      }
    },
  ]),
  render() {
    return html`
      <create-post @create-post="${e => this.onCreatePost(e)}"></create-post>
    `;
  }
};

export default state;
