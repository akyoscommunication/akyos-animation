import gsap from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger.js";

if (process.env.NODE_ENV !== 'test') {
    gsap.registerPlugin(ScrollTrigger);
}

/**
 * Options de configuration pour l'effet de translation.
 * @typedef {Object} AkyosTranslateOptions
 * @property {number|string} [start='top 80%'] - Point de départ de l'animation.
 * @property {"top" | "bottom" | "left" | "right"} [direction='top'] - Direction de l'animation.
 * @property {number} [distance=100] - Distance de l'animation.
 * @property {number} [duration=1] - Durée de l'animation.
 * @property {number} [delay=0] - Délai avant le début de l'animation.
 * @property {boolean} [markers=false] - Affiche les marqueurs de déclenchement de l'animation.
 * @property {boolean} [fade=true] - Applique un fondu à l'élément.
 * @property {string} [ease='power3.out'] - Fonction d'accélération de l'animation.
 * @property {boolean} [scrub=true] - Synchronise l'animation avec le défilement.
 * @property {number|string} [end='bottom bottom'] - Point de fin de l'animation.
 */
export class AkyosTranslate {

    /**
     * Crée une nouvelle instance de la classe AkyosTranslate.
     * @param {HTMLElement} element - L'élément DOM auquel l'effet de translation sera déclenché.
     * @param {AkyosTranslateOptions} [options={}] - Les options de configuration de l'effet de translation.
     */
    constructor(element, options = {}) {
        if (!element) throw new Error('Element not found.');

        this.element = element;

        this.options = {
            start: 'top bottom-=10%',
            end: 'bottom bottom-=20%',
            direction: 'top',
            duration: 1,
            delay: 0,
            markers: false,
            fade: true,
            ease: 'none', ...options,
            scrub: 1,
            distance: 100,
        }

        this.init();
    }

    init() {

        if (!this.options.fade) {
            this.element.style.opacity = '0';
        }

        this.animate();
    }

    animate() {

        gsap.fromTo(this.element, {
            y: this.options.direction === 'top' ? this.options.distance : this.options.direction === 'bottom' ? -this.options.distance : 0,
            x: this.options.direction === 'left' ? this.options.distance : this.options.direction === 'right' ? -this.options.distance : 0,
            opacity: this.options.fade ? 0 : 1
        }, {
            y: 0,
            x: 0,
            opacity: 1,
            duration: this.options.duration,
            delay: this.options.delay,
            ease: this.options.ease,
            scrollTrigger: {
                trigger: this.element,
                start: this.options.start,
                end: this.options.end,
                markers: this.options.markers,
                scrub: this.options.scrub
            }
        })
    }
}

export default AkyosTranslate;


