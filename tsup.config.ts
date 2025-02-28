import { defineConfig } from 'tsup';

export default defineConfig({
	entry: ['src/index.ts'], // Chemin de ton fichier source principal
	format: ['esm', 'cjs'],  // Génération des formats ESModule et CommonJS
	dts: true,               // Génération des types `.d.ts` (pour TypeScript)
	sourcemap: false,        // Utile seulement si tu test pour un débogage
	minify: false,           // Désactive la minification pour inspection
	clean: true              // Nettoyage automatique du dossier `dist`
});
