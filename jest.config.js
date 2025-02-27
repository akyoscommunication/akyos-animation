export default {
    transform: {
        "^.+\\.jsx?$": "babel-jest" // Transforme les fichiers JS/JSX via Babel
    },
    testEnvironment: "jest-environment-jsdom", // Utilise jsdom pour simuler le DOM
    transformIgnorePatterns: [
        "/node_modules/(?!gsap)" // Exclut `gsap` de l'ignorance des transformations
    ]
};