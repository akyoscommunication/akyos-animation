# Akyos Animation

🚀 **Akyos Animation** est une librairie JavaScript et CSS légère, modulaire et performante, permettant d'ajouter des animations fluides et personnalisables à vos projets.

## 📦 Installation

Installez la librairie via npm ou yarn :

```sh
yarn add akyos-animation
# ou avec npm
npm install akyos-animation
```

---

## 🚀 Utilisation

### 1️⃣ **Avec JavaScript (paramétrage par code)**

Importez la classe souhaitée et appliquez-la à votre élément HTML en passant les options :

```javascript
import { AkyosTextOverflow } from "akyos-animation";
import "akyos-animation/dist/styles.css"; // Import des styles

// Sélectionnez l'élément à animer
const element = document.querySelector(".my-element");

// Initialisez une animation
const animation = new AkyosTextOverflow(element, {
  duration: 0.5,     // Durée : 0.5s
  delay: 0.2,        // Délai : 0.2s
  easing: "power2.out", // Courbe d'accélération
  from: "up",        // Direction : 'up'
});
```

---

### 2️⃣ **Avec SCSS (pour personnalisation supplémentaire)**

La librairie inclut un fichier CSS précompilé que vous pouvez inclure directement dans votre projet ou via un fichier SCSS pour ajuster les styles.

Importez simplement les styles CSS dans votre projet SCSS comme suit :

```scss
@import "akyos-animation/dist/styles.css";
// soit
@import "akyos-animation/styles";
```

Vous pouvez surcharger les styles si besoin :
```scss
.akyos-animation-text-overflow {
  font-size: 2rem;
  color: red !important;
}
```

---

## 🎭 Animations Disponibles

Voici les animations actuellement supportées par la librairie, avec leur configuration classique :

| Animation         | Classe JS           | Exemple de Style ou Effet                   |
|-------------------|---------------------|---------------------------------------------|
| **Text Overflow** | `AkyosTextOverflow` | Défilement vertical doux et fluide du texte |
| **Smooth Scroll** | `AkyosScroll`       | Vitesse de défilement de la page            |

---

## ⚙️ Options Disponibles

| Option     | Type                   | Valeur par défaut | Description |
|------------|------------------------|-------------------|-------------|
| `duration`  | `number`               | `0.6`             | Durée de l'animation (en secondes) |
| `delay`     | `number`               | `0`               | Délai avant le début de l'animation |
| `easing`    | `string`               | `"power2.out"`    | Type d'accélération de l'animation (librairie `GSAP`) |
| `from`      | `"up" / "down"`         | `"down"`          | Direction de l'animation |
| `start`     | `string`               | `"top 80%"`       | Point de départ de l'animation (avec `ScrollTrigger`) |

👉 Ces options peuvent être ajustées lors de l'initialisation de chaque classe, directement dans votre code JavaScript.

---

### 🛠️ Développement Local

Si vous souhaitez contribuer ou tester le projet localement, voici les étapes à suivre :

1. Clonez le projet :
   ```sh
   git clone https://github.com/akyoscommunication/akyos-animation.git
   cd akyos-animation
   ```

2. Installez les dépendances :
   ```sh
   npm install
   ```

3. Lancez le build :
   ```sh
   npm run build
   ```

4. Testez les fichiers compilés dans un projet local :
   ```sh
   npm link
   ```

---

## 📁 Structure du projet

Ci-dessous la structure globale après compilation :
```
/src
  /animations
    AkyosTextOverflow.ts  # Classe principale pour les animations textuelles
    AkyosScroll.ts        # Classe principale pour les animations de défilement
  /assets
    main.scss             # Fichier SCSS avec les styles de base
  index.ts               # Point d'entrée principal pour les exports
/dist
  styles.css             # Fichier CSS précompilé
  index.js               # Fichier ESModule
  index.cjs              # Fichier CommonJS
  index.d.ts             # Fichier de types TypeScript
```

---

## 📝 À propos

**Akyos Animation** a été développé avec des outils modernes comme **GSAP** et TypeScript.

Pour plus d'informations, visitez notre site : [Akyos Communication](https://akyos.com).

---

## 🐝 Licence

Distribué sous la licence **MIT** – À utiliser dans vos projets librement et à améliorer si vous le souhaitez !

