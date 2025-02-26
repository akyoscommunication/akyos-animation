# Akyos Animation

🚀 **Akyos Animation** est une librairie JavaScript légère et modulaire permettant d'ajouter facilement des animations fluides et performantes via des classes ou des attributs HTML.

## 📦 Installation

```sh
yarn add akyos-animation
# ou avec npm
npm install akyos-animation
```

## 🚀 Utilisation

### 1️⃣ **Avec JavaScript (via classes)**

```ts
import { AkyosTextOverflow, AkyosWipe, AkyosMask } from "akyos-animation";

// Initialisation d'une animation
const animation = new AkyosTextOverflow(document.querySelector(".my-element"), {
  duration: 0.5,
  delay: 0.2,
  easing: "power2.out",
  from: "up",
});
```

### 2️⃣ **Avec les attributs HTML**

Ajoutez simplement des attributs `akyos-animation-*` à vos éléments :

```html
<div
  akyos-animation-name="textOverflow"
  akyos-animation-duration="0.5"
  akyos-animation-delay="0.2"
>
  Mon texte animé
</div>
```

Puis initialisez la détection automatique des animations :

```ts
import AkyosInitializer from "akyos-animation";

document.addEventListener("DOMContentLoaded", () => {
  new AkyosInitializer().init();
});
```

## 🎭 Animations Disponibles

| Animation         | Classe JS            | Attribut HTML `akyos-animation-name` |
|------------------|---------------------|-------------------------------------|
| **Text Overflow** | `AkyosTextOverflow` | `textOverflow` |
| **Wipe**         | `AkyosWipe`         | `wipe`         |
| **Mask**         | `AkyosMask`         | `mask`         |

## ⚙️ Options Disponibles

Les options peuvent être passées en objet lors de l'instanciation en JS ou via des attributs HTML.

| Option     | Type      | Valeur par défaut | Description |
|-----------|----------|-----------------|-------------|
| `duration` | `number`  | `1`             | Durée de l'animation en secondes |
| `delay`    | `number`  | `0`             | Délai avant le début de l'animation |
| `easing`   | `string`  | `"power2.out"`  | Courbe d'accélération |
| `from`     | `"up" / "down"` | `"up"` | Direction d'apparition du texte (uniquement pour `textOverflow`) |
| `start`    | `string`  | `"top"`         | Position de déclenchement (utilisé avec le scroll) |
| `end`      | `string`  | `"bottom"`      | Position de fin de l'animation |

## 🛠️ Configuration Avancée

### 📌 Désactiver les logs en production
Les `console.log` sont supprimés automatiquement lors du build en production pour des performances optimales.

### 🏠 Structure du projet

```
/src
  /animations
    AkyosTextOverflow.ts
    AkyosWipe.ts
    AkyosMask.ts
    index.ts
  /assets
    main.scss
  AkyosInitializer.ts
/dist
  akyos-animation.js
  akyos-animation.css
  akyos-animation.d.ts
```

## 🛠️ Développement

```sh
# Cloner le repo
git clone https://github.com/ton-github/akyos-animation.git
cd akyos-animation

# Installer les dépendances
yarn install

# Lancer le build
yarn build

# Tester localement
yarn link
```

## 🐝 Licence

MIT © [Kévin Groux / Akyos](https://akyos.com)

