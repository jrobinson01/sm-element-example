import SMElement, {html} from 'sm-element/sm-element';

export default class LoginForm extends SMElement {
  static get machine() {
    return {
      initial:'form',
      states: {
        form: {
          name: 'form',
          transitions: [
            {
              event: 'submit_form',
              target: 'loading',
              condition(detail) {
                return (detail.username && detail.password);
              }
            }
          ]
        },
        loading: {
          name: 'loading',
          onEntry() {
            // fake network request
            setTimeout(() => {
              if (this.username === 'admin' && this.password === 'password') {
                this.send('authenticated');
              } else {
                this.send('unauthenticated', {username:'', password:''});
              }
            }, 2000);
          },
          transitions: [
            {
              event: 'authenticated',
              target: 'success',
              effect(detail) {
                return detail;
              }
            },
            {
              event: 'unauthenticated',
              target: 'error',
              effect(detail) {
                return detail;
              }
            }
          ],
          render() {
            return html`<div>loading...</div>`;
          }
        },
        error: {
          name: 'error',
          transitions: [
            {
              event: 'try_again',
              target: 'form'
            }
          ],
          render() {
            return html`<div>Sorry, username or password is incorrect.</div>`;
          }
        },
        success: {
          name: 'success',
          onEntry() {
            // let our parent know we're done
            this.dispatchEvent(new CustomEvent('logged-in', {
              detail: {
                username: this.username
              }
            }));
          },
          transitions: []
        }
      }
    };
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
      }
    }
  }

  render({username, password}) {
    const enabled = this.oneOfState(this.currentState, this.states.form, this.states.error);
    return html`
      <form @submit="${e => this.onSubmit(e)}" @change="${e => this.send('try_again')}">
        <input type="text" .value="${username}" @input="${e => this.username = e.target.value}" .disabled="${!enabled}"></input>
        <input type="password" .value="${password}" @input="${e => this.password = e.target.value}" .disabled="${!enabled}"></input>
        <button type="submit" .disabled="${!enabled}">Login</button>
      </form>
      ${this.currentStateRender(this.data)}
    `
  }

  onSubmit(e) {
    e.preventDefault();
    this.send('submit_form', {username:this.username, password: this.password});
  }
}

customElements.define('login-form', LoginForm);
