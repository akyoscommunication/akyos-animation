import gsap from 'gsap';
import Lenis from "lenis";
import {ScrollTrigger} from 'gsap/ScrollTrigger.js';

if (process.env.NODE_ENV !== 'test') {
	gsap.registerPlugin(ScrollTrigger);
}

/**
 * Options de configuration pour l'effet de défilement.
 * @typedef {Object} AkyosScrollOptions
 * @property {number} [lerp=0.1] - Lissage de la position de défilement.
 * @property {number} [duration=0.7] - Durée de l'animation.
 * @property {number} [wheelMultiplier=0.7] - Multiplicateur de vitesse de défilement.
 */

export class AkyosScroll {

	/**
	 * Crée une nouvelle instance de AkyosScroll.
	 * @param {AkyosScrollOptions} [options={}] - An optional configuration object to customize the instance.
	 */
	constructor(options = {}) {

		/**
		 * Les options de configuration de l'effet de défilement.
		 * @type {AkyosScrollOptions}
		 */
		this.options = {
			lerp: 0.1,
			duration: 0.7,
			wheelMultiplier: 0.7,
			...options
		}

		if (process.env.NODE_ENV !== 'test') {
			this.animate();
		}
	}

	/**
	 * Initialise l'effet de défilement.
	 */
	animate() {
		const lenis = new Lenis({
			lerp: this.options.lerp,
			duration: this.options.duration,
			wheelMultiplier: this.options.wheelMultiplier
		});

		lenis.on('scroll', ScrollTrigger.update);

		gsap.ticker.add((time) => {
			lenis.raf(time * 1000);
		});

		gsap.ticker.lagSmoothing(0);
	}
}

export default AkyosScroll
