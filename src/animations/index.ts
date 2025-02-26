import AkyosScroll from "./AkyosScroll";
import AkyosTextOverflow from "./AkyosTextOverflow";
import AkyosWipe from "./AkyosWipe";
import AkyosMask from "./AkyosMask";
import AkyosInitializer from "../core/AkyosInitializer";
import '../assets/main.scss';

new AkyosScroll();

document.addEventListener("DOMContentLoaded", () => {
    new AkyosInitializer().init()
})

export {AkyosTextOverflow, AkyosWipe, AkyosMask, AkyosInitializer};