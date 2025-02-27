import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AkyosTextOverflowOptions {
    duration?: number;
    delay?: number;
    easing?: string;
    start?: number | string;
    from?: 'up' | 'down';
}

class AkyosTextOverflow {
    private element: HTMLElement;
    private options: AkyosTextOverflowOptions;
    private innerSpan: HTMLSpanElement | undefined;

    constructor(element: HTMLElement, options: AkyosTextOverflowOptions = {}) {
        if (!element) throw new Error("AkyosTextOverflow: element is not defined");

        this.element = element;
        this.options = {
            duration: 0.6,
            delay: 0,
            easing: 'power2.out',
            start: "top 80%",
            from: 'down',
            ...options
        }

        this.init();
    }

    private init() {
        this.element.classList.add('akyos-animation-text-overflow');
        this.wrapText();
        this.animate();
    }

    private wrapText() {
        this.innerSpan = document.createElement('span');
        this.innerSpan.innerHTML = this.element.innerHTML;
        this.element.innerHTML = '';
        this.element.appendChild(this.innerSpan);
    }

    animate() {
        const fromPosition = this.options.from === 'down' ? '100%' : '-100%';

        if (!this.innerSpan) return;

        gsap.fromTo(
            this.innerSpan,
            {y: fromPosition},
            {
                y: 0,
                duration: this.options.duration,
                delay: this.options.delay,
                ease: this.options.easing,
                scrollTrigger: this.options.start ? {
                    trigger: this.element,
                    start: this.options.start,
                    end: 'bottom 20%',
                    once: true
                } : undefined
            }
        )
    }
}

export default AkyosTextOverflow;
