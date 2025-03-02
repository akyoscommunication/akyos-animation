# Akyos Animation
🚀 **Akyos Animation** est une librairie JavaScript et CSS légère, modulaire et performante, permettant d'ajouter des animations fluides et personnalisables à vos projets.

## 🛆 Installation
Installez la librairie via npm ou yarn :

```sh
yarn add akyos-animation
# ou avec npm
npm install akyos-animation
```

## 🚀 Utilisation

### **1️⃣ Avec les attributs HTML ([AkyosAttributeLoader](#fonctionnalit%C3%A9s-optionnelles))**
La librairie peut être facilement utilisée en ajoutant des attributs HTML à vos éléments, sans écrire manuellement du JavaScript :

```html
<h1 akyos-animation-name="textOverflow" akyos-animation-duration="1.2" akyos-animation-delay="0.3">
  Bonjour avec une animation !
</h1>
```

Et dans vos scripts, initialisez simplement l'AkyosAttributeLoader :

```javascript
import { AkyosAttributeLoader } from "akyos-animation";

// Initialisez le loader
new AkyosAttributeLoader();
```

### **2️⃣ Utilisation directe avec JavaScript (paramétrage par code)**
Importez la classe souhaitée et appliquez-la à votre élément HTML en passant les options suivantes :

```javascript
import { AkyosTextOverflow } from "akyos-animation";

// Sélectionnez l'élément à animer
const element = document.querySelector(".my-element");

// Initialisez une animation
const animation = new AkyosTextOverflow(element, {
  duration: 0.8,       // Durée de l'animation : 0.8s
  delay: 0.2,          // Délai avant de commencer : 0.2s
  easing: "power2.out" // Courbe d'accélération
});
```

## 🎭 Liste des Animations Disponibles

| Animation       | Classe JS         | Effet                            |
| -------------- | ---------------- | -------------------------------- |
| **Text Overflow** | `AkyosTextOverflow` | Défilement fluide du texte   |
| **Smooth Scroll** | `AkyosScroll` | Animation de défilement doux |

## ⚙️ Options Disponibles
Les options suivantes peuvent être passées lors de l'initialisation d'une animation, que ce soit avec du JavaScript ou via les attributs HTML `akyos-animation-*`.

| Option     | Type         | Valeur par défaut | Description |
| ---------- | ----------- | ---------------- | ----------- |
| `duration` | `number`    | `0.6`            | Durée de l'animation en secondes |
| `delay`    | `number`    | `0`              | Délai avant que l'animation ne débute (en secondes) |
| `easing`   | `string`    | `"power2.out"`   | Courbe d'accélération (`GSAP`) |
| `from`     | `"up" / "down"` | `"down"`    | Direction de l'animation |
| `start`    | `string`    | `"top 80%"`      | Point de départ de l'animation dans `ScrollTrigger` |
| `markers`  | `boolean`   | `false`          | Affiche (ou non) des marqueurs pour déboguer les points de déclenchement de l'animation |

## 🌟 Utilisation avec les attributs HTML
Pour simplifier l'intégration dans vos projets, vous pouvez utiliser des attributs HTML sur les éléments que vous souhaitez animer.

### Exemple :

```html
<h1 akyos-animation-name="textOverflow" akyos-animation-duration="1.5" akyos-animation-delay="0.3">
  Bonjour Monde !
</h1>
<div akyos-animation-name="textOverflow" akyos-animation-duration="2" akyos-animation-markers="true">
  Une animation avec des marqueurs activés.
</div>
```

L'attribut `akyos-animation-*` permet de passer directement les options, et l'animation sera appliquée dynamiquement via `AkyosAttributeLoader` :

```javascript
import { AkyosAttributeLoader } from "akyos-animation";

new AkyosAttributeLoader(); // Initialise automatiquement les animations identifiées grâce aux attributs
```

## 📁 Fonctionnalités optionnelles

### **AkyosAttributeLoader**
Le `AkyosAttributeLoader` est une solution clé en main pour appliquer les animations en fonction des attributs HTML. Les paramètres des animations peuvent être définis dans vos templates/descriptions HTML grâce aux propriétés suivantes :

| Attribut HTML              | Description |
| ------------------------- | ----------- |
| `akyos-animation-name`   | Nom de l'animation (ex. : `textOverflow`) |
| `akyos-animation-duration` | Durée de l'animation (en secondes) |
| `akyos-animation-delay`   | Délai avant le début de l'animation (en secondes) |
| `akyos-animation-markers` | Active les marqueurs visuels (utile pour déboguer) |

Cela vous permet d'éliminer toute logique JavaScript répétitive.

## ✍️ Style et SCSS
Importation du style des animations et personnaliser les animations avec vos 
propres styles.

### **Import du styles**
Ajoutez le style de la librairie pour les animations dans votre fichier 
SCSS :

```scss
@import "akyos-animation/styles";
```

Vous pouvez également surcharger les classes avec vos propres 
style :

```scss
.akyos-animation-text-overflow {
  font-size: 2rem;
  color: blue;
}
```

## 🛠️ Développement Local
Pour contribuer ou tester des modifications locales :

1. Clonez le projet :

```sh
git clone https://github.com/akyoscommunication/akyos-animation.git
cd akyos-animation
```

2. Installez les dépendances :

```sh
yarn install
```

3. Lancez le développement en mode `watch` :

```sh
yarn dev
```

4. Pour livrer un build de production :

```sh
yarn build
```

## 📝 À propos
**Akyos Animation** a été développé en utilisant les dernières technologies modernes comme **GSAP** et **TypeScript**, garantissant performance et modularité.

Pour plus d'informations, visitez notre site : [Akyos Communication](https://akyos.com).

## 🐝 Licence
Cette librairie est distribuée sous la licence **MIT**. Utilisez-la librement dans vos projets !

