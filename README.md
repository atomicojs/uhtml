# @atomico/uhtml

[![Discord](https://raw.githubusercontent.com/atomicojs/atomico/brand/link-to-discord.svg)](https://discord.gg/7z3rNhmkNE) [![Twitter](https://raw.githubusercontent.com/atomicojs/atomico/brand/link-to-twitter.svg)](https://twitter.com/atomicojs)

`@atomico/uhtml` will allow you to use uhtml within Atomico, example:

```js
import { c } from "atomico";
import { html } from "@atomico/uhtml";

function component() {
    return html`<h1>Atomico + uhtml</h1>`;
}
```

The first html return must always come from the `@atomico/uhtml` model, since atomico adds the render method to this function, which allows atomico to render any library.

## Objectives.

1. Support uhtml as an optional renderer for developers who are comfortable with uhtml.
2. Give declarative support to the use of the shadowDom.
3. Support references, to share hooks between Atomico, uhtml, react and react.

## shadowDom

```js
import { c } from "atomico";
import { html } from "@atomico/uhtml";

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
import { useRender } from "@atomico/uhtml";

function component() {
    useRender(() => html`<input type="text" />`);
}
```
