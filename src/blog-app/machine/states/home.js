import sharedTransitions from './shared-transitions';
import {html} from 'sm-element/sm-element';

export  default {
  name:'home',
  // @ts-ignore
  transitions: sharedTransitions.concat([
    {
      event: 'view_post',
      target: 'view',
      effect(detail) {
        return {selectedPostId: detail.postId};
      }
    },
    {
      event: 'select_login',
      target: 'login',
    },
  ]),
  render({user, posts}) {
    return html`
      <h5>Recent posts</h4>
      <ul>
      ${posts.slice(0,2).map(p => html`<li>
        <a href="/posts/${p.id}" @click="${e => this.clickLink(e, p.id)}">${p.title}</a>
        </li>`)}
      </ul>
      <a href="/posts" @click="${e => this.clickLink(e)}">all posts</a>
      ${!user.loggedIn ? html`<a href="/login" @click="${e => this.clickLink(e)}">login</a>` : ''}
      ${user.loggedIn ? html`<a href="/create" @click="${e => this.clickLink(e)}">New post</a>` : ''}
    `
  }
};
