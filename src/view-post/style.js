import {html} from 'sm-element/sm-element';

const style = html`
  <style>
    :host {
      display: block;
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
    header .sub-title {
      color: var(--color-theme-text-light);
      margin: 0;
    }
    header .sub-title::before {
      content: '-';
    }
    article {
      font-size: 18px;
      margin-top: 8px;
      color: var(--color-theme-text);
      padding: 10px;
    }
    
  </style>
`;

export default style;
