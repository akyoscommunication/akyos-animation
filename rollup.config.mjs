import postcss from "rollup-plugin-postcss";
import {terser} from "rollup-plugin-terser";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import {babel} from "@rollup/plugin-babel";
import typescript from "rollup-plugin-typescript2";
import { visualizer } from "rollup-plugin-visualizer";

const isProduction = process.env.NODE_ENV === "production";

export default {
    input: "src/animations/index.ts",
    treeshake: isProduction,
    output: [
        {
            file: "dist/akyos-animation.cjs.js",
            format: "cjs",
            sourcemap: !isProduction,
        },
        {
            file: "dist/akyos-animation.umd.js",
            format: "umd",
            name: "AkyosAnimation",
            sourcemap: !isProduction,
        },
        {
            file: "dist/akyos-animation.esm.js",
            format: "es",
            sourcemap: !isProduction,
        },
    ],
    plugins: [
        resolve(),
        commonjs(),
        typescript({
            tsconfig: "./tsconfig.json",
            useTsconfigDeclarationDir: true,
        }),
        babel({
            babelHelpers: "bundled",
            exclude: "node_modules/**",
        }),
        postcss({
            extract: "akyos-animation.css",
            minimize: isProduction, // Minifie seulement en production
            use: ["sass"],
            sourceMap: !isProduction,
        }),
        terser(isProduction ? {
            compress: {
                drop_console: true,
                pure_funcs: ["console.info", "console.debug"],
                passes: 2,
            },
            output: { comments: false },
        } : false), // Désactive terser en dev
        !isProduction && visualizer({
            filename: "dist/stats.html",
            open: true,
        }),
    ].filter(Boolean), // Supprime les plugins désactivés
};

