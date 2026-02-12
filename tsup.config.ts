import {defineConfig} from 'tsup';

export default defineConfig({
    entry: {
        index: 'src/index.ts',
        'animations/translate': 'src/animations/AkyosTranslate.js',
        'animations/mask': 'src/animations/AkyosMask.js',
        'animations/parallax': 'src/animations/AkyosParallax.js',
        'animations/background': 'src/animations/AkyosBackground.js',
        'animations/textoverflow': 'src/animations/AkyosTextOverflow.js',
        'animations/scroll': 'src/animations/AkyosScroll.js',
        'loader': 'src/core/AkyosAttributeLoader.js',
    },
    format: ['esm', 'cjs'],
    dts: true,
    sourcemap: false,
    minify: 'terser',
    clean: true,
    treeshake: true,
    splitting: true,
    external: ['gsap', 'lenis']
});
