import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";
import resolve from "@rollup/plugin-node-resolve";
import { babel } from "@rollup/plugin-babel";
import typescript from "rollup-plugin-typescript2";
import { visualizer } from "rollup-plugin-visualizer";
import commonjs from '@rollup/plugin-commonjs';

const isProduction = process.env.NODE_ENV === "production";

export default {
    input: "src/animations/index.ts", // Point d'entrée de l'animation
    treeshake: isProduction,
    output: [
        {
            file: "dist/akyos-animation.cjs.js", // Fichier pour CommonJS
            format: "cjs",
            sourcemap: !isProduction,
        },
        {
            file: "dist/akyos-animation.umd.js", // Fichier pour le UMD
            format: "umd",
            name: "AkyosAnimation",
            sourcemap: !isProduction,
        },
        {
            file: "dist/akyos-animation.esm.js", // Fichier pour le module ES
            format: "es",
            sourcemap: !isProduction,
        },
    ],
    plugins: [
        resolve(),                       // Résolution des modules Node
        commonjs(),                      // Support CommonJS
        typescript({
            tsconfig: "./tsconfig.json", // Utilise le fichier `tsconfig.json`
            check: false,                // Désactive le check TS pendant le build
            useTsconfigDeclarationDir: true, // Ecrit les `.d.ts` dans `declarationDir`
            clean: true,                 // Nettoie les fichiers obsolètes dans `dist`
        }),
        babel({
            babelHelpers: "bundled",
            exclude: "node_modules/**",
        }),
        postcss({
            extract: "akyos-animation.css", // CSS output (minifié ou non)
            minimize: isProduction,
            use: ["sass"],              // Permet SASS en PostCSS
            sourceMap: !isProduction,
        }),
        terser(isProduction ?           // Minifie seulement en production
           {
               compress: {
                   drop_console: true,
                   pure_funcs: ["console.info", "console.debug"],
                   passes: 2,
               },
               output: {comments: false},
           } : false
        ),
        !isProduction && visualizer({
            filename: "dist/stats.html",
            open: true,
        }),
    ].filter(Boolean), // Supprime les plugins désactivés
};
