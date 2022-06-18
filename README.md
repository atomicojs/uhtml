# @atomico/lit-html

[![Discord](https://raw.githubusercontent.com/atomicojs/atomico/brand/link-to-discord.svg)](https://discord.gg/7z3rNhmkNE) [![Twitter](https://raw.githubusercontent.com/atomicojs/atomico/brand/link-to-twitter.svg)](https://twitter.com/atomicojs)

`@atomico/lit-html` will allow you to use lit-html within Atomico, example:

```js
import { c } from "atomico";
import { html } from "@atomico/lit-html";

function component() {
    return html`<h1>Atomico + lit-html</h1>`;
}
```

The first html return must always come from the `@atomico/lit-html` model, since atomico adds the render method to this function, which allows atomico to render any library.

## Objectives.

1. Support lit-html as an optional renderer for developers who are comfortable with lit-html.
2. Give declarative support to the use of the shadowDom.
3. Support references, to share hooks between Atomico, lit-html, react and react.

## shadowDom

```js
import { c } from "atomico";
import { html } from "@atomico/lit-html";

function component({ message }: Props<typeof component>) {
    html.shadowDom = true;
    return html`<h1>Welcome to ${message}!</h1>`;
}

component.props = {
    message: { type: String, value: "Atomico" },
};

customElements.define("my-component", c(component));
```

## useRender

Homologous hook of useRender from [@atomico/hooks/use-render](https://atomico.gitbook.io/doc/atomico/atomico-hooks/use-render).

```js
import { useRender } from "@atomico/lit-html";

function component() {
    useRender(() => html`<input type="text" />`);
}
```

## ref

Allows the use of Atomico references within lit-html.

```js
import { useRef } from "atomico";
import { ref } from "@atomico/lit-html";

function component() {
    const refInput = useRef();
    return html`<input type="text" ${ref(refInput)} />`;
}
```
