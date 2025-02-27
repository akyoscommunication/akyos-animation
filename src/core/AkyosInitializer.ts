type AnimationClass = new (element: HTMLElement, options: any) => any;

import {createRequire} from 'module';

const require = createRequire(import.meta.url);

// Exemple : Charger un module commun "animations"

class AkyosInitializer {
	private animations: Record<string, () => Promise<{ default: AnimationClass }>>

	constructor() {
		this.animations = {
			textOverflow: () => require("../animations/AkyosTextOverflow"),
			wipe: () => require("../animations/AkyosWipe"),
			mask: () => require("../animations/AkyosMask"),
		}
	}

	public init() {
		// Utilisation de Promises plutôt que 'async/await'
		const elements = document.querySelectorAll("[akyos-animation-name]");
		const promises: Promise<void>[] = [];

		elements.forEach((element) => {
			const el = <HTMLElement>element;
			const name = element.getAttribute("akyos-animation-name");
			const options = this.getOptions(el);

			if (name && this.animations[name]) {
				const promise = this.animations[name]()
					.then((module) => {
						const AnimationClass = module.default;
						new AnimationClass(el, options);
					})
					.catch((error) => {
						console.error(`AkyosAnimation: Error loading animation ${name}`, error);
					});
				promises.push(promise);
			} else {
				console.warn(`AkyosAnimation: Animation ${name} not found`);
			}
		});

		// Gérer toutes les promesses si nécessaire
		Promise.all(promises).then(() => {
			console.log("All animations initialized");
		});
	}

	getOptions(element: HTMLElement): Record<string, any> {
		return {
			duration: parseFloat(<string>element.getAttribute("akyos-animation-duration")) || 1,
			delay: parseFloat(<string>element.getAttribute("akyos-animation-delay")) || 0,
			easing: element.getAttribute("akyos-animation-easing") || "power2.out",
			direction: element.getAttribute("akyos-animation-direction") || "left",
			from: element.getAttribute("akyos-animation-from") || "up",
			start: element.getAttribute("akyos-animation-start") || "top",
			end: element.getAttribute("akyos-animation-end") || "bottom",
		}
	}
}

document.addEventListener("DOMContentLoaded", () => {
	new AkyosInitializer().init();
});

export default AkyosInitializer;
