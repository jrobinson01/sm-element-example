import {html} from 'sm-element/sm-element';

const style = html`
  <style>
    :host {
      display: block;
    }
    .validation-error {
      color: orange;
      font-size: 11px;
    }
    .container {
      margin: 0 auto;
      max-width: 800px;
    }
    h5 {
      font-style: oblique;
      background: var(--color-theme);
      border-bottom: 2px solid var(--color-theme-text);
      font-size: 24px;
      padding: 8px;
      text-transform: uppercase;
      letter-spacing: -2px;
      margin: 0;
    }
    button {
      transform: skew(-10deg);
      padding: 8px 16px;
      margin: 16px 16px 16px 0;
      background: var(--color-theme-light);
      border: 1px solid var(--color-theme);
      display: block;
      font-weight: 600;
      font-size: 18px;
      text-transform: uppercase;
      letter-spacing: -2px;
    }
    input {
      background: transparent;
      display: block;
      border: none;
      border-bottom: 1px solid var(--color-theme);
      font-size: 16px;
      margin: 8px 0;
      padding: 8px
    }
  </style>
`;

export default style;
