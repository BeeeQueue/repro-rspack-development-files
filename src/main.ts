import { css, html, LitElement } from "lit"
import { customElement, state } from "lit/decorators.js"

@customElement("example-checkbox")
export class ExampleCheckbox extends LitElement {
  @state()
  private active: boolean

  constructor() {
    super();

    this.active = false
  }

  static styles = css`
    :host {
      display: inline-block;
    }

    :host([active]) {
      border: 1px solid red;
    }`;

  render() {
    return html`
      <span>Active: ${this.active}</span>
      <button @click="${() => this.active = !this.active}">Toggle active</button>
    `;
  }
}
