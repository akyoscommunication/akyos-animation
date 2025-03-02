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
            ...options
        }
    }

    init() {
        this.animate();
    }

    animate() {
        if (!this.options.elementToAnimate) return;

        gsap.to(this.options.elementToAnimate, {
            scrollTrigger: {
                trigger: this.element,
                start: this.options.start,
                end: this.options.end,
                scrub: true
            },
            className: this.options.className,
            ease: 'none'
        });
    }
}

export default AkyosBackground;