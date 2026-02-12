import gsap from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger.js";

if (process.env.NODE_ENV !== 'test') {
    gsap.registerPlugin(ScrollTrigger);
}

/**
 * Options de configuration pour l'effet de translation.
 * @typedef {Object} AkyosParallaxOptions
 * @property {number|string} [start='top 80%'] - Point de départ de l'animation.
 * @property {number} [distance=100] - Distance de l'animation.
 * @property {boolean} [markers=false] - Affiche les marqueurs de déclenchement de l'animation.
 * @property {number|string} [end='bottom bottom'] - Point de fin de l'animation.
 * @property {number} [speed=0.5] - Vitesse de l'effet de parallaxe.
 * @property {number} [stretch=200] - Étirement de l'image pour compenser le mouvement.
 */
export class AkyosParallax {

    /**
     * Crée une nouvelle instance de la classe AkyosParallax.
     * @param {HTMLElement} element - L'élément DOM auquel l'effet de translation sera déclenché.
     * @param {AkyosParallaxOptions} [options={}] - Les options de configuration de l'effet de parallax.
     */
    constructor(element, options = {}) {
        if (!element) throw new Error('Element not found.');

        this.element = element;

        this.options = {
            start: 'top bottom',
            end: 'bottom top',
            speed: 1,
            stretch: 200,
            distance: 200,
            markers: false,
            ...options
        }

        this.init();
    }

    init() {
        this.animate();
    }

    animate() {
        const img = this.element.querySelector('img');
        if (!img) return;

        this.img = img;
        this.originalHeight = img.style.height;
        this.originalObjectPosition = img.style.objectPosition;

        img.style.height = img.parentElement.offsetHeight + this.options.stretch + 'px';

        const parallaxAmount = Math.round(-this.options.distance * this.options.speed);

        img.style.objectPosition = `center ${parallaxAmount * 2}px`;

        this.animation = gsap.to(img, {
            objectPosition: `center ${parallaxAmount * 0.8}px`,
            ease: 'none',
            scrollTrigger: {
                trigger: this.element,
                start: this.options.start,
                end: this.options.end,
                scrub: true,
                markers: this.options.markers
            }
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
        
        // Restaurer les styles d'origine
        if (this.img) {
            this.img.style.height = this.originalHeight;
            this.img.style.objectPosition = this.originalObjectPosition;
        }
    }
}

export default AkyosParallax;
