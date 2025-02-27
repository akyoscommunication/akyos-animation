type AnimationClass = new (element: HTMLElement, options: any) => any;

class AkyosInitializer {
	private animations: Record<string, () => Promise<{ default: AnimationClass }>>

	constructor() {
		this.animations = {
			textOverflow: () => import("../animations/AkyosTextOverflow"),
			wipe: () => import("../animations/AkyosWipe"),
			mask: () => import("../animations/AkyosMask"),
		}
	}

	public async init() {
		for (const element of document.querySelectorAll("[akyos-animation-name]")) {
			const el = <HTMLElement>element;
			const name = element.getAttribute("akyos-animation-name")
			const options = this.getOptions(el);

			if (name && this.animations[name]) {
				try {
					const module = await this.animations[name]();
					const AnimationClass = module.default;
					new AnimationClass(el, options);
				} catch (error) {
					console.error(`AkyosAnimation: Error loading animation ${name}`, error)
				}

			} else {
				console.warn(`AkyosAnimation: Animation ${name} not found`)
			}
		}
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
})

export default AkyosInitializer;
