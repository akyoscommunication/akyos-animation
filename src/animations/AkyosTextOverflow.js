import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger.js";

if (process.env.NODE_ENV !== 'test') {
	gsap.registerPlugin(ScrollTrigger);
}

/**
 * Options de configuration pour l'effet de débordement de texte.
 * @typedef {Object} AkyosTextOverflowOptions
 * @property {number} [duration=0.6] - Durée de l'animation.
 * @property {number} [delay=0] - Délai avant le début de l'animation.
 * @property {string} [easing='power2.out'] - Type d'accélération de l'animation.
 * @property {number|string} [start='top 80%'] - Point de départ de l'animation.
 * @property {'up'|'down'} [from='down'] - Direction de départ de l'animation.
 * @property {boolean} [markers=false] - Affiche les marqueurs de déclenchement de l'animation.
 * */

export class AkyosTextOverflow {

	/**
	 * Crée une nouvelle instance de la classe AkyosTextOverflow.
	 * @param {HTMLElement} element - L'élément DOM auquel appliquer l'effet de débordement de texte.
	 * @param {AkyosTextOverflowOptions} [options={}] - Les options de configuration de l'effet de débordement de texte.
	 */

	constructor(element, options = {}) {
		if (!element) throw new Error('Element not found.');

		this.element = element;

		/**
		 * Les options de configuration de l'effet de débordement de texte.
		 * @type {AkyosTextOverflowOptions}
		 */
		this.options = {
			duration: 0.6,
			delay: 0,
			easing: 'power2.out',
			start: 'top 80%',
			from: 'down',
			markers: false,
			...options
		}

		this.innerSpan = undefined;
		this.init();
	}

	/**
	 * Initialise l'effet de débordement de texte.
	 */
	init() {
		this.element.classList.add('akyos-animation-text-overflow');
		this.wrapText();

		if (process.env.NODE_ENV !== 'test') {
			this.animate();
		}
	}

	/**
	 * Entoure le texte de l'élément dans une balise span.
	 */
	wrapText() {
		this.innerSpan = document.createElement('span');
		this.innerSpan.innerHTML = this.element.innerHTML;
		this.element.innerHTML = '';
		this.element.appendChild(this.innerSpan);
	}

	/**
	 * Anime l'effet de débordement de texte.
	 */
	animate() {
		const formPosition = this.options.from === 'down' ? '100%' : '-100%';

		if (!this.innerSpan) return;

		this.animation = gsap.fromTo(this.innerSpan, {y: formPosition}, {
			y: '0',
			duration: this.options.duration,
			delay: this.options.delay,
			ease: this.options.easing,
			scrollTrigger: this.options.start ? {
				trigger: this.element,
				start: this.options.start,
				markers: this.options.markers,
				once: true
			} : undefined
		})
	}

	/**
	 * Détruit l'instance et nettoie les ressources.
	 */
	destroy() {
		if (this.animation) {
			this.animation.scrollTrigger?.kill();
			this.animation.kill();
		}
		
		// Nettoyer la classe ajoutée
		this.element.classList.remove('akyos-animation-text-overflow');
	}
}

export default AkyosTextOverflow;