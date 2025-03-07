import gsap from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger.js";

if (process.env.NODE_ENV !== 'test') {
    gsap.registerPlugin(ScrollTrigger);
}


/**
 * Options de configuration pour l'effet de masque.
 * @typedef {Object} AkyosMaskOptions
 * @property {number|string} [start='top 80%'] - Point de départ de l'animation.
 * @property {number} [duration=1] - Durée de l'animation.
 * @property {number} [delay=0] - Délai avant le début de l'animation.
 * @property {boolean} [markers=false] - Affiche les marqueurs de déclenchement de l'animation.
 *
 */
export class AkyosMask {

    /**
     * Crée une nouvelle instance de la classe AkyosMask.
     * @param {HTMLElement} element - L'élément DOM auquel l'effet de masque sera déclenché.
     * @param {AkyosMaskOptions} [options={}] - Les options de configuration de l'effet de masque.
     */
    constructor(element, options = {}) {
        if (!element) throw new Error('Element not found.');

        console.log(element, options)
    }
}

export default AkyosMask;
