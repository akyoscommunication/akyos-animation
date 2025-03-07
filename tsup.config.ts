import {defineConfig} from 'tsup';

export default defineConfig({
    entry: ['src/index.ts'],
    format: ['esm', 'cjs'],
    dts: true,
    sourcemap: false,
    minify: 'terser',
    clean: true,
    treeshake: true,
    external: ['gsap', 'lenis']
});
