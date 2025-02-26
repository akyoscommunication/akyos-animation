// @ts-ignore
import {AkyosMask, AkyosTextOverflow, AkyosWipe} from "../animations";


type AnimationClass = new (element: HTMLElement, options: any) => any;

class AkyosInitializer {
    private animations: Record<string, AnimationClass>

    constructor() {
        this.animations = {
            textOverflow: AkyosTextOverflow,
            wipe: AkyosWipe,
            mask: AkyosMask
        }
    }

    public init() {
        document.querySelectorAll("[akyos-animation-name]").forEach((element) => {
            const el = <HTMLElement>element;
            const name = element.getAttribute("akyos-animation-name")
            const options = this.getOptions(el);

            if (name && this.animations[name]) {
                new this.animations[name](el, options);
            } else {
                console.warn(`AkyosAnimation: Animation ${name} not found`)
            }
        })
    }

    getOptions(element: HTMLElement): Record<string, any> {
        return {
            duration: parseFloat(<string>element.getAttribute("akyos-animation-duration")) || 1,
            delay: parseFloat(<string>element.getAttribute("akyos-animation-delay")) || 0,
            easing: element.getAttribute("akyos-animation-easing") || "power2.out",
            direction: element.getAttribute("akyos-animation-direction") || "left",
            from: element.getAttribute("akyos-animation-from") || "up",
            start: element.getAttribute("akyos-animation-start") || "top",
            end: element.getAttribute("akyos-animation-end") || "bottom",
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    new AkyosInitializer().init();
})

export default AkyosInitializer;