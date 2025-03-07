export class AkyosAttributeLoader {

    /**
     * Constructeur qui initialise les animations et le mapping
     */
    constructor() {
        this.animationsMap = {
            textOverflow: () => import('../animations/AkyosTextOverflow.js'),
            background: () => import('../animations/AkyosBackground.js'),
            translate: () => import('../animations/AkyosTranslate.js'),
            mask: () => import('../animations/AkyosMask.js'),
        };

        this.init();
    }

    /**
     * Initialisation des animations
     */
    init() {
        const animationElements = document.querySelectorAll('[akyos-animation-name]');

        animationElements.forEach((element) => {
            const animationName = element.getAttribute('akyos-animation-name');

            if (animationName in this.animationsMap) {
                this.loadAnimation(animationName, element);
            } else {
                console.warn(`L'animation ${animationName} n'existe pas`);
            }
        })
    }

    /**
     * Charge dynamiquement une animation et l'instancie
     * @param {string} animationName - Le nom de l'animation à charger
     * @param {HTMLElement} element - L'élément sur lequel appliquer l'animation
     */
    async loadAnimation(animationName, element) {
        try {
            const animationModule = await this.animationsMap[animationName]();
            const options = this.extractOptions(element);

            new animationModule.default(element, options);
        } catch (error) {
            console.error('Erreur lors du chargement de l\'animation', error);
        }
    }

    /**
     * Extrait les options des attributs 'akyos-animation-*'
     * @param {HTMLElement} element - L'élément sur lequel appliquer l'animation
     * @returns {Object} Un objet contenant les options de l'animation
     */
    extractOptions(element) {
        const options = {};

        Array.from(element.attributes).forEach((attr) => {
            if (attr.name.startsWith("akyos-animation-") && attr.name !== "akyos-animation-name") {
                const key = attr.name.replace('akyos-animation-', '');

                options[key] = isNaN(Number(attr.value)) ? attr.value : Number(attr.value);
            }
        });

        return options;
    }
}
