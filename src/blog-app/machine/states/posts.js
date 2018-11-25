import sharedTransitions from './shared-transitions';
import {html} from 'sm-element/sm-element';

export default  {
  name: 'posts',
  // @ts-ignore
  transitions: sharedTransitions.concat([
    {
      event: 'view_post',
      target: 'view',
      effect(detail) {
        console.log('view_post event', detail);
        return {selectedPostId: detail.postId};
      }
    },
  ]),
  render({posts}) {
    return html `
      <h5>All posts</h5>
      <ul>
      ${posts.map(p => html`<li>
        <a href="/posts/${p.id}" @click="${e => this.clickLink(e)}">${p.title}</a>
        </li>`)}
      </ul>
    `
  }
}
