import { c, useRef, useEffect, useProp, DOMEvent } from "atomico";
import { html, useRender } from "../src/uhtml";

function component() {
    const [value, setValue] = useProp("value");

    useRender(() => html`<p>welcome</p>`);

    html.shadowDom = true;

    return html`<div>
        <h1>${value}</h1>
        <input
            .value=${value}
            @input=${(event: DOMEvent<HTMLInputElement>) => {
                setValue(event.currentTarget.value);
            }}
        />
        <input
            .value=${value}
            @input=${(event: DOMEvent<HTMLInputElement>) => {
                setValue(event.currentTarget.value);
            }}
        />
    </div>`;
}

component.props = {
    value: { type: String, value: "Content..." },
};

const Component = c(component);

customElements.define("my-component", Component);
