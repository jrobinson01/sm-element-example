import {html} from 'sm-element/sm-element';

const style = html`
  <style>
    header {
    background-color: #ffffff;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cg fill='%232cc36a' fill-opacity='0.18'%3E%3Cpolygon fill-rule='evenodd' points='8 4 12 6 8 8 6 12 4 8 0 6 4 4 6 0 8 4'/%3E%3C/g%3E%3C/svg%3E");
      padding: 32px;
      text-align: center;
    }
    header a-link {
      color: var(--color-theme-text);
      font-weight: 800;
      font-style: italic;
      font-size: 52px;
      text-transform: uppercase;
      letter-spacing: -4px;
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
    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
    }
    li {
      font-size: 18px;
      padding: 16px 0;
      border-bottom: 1px solid #eeeeee;
    }
    #blog-app-home a-link.button {
      transform: skew(-10deg);
      padding: 8px 16px;
      margin: 16px 16px 16px 0;
      background: var(--color-theme-light);
      border: 1px solid var(--color-theme);
      display: inline-block;
      font-weight: 600;
      font-size: 18px;
      text-transform: uppercase;
      letter-spacing: -2px;
    }
    #blog-app-home li a-link {
      width: 100%;
      margin: 0;
      color: var(--color-black);
    }
    article {
      font-size: 18px; 
      margin-top: 8px;
    }
  </style>
`;

export default style;
