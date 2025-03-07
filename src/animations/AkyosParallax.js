import gsap from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger.js";

if (process.env.NODE_ENV !== 'test') {
    gsap.registerPlugin(ScrollTrigger);
}

/**
 * Options de configuration pour l'effet de masque. */
export class AkyosParallax {
    constructor(element, options = {}) {
    }
}
