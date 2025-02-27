import AkyosTextOverflow from "../src/animations/AkyosTextOverflow";
import {beforeEach, describe, expect, test} from "@jest/globals";

describe("AkyosTextOverflow", () => {
    let element;

    beforeEach(() => {
        document.body.innerHTML = '<div id="test">Hello, World!</div>';
        element = document.getElementById("test");
    });

    test("Doit throw une erreur si aucun élément n'est fourni", () => {
        expect(() => {
            new AkyosTextOverflow(null);
        }).toThrow("Element not found.");
    });

    test("Doit fonctionner avec un élément", () => {
        const animation = new AkyosTextOverflow(element);

        const span = element.querySelector("span");
        expect(span).not.toBeNull();
        expect(span.innerHTML).toBe("Hello, World!");
    });
});