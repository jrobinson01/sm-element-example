import {html} from 'sm-element/sm-element';

const style = html`
  <style>
    @keyframes spin {
        100% {
          transform: rotate(360deg);
        }
      }
      :host {
        display: inline-block;
        animation: spin .75s linear infinite;
        transform-origin: center;
        width: 16px;
        height: 16px;
        border: 2px solid var(--color-theme-secondary-light);
        border-right-color: transparent !important;
        border-radius: 50%;
      }
  </style>
`;

export default style;
