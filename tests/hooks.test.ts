import { describe, expect, it } from "vitest";
import { createHooks } from "atomico/test-hooks";
import { useRender } from "../src/hooks";
import { html } from "uhtml";

describe("useRender", () => {
    it("case", () => {
        const host = document.createElement("div");

        const hooks = createHooks(() => {}, host);

        hooks.load(() => useRender(() => html`<h1>welcome</h1>`));

        expect(host.innerHTML).toEqual(`<h1>welcome</h1>`);
    });
});
