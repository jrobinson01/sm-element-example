import SMElement, {html} from 'sm-element/sm-element';
import machine from './machine/machine';
import style from './style';

export default class LoginForm extends SMElement {

  static get machine() {
    return machine;
  }

  static get properties() {
    return {
      username: {
        type: String,
        value: ''
      },
      password: {
        type: String,
        value: ''
      },
      errorMessage: {
        type: String
      },
      usernameError: {
        type: String
      }
    }
  }

  render({username, password}) {
    const enabled = this.oneOfState(this.currentState, this.states.form, this.states.error);
    return html`
      ${style}
      <h5>
        <div class="container">
          Login
        </div>
      </h5>
      <div class="container">
        <article>
          <form @submit="${e => this.onSubmit(e)}" @change="${e => this.send('try_again')}">
            <input type="text" .value="${username}" @input="${e => {this.username = e.target.value; this.usernameError = ''}}" .disabled="${!enabled}" placeholder="admin"></input>
            <input type="password" .value="${password}" @input="${e => this.password = e.target.value}" .disabled="${!enabled}" placeholder="password"></input>
            <button type="submit" .disabled="${!enabled}">Login</button>
          </form>
          ${this.currentStateRender(this.data)}
          ${this.usernameError ? html`<div class="validation-error">${this.usernameError}</div>` : ''}
        </article>
      </div>
    `;
  }

  onSubmit(e) {
    e.preventDefault();
    this.send('submit_form', {username:this.username, password: this.password});
  }
}

customElements.define('login-form', LoginForm);
