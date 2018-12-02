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
    h5 {
      font-style: oblique;
      background: var(--color-theme);
      color: white;
      text-shadow: 1px 1px 1px var(--color-theme-text-dark);;
      border-bottom: 2px solid var(--color-theme-secondary);
      font-size: 24px;
      padding: 8px;
      text-transform: uppercase;
      margin: 0;
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
