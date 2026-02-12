import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger.js";

if (process.env.NODE_ENV !== 'test') {
    gsap.registerPlugin(ScrollTrigger);
}


/**
 * Options de configuration pour l'effet de changement de couleur de fond.
 * @typedef {Object} AkyosBackgroundOptions
 * @property {number|string} [start='top 80%'] - Point de départ de l'animation.
 * @property {number|string} [end='bottom 20%'] - Point de fin de l'animation.
 * @property {string} [className='bg-primary'] - Classe CSS à ajouter à l'élément.
 * @property {HTMLElement} elementToAnimate - L'élément ou mettre la couleur de fond (className). Par défaut, c'est le body.
 * @property {boolean} [markers=false] - Affiche les marqueurs de déclenchement de l'animation.
 */

export class AkyosBackground {


    /**
     * Crée une nouvelle instance de la classe AkyosBackground.
     * @param {HTMLElement} element - L'élément DOM auquel l'effet de changement de couleur sera déclenché.
     * @param {AkyosBackgroundOptions} [options={}] - Les options de configuration de l'effet de changement de couleur.
     */
    constructor(element, options = {}) {
        if (!element) throw new Error('Element not found.');

        this.element = element;

        this.options = {
            start: 'top 80%',
            end: 'bottom 20%',
            className: 'bg-primary',
            elementToAnimate: document.body, // Par défaut, on met la couleur de fond sur le body
            markers: false,
            ...options
        }

        this.init();
    }

    init() {
        this.animate();
    }

    animate() {
        if (!this.options.elementToAnimate) return;

        this.scrollTrigger = ScrollTrigger.create({
            trigger: this.element,
            start: this.options.start,
            end: this.options.end,
            scrub: true,
            markers: this.options.markers,
            onEnter: () => {
                this.options.elementToAnimate.classList.add(this.options.className);
            },
            onLeave: () => {
                this.options.elementToAnimate.classList.remove(this.options.className);
            },
            onEnterBack: () => {
                this.options.elementToAnimate.classList.add(this.options.className);
            },
            onLeaveBack: () => {
                this.options.elementToAnimate.classList.remove(this.options.className);
            }
        });
    }

    /**
     * Détruit l'instance et nettoie les ressources.
     */
    destroy() {
        if (this.scrollTrigger) {
            this.scrollTrigger.kill();
        }
        
        // Nettoyer la classe ajoutée
        this.options.elementToAnimate?.classList.remove(this.options.className);
    }
}

export default AkyosBackground;
