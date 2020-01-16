import { html } from 'lit-html';

import '../my-element.js';

export default {
  title: 'Demo',
  component: 'my-element'
};

export const Heading = () => html`
  <my-element message="Hi!" />
`;

export const SettingProperties = () => html`
  <my-component .data=${{ header: 'foo', state: true }}>Hello World</my-component>
`;

export const Events = () => html`
  <button @click=${ev => console.log('clicked button')}>clicking will get logged to console</button>
`;

export const WithFunction = () => {
  const header = 'My Header';
  return html`
    <h1>${header}</h1>
  `;
};
