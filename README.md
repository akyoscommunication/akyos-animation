# Akyos Animation

🚀 **Akyos Animation** est une librairie JavaScript et CSS légère, modulaire et performante, permettant d'ajouter des
animations fluides et personnalisables à vos projets.

## 🛆 Installation

Installez la librairie via npm ou yarn :

```sh
yarn add akyos-animation
# ou avec npm
npm install akyos-animation
```

## 🚀 Utilisation

### **1️⃣ Avec les attributs HTML ([AkyosAttributeLoader](#fonctionnalit%C3%A9s-optionnelles))**

La librairie peut être facilement utilisée en ajoutant des attributs HTML à vos éléments, sans écrire manuellement du
JavaScript:

```html
<h1 akyos-animation-name="textOverflow" akyos-animation-duration="1.2" akyos-animation-delay="0.3">
    Bonjour avec une animation !
</h1>
```

Et dans vos scripts, initialisez simplement l'AkyosAttributeLoader:

```javascript
import {AkyosAttributeLoader} from "akyos-animation";

// Initialisez le loader
new AkyosAttributeLoader();
```

### **2️⃣ Utilisation directe avec JavaScript (paramétrage par code)**

Importez la classe souhaitée et appliquez-la à votre élément HTML en passant les options suivantes:

```javascript
import {AkyosTextOverflow} from "akyos-animation";

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

| Animation            | Classe JS           | Effet                                                 |
|----------------------|---------------------|-------------------------------------------------------|
| **Text Overflow**    | `AkyosTextOverflow` | Défilement fluide du texte                            |
| **Smooth Scroll**    | `AkyosScroll`       | Animation de défilement doux                          |
| **Background Color** | `AkyosBackground`   | Animation de changement de couleur de fond            |
| **Mask**             | `AkyosMask`         | Effet d'apparition avec un masque                     |
| **Parallax**         | `AkyosParallax`     | Effet de profondeur donnant une illusion de mouvement |

| **Translate**         | `AkyosTranslate`     | Effet apparition avec translation |

## ⚙️ Options Disponibles

Les options suivantes peuvent être passées lors de l'initialisation d'une animation, que ce soit avec du JavaScript ou
via les attributs HTML `akyos-animation-*`.

| Option             | Type                                  | Valeur par défaut | Description                                                                             |
|--------------------|---------------------------------------|-------------------|-----------------------------------------------------------------------------------------|
| `duration`         | `number`                              | `0.6`             | Durée de l'animation en secondes                                                        |
| `delay`            | `number`                              | `0`               | Délai avant que l'animation ne débute (en secondes)                                     |
| `easing`           | `string`                              | `"power2.out"`    | Courbe d'accélération (`GSAP`)                                                          |
| `from`             | `"up" / "down"`                       | `"down"`          | Début de l'animation (TextOverflow)                                                     |
| `start`            | `string`                              | `"top 80%"`       | Point de départ de l'animation dans `ScrollTrigger`                                     |
| `end`              | `string`                              | `"bottom 20%"`    | Point de fin de l'animation dans `ScrollTrigger`                                        |
| `markers`          | `boolean`                             | `false`           | Affiche (ou non) des marqueurs pour déboguer les points de déclenchement de l'animation |
| `direction`        | `"top" / "bottom" / "left" / "right"` | `"top"`           | Direction de l'animation                                                                |
| `fade`             | `boolean`                             | `true`            | Effet de fade (Translate                                                                |
| `className`        | `string`                              | `null`            | Classe CSS à ajouter à l'élément (Background Color)                                     |
| `elementToAnimate` | `HTMLElement`                         | `body`            | L'élément ou mettre la couleur de fond (className) (Background Color).                  |



## ✍️ Style et SCSS

Importation du style des animations dans votre projet.

### **Import du styles**

Ajoutez le style de la librairie pour les animations dans votre fichier
SCSS:

```scss
@import "akyos-animation/styles";
```


## 🛠️ Développement Local

Pour contribuer ou tester des modifications locales:

1. Clonez le projet:

```sh
git clone https://github.com/akyoscommunication/akyos-animation.git
cd akyos-animation
```

2. Installez les dépendances:

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

## 🚧 Tester la librairie en local (sans publication)

Si vous souhaitez tester la librairie dans un projet de test sans la publier en production, deux options s'offrent à
vous :

### 1️⃣ Installation directe via un chemin local (`yarn add <path-lib>`)

Vous pouvez ajouter la librairie directement à partir de son répertoire local en utilisant la commande suivante dans le
chemin de votre projet de test :

```sh
# Depuis le projet de test :
yarn add ./akyos-animation
```

Cela ajoutera la librairie à votre projet de test en se basant sur son chemin local.

---

### 2️⃣ Utilisation d'un lien symbolique (`yarn link`)

Pour créer un lien symbolique vers la librairie, suivez les étapes ci-dessous :

1. Dans le répertoire de la librairie, exécutez la commande suivante pour créer un lien symbolique global :

```sh
# Depuis le dossier de la librairie
yarn link
```

2. Ensuite, dans votre projet de test, créez un lien vers cette librairie en exécutant :

```sh
# Depuis le dossier de votre projet de test
yarn link akyos-animation
```

Cette commande va créer un lien symbolique, permettant à votre projet de test de pointer vers la version locale de la
librairie, sans avoir besoin de la publier.

---

Ces méthodes permettent de tester facilement vos modifications locales avant de publier la librairie en production.

## 📝 À propos

**Akyos Animation** a été développé en utilisant les dernières technologies modernes comme **GSAP** et **TypeScript**,
garantissant performance et modularité.

Pour plus d'informations, visitez notre site : [Akyos Communication](https://akyos.com).

## 🐝 Licence

Cette librairie est distribuée sous la licence **MIT**. Utilisez-la librement dans vos projets!

