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
 * @property {"top"|"bottom"|"left"|"right"} [direction="right"] - Direction de l'animation.
 * @property {string} [ease='power2.out'] - Fonction d'accélération de l'animation.
 * @property {boolean} [fade=true] - Active l'effet de fondu.
 */
export class AkyosMask {

    /**
     * Crée une nouvelle instance de la classe AkyosMask.
     * @param {HTMLElement} element - L'élément DOM auquel l'effet de masque sera déclenché.
     * @param {AkyosMaskOptions} [options={}] - Les options de configuration de l'effet de masque.
     */
    constructor(element, options = {}) {
        if (!element) throw new Error('Element not found.');

        this.element = element;

        this.options = {
            start: 'top 85%',
            duration: 1,
            delay: 0,
            markers: false,
            direction: 'right',
            ease: 'power2.out',
            fade: true,
            ...options
        }

        this.init();
    }

    init() {
        this.element.classList.add('akyos-animation-mask--' + this.options.direction);

        if (!this.options.fade) {
            this.element.classList.add('akyos-animation-mask--no-fade');
        }

        this.animate();
    }

    animate() {

        const formMaskSize = (direction) => {
            if (direction === 'top' || direction === 'bottom') {
                return '100% 0%';
            }
            if (direction === 'left' || direction === 'right') {
                return '0% 100%';
            }
        }

        const toMaskSize = (direction) => {
            if (direction === 'top' || direction === 'bottom') {
                return '100% 100%';
            }

            if (direction === 'left' || direction === 'right') {
                return '100% 100%';
            }
        }

        const toMaskImage = (direction) => {
            switch (direction) {
                case 'top':
                    return 'linear-gradient(0, #fff 100%, transparent 100%)';
                case 'bottom':
                    return 'linear-gradient(0, transparent 0%, #fff 0%)';
                case 'left':
                    return 'linear-gradient(90deg, transparent 0%, #fff 0%)';
                case 'right':
                    return 'linear-gradient(90deg, #fff 100%, transparent 100%)';
            }
        }

        this.animation = gsap.fromTo(this.element, {
                maskSize: formMaskSize(this.options.direction),
                maskImage: this.element.style.maskImage
            },
            {
                maskSize: toMaskSize(this.options.direction),
                maskImage: toMaskImage(this.options.direction),
                duration: this.options.duration,
                delay: this.options.delay,
                ease: this.options.ease,
                scrollTrigger: this.options.start ? {
                    trigger: this.element,
                    start: this.options.start,
                    markers: this.options.markers,
                    once: true
                } : undefined
            }
        )
    }

    /**
     * Détruit l'instance et nettoie les ressources.
     */
    destroy() {
        if (this.animation) {
            this.animation.scrollTrigger?.kill();
            this.animation.kill();
        }
        
        // Nettoyer les classes ajoutées
        this.element.classList.remove('akyos-animation-mask--' + this.options.direction);
        this.element.classList.remove('akyos-animation-mask--no-fade');
    }
}

export default AkyosMask;
