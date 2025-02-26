// @ts-ignore
import Lenis, {LenisOptions} from "lenis";
// @ts-ignore
import ScrollTriger from "gsap/ScrollToPlugin";
// @ts-ignore
import gsap from "gsap";

class AkyosScroll {
    private lenis: Lenis;

    constructor(options: LenisOptions = {}) {
        gsap.registerPlugin(ScrollTriger);

        this.lenis = new Lenis(...options, {
            autoRaf: true
        });

        this.lenis.on('scroll', ScrollTriger.update)
        gsap.ticker.add((time: number) => {
            this.lenis.raf(time * 1000)
        })

        gsap.ticker.lagSmoothing(0);
    }
}

export default AkyosScroll;