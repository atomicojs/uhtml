import { c } from "atomico";
import { fixture } from "atomico/test-dom";
import { describe, it, expect } from "vitest";
import { html } from "../src/html";

const Component = c(() => html`<h1>welcome</h1>`);
customElements.define("test-html", Component);

const ComponentWithShadowDom = c(() => {
    html.shadowDom = true;
    return html`<h1>welcome</h1>`;
});

customElements.define("test-light-dom", Component);
customElements.define("test-shadow-dom", ComponentWithShadowDom);

describe("html", () => {
    it("shadowDOM", async () => {
        const element = fixture<typeof ComponentWithShadowDom>(
            <ComponentWithShadowDom />
        );

        await element.updated;

        expect(element.shadowRoot.innerHTML).toEqual(`<h1>welcome</h1>`);
    });
    it("lightDOM", async () => {
        const element = fixture<typeof Component>(<Component />);

        await element.updated;

        expect(element.innerHTML).toEqual(`<h1>welcome</h1>`);
    });
});
