import { defineConfig } from "vite";

export default defineConfig({
    build: {
        lib: {
            entry: "src/index.js", // Point d'entrée principal
            name: "AkyosAnimation", // Nom de la librairie (pour UMD/IIFE)
            fileName: (format) => `akyos-animations.${format}.js`,
        },
        rollupOptions: {
            // Ignorer gsap pour ne pas l'inclure dans la librairie, mais requis par l'utilisateur
            external: ["gsap", "lenis"],
            output: {
                globals: {
                    // Les dépendances externes seront mappées à des variables globales
                    gsap: "gsap",
                    lenis: "lenis",
                },
            },
        },
    },
});