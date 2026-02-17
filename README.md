# Akyos Animation

🚀 **Akyos Animation** est une librairie JavaScript légère, modulaire et ultra-performante pour créer des animations fluides déclenchées au scroll.

## ✨ Caractéristiques

- 🎯 **Léger** : ~1-2 kB par animation (avec tree-shaking)
- 🎨 **Modulaire** : Importez uniquement ce dont vous avez besoin
- ⚡ **Performant** : Basé sur GSAP & Lenis
- 🔧 **Facile** : Utilisable avec des attributs HTML ou en JavaScript
- 📱 **Responsive** : Fonctionne sur tous les appareils
- ♿ **Accessible** : Compatible avec les préférences utilisateur

---

## 📦 Installation

```bash
npm install akyos-animation
# ou
yarn add akyos-animation
```

### Dépendances peer requises

```bash
npm install gsap lenis
```

---

## 🚀 Démarrage rapide

### Option 1 : Avec attributs HTML (Recommandé)

Le moyen le plus simple ! Aucun JavaScript à écrire pour chaque animation.

```html
<!-- Dans votre HTML -->
<h1 akyos-animation-name="translate" 
    akyos-animation-direction="left" 
    akyos-animation-distance="100">
    Mon titre animé
</h1>
```

```javascript
// Dans votre JavaScript (une seule fois)
import { AkyosAttributeLoader } from 'akyos-animation';

new AkyosAttributeLoader();
```

### Option 2 : En JavaScript

Import global (charge toutes les animations) :

```javascript
import { AkyosTranslate } from 'akyos-animation';

const element = document.querySelector('.my-element');
new AkyosTranslate(element, {
    direction: 'left',
    distance: 150
});
```

