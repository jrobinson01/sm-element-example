import {html} from 'sm-element/sm-element';

const style = html`
  <style>
    :host {
      display: block;
    }
    li a-link {
      width: 100%;
      margin: 0;
      color: var(--color-theme-secondary-text);
    }
    header {
      background: var(--color-theme);
      border-bottom: 2px solid var(--color-theme-secondary);
      padding: 8px;
      margin: 0;
      font-style: oblique;
      text-shadow: 1px 1px 1px var(--color-theme-text-dark);
    }
    header h5 {
      font-size: 24px;
      text-transform: uppercase;
      margin: 0;
      display: inline;
      color: white;
    }
    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
    }
    li {
      font-size: 18px;
      padding: 16px 0;
      border-bottom: 1px solid var(--color-theme-secondary-light);
    }
    .sub-title {
      font-size: 12px;
      color: var(--color-theme-secondary-text-light);
    }
  </style>
`;

export default style;
