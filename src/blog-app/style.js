import {html} from '/web_modules/sm-element.js';

const style = html`
  <style>
    :host {
      display: grid;
      grid-template-areas:
      'header header'
      'main  menu'
      'footer footer';
      grid-gap: 10px;
      min-height: 100%;
      grid-template-rows: auto 1fr auto;
      grid-template-columns: auto 250px;
    }

    @media only screen and (max-width: 600px) {
      :host {
        display: grid;
        grid-template-areas:
        'header'
        'main'
        'menu'
        'footer';
        grid-gap: 0px;
        min-height: 100%;
        grid-template-rows: auto 1fr auto;
        grid-template-columns: auto;
      }
    }

    @keyframes fade-out-page {
      0% {
        opacity: 1.0;
        transform:  translate(0px,0px);
      }
      100% {
        opacity: 0;
        transform:  translate(600px,0px);
      }
    }

    @keyframes fade-in-page {
      0% {
        opacity: 0;
        transform:  translate(-600px,0px);
      }
      100% {
        opacity: 1.0;
        transform:  translate(0px,0px);
      }
    }

    header {
      grid-area: header;
      background-color: var(--color-theme-secondary-light);
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cg fill='%2317AA57' fill-opacity='0.18'%3E%3Cpolygon fill-rule='evenodd' points='8 4 12 6 8 8 6 12 4 8 0 6 4 4 6 0 8 4'/%3E%3C/g%3E%3C/svg%3E");
      padding: 32px;
      text-align: center;
      border-bottom: 4px solid var(--color-theme-secondary);
    }
    header div {
      margin-top: 5px;
      color: var(--color-theme-text);
      font-style: italic;
    }
    header a-link {
      color: var(--color-theme-text);
      font-weight: 800;
      font-style: italic;
      font-size: 52px;
      text-transform: uppercase;
      letter-spacing: -3px;
      text-shadow: 1px 1px 1px var(--color-theme), 0 0 5px white, 0 0 15px white, 0 0 30px white, 0 0 45px white, 0 0 60px white;
    }
    article#menu {
      grid-area: menu;
      background-color: white;
      z-index: 1;
    }
    article#main {
      grid-area: main;
    }
    article#main[fade-out] {
      animation: fade-out-page 0.33s ease-in;
    }
    article#main[fade-in] {
      animation: fade-in-page 0.33s ease-in;
    }
    footer {
      grid-area: footer;
      background-color: var(--color-theme);
      text-align: center;
      border-bottom: 4px solid var(--color-theme-secondary-light);
    }

  </style>
`;

export default style;
