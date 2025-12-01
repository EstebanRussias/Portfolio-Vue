# portfolio

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd) 
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

## Couleurs Tailwind personnalisées

Ce projet utilise Tailwind CSS et contient trois couleurs personnalisées exposées dans `tailwind.config.cjs` :

- `primary` (par défaut `#4f46e5`)
- `secondary` (par défaut `#0ea5e9`)
- `success` (par défaut `#10b981`)

Exemples d'utilisation dans vos composants :

```html
<button class="bg-primary text-white px-4 py-2 rounded">Action principale</button>
<span class="text-secondary">Texte secondaire</span>
<div class="bg-success text-white px-3 py-1 rounded">Succès</div>
```

Pour modifier les valeurs, éditez `tailwind.config.cjs` à la racine et relancez le serveur de dev.
