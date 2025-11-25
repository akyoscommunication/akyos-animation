import AkyosParallax from "../src/animations/AkyosParallax.js";
import {beforeEach, describe, expect, test} from "@jest/globals";

describe("AkyosParallax", () => {
	let element;

	beforeEach(() => {
		document.body.innerHTML = '<div id="test">Hello, World!</div>';
		element = document.getElementById("test");
	});

	test("Doit throw une erreur si aucun élément n'est fourni", () => {
		expect(() => {
			new AkyosParallax(null);
		}).toThrow("Element not found.");
	});
});
