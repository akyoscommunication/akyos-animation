import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import zlib from 'zlib';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.join(__dirname, '../dist');

function getFileSize(filePath) {
    const stats = fs.statSync(filePath);
    return stats.size;
}

function getGzipSize(filePath) {
    const content = fs.readFileSync(filePath);
    const gzipped = zlib.gzipSync(content);
    return gzipped.length;
}

function formatBytes(bytes) {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
}

function analyzeDirectory(dir, prefix = '') {
    const files = fs.readdirSync(dir);
    const results = [];

    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            results.push(...analyzeDirectory(filePath, prefix + file + '/'));
        } else if (file.endsWith('.js') || file.endsWith('.cjs')) {
            const size = getFileSize(filePath);
            const gzipSize = getGzipSize(filePath);
            results.push({
                name: prefix + file,
                size,
                gzipSize,
                sizeFormatted: formatBytes(size),
                gzipFormatted: formatBytes(gzipSize)
            });
        }
    });

    return results;
}

console.log('\n📊 Analyse de la taille des bundles\n');
console.log('=' .repeat(80));

const results = analyzeDirectory(distDir);

// Trier par taille
results.sort((a, b) => b.size - a.size);

// Afficher en tableau
console.log('\n🗂️  Fichiers individuels :\n');
console.log('Fichier'.padEnd(40) + 'Taille'.padEnd(15) + 'Gzip'.padEnd(15));
console.log('-'.repeat(80));

results.forEach(file => {
    console.log(
        file.name.padEnd(40) + 
        file.sizeFormatted.padEnd(15) + 
        file.gzipFormatted.padEnd(15)
    );
});

// Calculer les totaux
const totalSize = results.reduce((sum, file) => sum + file.size, 0);
const totalGzip = results.reduce((sum, file) => sum + file.gzipSize, 0);

console.log('-'.repeat(80));
console.log(
    'TOTAL'.padEnd(40) + 
    formatBytes(totalSize).padEnd(15) + 
    formatBytes(totalGzip).padEnd(15)
);

// Analyser par type
console.log('\n📦 Par catégorie :\n');

const animations = results.filter(f => f.name.includes('animations/'));
const chunks = results.filter(f => f.name.includes('chunk-'));
const main = results.filter(f => f.name === 'index.js' || f.name === 'index.cjs');
const loader = results.filter(f => f.name.includes('loader'));

const categories = [
    { name: 'Index principal', files: main },
    { name: 'Animations', files: animations },
    { name: 'Loader', files: loader },
    { name: 'Chunks partagés', files: chunks }
];

categories.forEach(cat => {
    if (cat.files.length > 0) {
        const catSize = cat.files.reduce((sum, f) => sum + f.size, 0);
        const catGzip = cat.files.reduce((sum, f) => sum + f.gzipSize, 0);
        console.log(
            cat.name.padEnd(40) + 
            formatBytes(catSize).padEnd(15) + 
            formatBytes(catGzip).padEnd(15) +
            `(${cat.files.length} fichiers)`
        );
    }
});

console.log('\n' + '='.repeat(80));
console.log('\n✅ Analyse terminée !\n');
console.log('💡 Tailles gzip = taille réelle transmise sur le réseau');
console.log('💡 Import granulaire recommandé : import { X } from "akyos-animation/animations/x"\n');