**Import optimisé** (charge uniquement l'animation nécessaire) :

```javascript
import { AkyosTranslate } from 'akyos-animation/animations/translate';

const element = document.querySelector('.my-element');
new AkyosTranslate(element, { direction: 'left' });
```

### Import des styles

```scss
// Dans votre fichier SCSS
@import "akyos-animation/styles";
```

Ou directement en JavaScript :

```javascript
import 'akyos-animation/styles';
```

---

## 🎭 Animations disponibles

| Animation | Nom d'attribut | Description | Import optimisé |
|-----------|----------------|-------------|-----------------|
| **AkyosTranslate** | `translate` | Apparition avec translation (haut, bas, gauche, droite) | `akyos-animation/animations/translate` |
| **AkyosMask** | `mask` | Révélation avec effet de masque directionnel | `akyos-animation/animations/mask` |
| **AkyosTextOverflow** | `textOverflow` | Débordement de texte animé | `akyos-animation/animations/textoverflow` |
| **AkyosParallax** | `parallax` | Effet parallaxe sur les images | `akyos-animation/animations/parallax` |
| **AkyosBackground** | `background` | Changement de couleur de fond au scroll | `akyos-animation/animations/background` |
| **AkyosScroll** | `scroll` | Défilement doux (smooth scroll) | `akyos-animation/animations/scroll` |

---

## 📚 Documentation détaillée

### 🔹 AkyosTranslate

Fait apparaître un élément avec une translation et un effet de fondu.

#### Options

| Option | Type | Défaut | Description |
|--------|------|--------|-------------|
| `direction` | `'top'` \| `'bottom'` \| `'left'` \| `'right'` | `'top'` | Direction de l'animation |
| `distance` | `number` | `100` | Distance de translation en pixels |
| `duration` | `number` | `1` | Durée de l'animation en secondes |
| `delay` | `number` | `0` | Délai avant le début en secondes |
| `fade` | `boolean` | `true` | Active l'effet de fondu |
| `ease` | `string` | `'none'` | Courbe d'animation GSAP |
| `start` | `string` | `'top bottom-=10%'` | Point de départ ScrollTrigger |
| `end` | `string` | `'bottom bottom-=20%'` | Point de fin ScrollTrigger |
| `scrub` | `number` | `1` | Synchronisation avec le scroll |
| `markers` | `boolean` | `false` | Affiche les marqueurs de debug |

#### Exemples

```html
<!-- Attributs HTML -->
<div akyos-animation-name="translate" 
     akyos-animation-direction="left" 
     akyos-animation-distance="120">
    Contenu
</div>
```

```javascript
// JavaScript
import { AkyosTranslate } from 'akyos-animation/animations/translate';

new AkyosTranslate(element, {
    direction: 'right',
    distance: 200,
    duration: 1.5,
    fade: true
});
```

---

### 🔹 AkyosMask

Révèle un élément avec un effet de masque directionnel.

#### Options

| Option | Type | Défaut | Description |
|--------|------|--------|-------------|
| `direction` | `'top'` \| `'bottom'` \| `'left'` \| `'right'` | `'right'` | Direction du masque |
| `duration` | `number` | `1` | Durée de l'animation en secondes |
| `delay` | `number` | `0` | Délai avant le début |
| `fade` | `boolean` | `true` | Active l'effet de fondu progressif |
| `ease` | `string` | `'power2.out'` | Courbe d'animation GSAP |
| `start` | `string` | `'top 85%'` | Point de départ ScrollTrigger |
| `markers` | `boolean` | `false` | Affiche les marqueurs de debug |

#### Exemples

```html
<!-- Attributs HTML -->
<div akyos-animation-name="mask" 
     akyos-animation-direction="right">
    Contenu masqué
</div>
```

```javascript
// JavaScript
import { AkyosMask } from 'akyos-animation/animations/mask';

new AkyosMask(element, {
    direction: 'left',
    duration: 1.2,
    fade: false
});
```

---

### 🔹 AkyosTextOverflow

Animation de texte avec effet de débordement (overflow).

#### Options

| Option | Type | Défaut | Description |
|--------|------|--------|-------------|
| `from` | `'up'` \| `'down'` | `'down'` | Direction d'apparition du texte |
| `duration` | `number` | `0.6` | Durée de l'animation en secondes |
| `delay` | `number` | `0` | Délai avant le début |
| `easing` | `string` | `'power2.out'` | Courbe d'animation GSAP |
| `start` | `string` | `'top 80%'` | Point de départ ScrollTrigger |
| `markers` | `boolean` | `false` | Affiche les marqueurs de debug |

#### Exemples

```html
<!-- Attributs HTML -->
<h1 akyos-animation-name="textOverflow" 
    akyos-animation-from="down">
    Titre animé
</h1>
```

```javascript
// JavaScript
import { AkyosTextOverflow } from 'akyos-animation/animations/textoverflow';

new AkyosTextOverflow(element, {
    from: 'up',
    duration: 0.8,
    easing: 'power3.out'
});
```

---

### 🔹 AkyosParallax

Effet parallaxe sur les images pour créer de la profondeur.

#### Options

| Option | Type | Défaut | Description |
|--------|------|--------|-------------|
| `speed` | `number` | `1` | Vitesse de l'effet parallaxe |
| `distance` | `number` | `200` | Distance de déplacement en pixels |
| `start` | `string` | `'top bottom'` | Point de départ ScrollTrigger |
| `end` | `string` | `'bottom top'` | Point de fin ScrollTrigger |
| `markers` | `boolean` | `false` | Affiche les marqueurs de debug |

> **Note** : L'étirement de l'image pour éviter les coupures est calculé automatiquement selon `distance` et `speed`.

#### Structure HTML requise

```html
<div class="parallax-container" akyos-animation-name="parallax">
    <img src="image.jpg" alt="Description">
</div>
```

#### Exemples

```javascript
// JavaScript
import { AkyosParallax } from 'akyos-animation/animations/parallax';

new AkyosParallax(container, {
    speed: 0.5,
    distance: 300
});
```

---

### 🔹 AkyosBackground

Change la couleur de fond d'un élément (généralement le body) au scroll.

#### Options

| Option | Type | Défaut | Description |
|--------|------|--------|-------------|
| `className` | `string` | `'bg-primary'` | Classe CSS à ajouter/retirer |
| `elementToAnimate` | `HTMLElement` | `document.body` | Élément cible pour la classe |
| `start` | `string` | `'top 80%'` | Point de départ ScrollTrigger |
| `end` | `string` | `'bottom 20%'` | Point de fin ScrollTrigger |
| `markers` | `boolean` | `false` | Affiche les marqueurs de debug |

#### CSS requis

Définissez une transition CSS sur l'élément cible :

```css
body {
    transition: background-color 0.6s ease-out, color 0.6s ease-out;
}

body.bg-primary {
    background-color: #000;
    color: #fff;
}
```

#### Exemples

```html
<!-- Attributs HTML -->
<section akyos-animation-name="background" 
         akyos-animation-class-name="bg-dark">
    Contenu de la section
</section>
```

```javascript
// JavaScript
import { AkyosBackground } from 'akyos-animation/animations/background';

new AkyosBackground(element, {
    className: 'bg-dark',
    elementToAnimate: document.body
});
```

---

### 🔹 AkyosScroll

Active un défilement doux (smooth scroll) sur toute la page avec Lenis.

#### Options

| Option | Type | Défaut | Description |
|--------|------|--------|-------------|
| `lerp` | `number` | `0.1` | Lissage de la position (0-1) |
| `duration` | `number` | `0.7` | Durée de l'animation de scroll |
| `wheelMultiplier` | `number` | `0.7` | Multiplicateur de vitesse de la molette |

#### Exemple

```javascript
// JavaScript uniquement (pas d'attribut HTML)
import { AkyosScroll } from 'akyos-animation/animations/scroll';

new AkyosScroll({
    lerp: 0.1,
    duration: 0.8,
    wheelMultiplier: 0.8
});
```

---

## 🔧 AkyosAttributeLoader

Charge automatiquement les animations depuis les attributs HTML.

### Utilisation

```javascript
import { AkyosAttributeLoader } from 'akyos-animation/loader';

// Charge toutes les animations présentes dans le DOM
new AkyosAttributeLoader();
```

### Convention d'attributs

- **Nom de l'animation** : `akyos-animation-name="nomAnimation"`
- **Options** : `akyos-animation-option-name="valeur"`

Les noms d'options en **kebab-case** sont automatiquement convertis en **camelCase**.

Exemples :
- `akyos-animation-class-name` → `className`
- `akyos-animation-element-to-animate` → `elementToAnimate`

---

## 🎯 Méthodes de cycle de vie

Toutes les animations disposent d'une méthode `destroy()` pour nettoyer les ressources.

```javascript
const animation = new AkyosTranslate(element, { direction: 'left' });

// Plus tard, nettoyer l'animation
animation.destroy();
```

Utile pour les frameworks SPA (React, Vue, Svelte) lors du démontage des composants.

---

## 💡 Exemples d'intégration

### React

```jsx
import { useEffect, useRef } from 'react';
import { AkyosTranslate } from 'akyos-animation/animations/translate';

function MyComponent() {
    const elementRef = useRef(null);
    const animationRef = useRef(null);

    useEffect(() => {
        if (elementRef.current) {
            animationRef.current = new AkyosTranslate(elementRef.current, {
                direction: 'left',
                distance: 100
            });
        }

        return () => {
            animationRef.current?.destroy();
        };
    }, []);

    return <div ref={elementRef}>Contenu animé</div>;
}
```

### Vue 3

```vue
<template>
    <div ref="elementRef">Contenu animé</div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { AkyosTranslate } from 'akyos-animation/animations/translate';

const elementRef = ref(null);
let animation = null;

onMounted(() => {
    animation = new AkyosTranslate(elementRef.value, {
        direction: 'right',
        distance: 120
    });
});

onUnmounted(() => {
    animation?.destroy();
});
</script>
```

### Vanilla JS avec attributs

```html
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="path/to/akyos-animation/styles.css">
</head>
<body>
    <h1 akyos-animation-name="translate" 
        akyos-animation-direction="top" 
        akyos-animation-distance="80">
        Mon titre
    </h1>

    <script type="module">
        import { AkyosAttributeLoader, AkyosScroll } from 'akyos-animation';
        
        // Smooth scroll
        new AkyosScroll();
        
        // Active toutes les animations HTML
        new AkyosAttributeLoader();
    </script>
</body>
</html>
```

---

## 🛠️ Développement

### Installation

```bash
git clone https://github.com/akyoscommunication/akyos-animation.git
cd akyos-animation
npm install
```

### Scripts

```bash
npm run build     # Build production
npm run test      # Lance les tests
npm run docs      # Génère la documentation JSDoc
```

### Tester en local

#### Avec npm link

```bash
# Dans le dossier de la librairie
npm link

# Dans votre projet de test
npm link akyos-animation
```

#### Avec chemin relatif

```bash
# Dans votre projet de test
npm install ../akyos-animation
```

---

## 📊 Taille du bundle

Grâce au tree-shaking et aux imports optimisés :

- **Import global** : ~8-10 kB (toutes les animations)
- **Import granulaire** : ~1-2 kB par animation

### Exemple d'optimisation

```javascript
// ❌ Charge tout (10 kB)
import { AkyosTranslate } from 'akyos-animation';

// ✅ Charge uniquement Translate (1.5 kB)
import { AkyosTranslate } from 'akyos-animation/animations/translate';
```

---

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :

1. Fork le projet
2. Créer une branche (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

---

## 📝 License

Distribué sous licence **MIT**. Voir `LICENSE` pour plus d'informations.

---

## 🏢 À propos

Développé avec ❤️ par [Akyos Communication](https://akyos.com)

**Technologies utilisées** : GSAP, Lenis, TypeScript, Sass

---

## 🔗 Liens utiles

- [Documentation GSAP](https://greensock.com/docs/)
- [Documentation Lenis](https://github.com/studio-freight/lenis)
- [Site Akyos Communication](https://akyos.com)
