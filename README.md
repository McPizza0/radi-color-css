# radi-color-css

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

A simple package that contains all the Radix Colors in a single importable CSS file, tailwind config, and tailwind safelist

# how to use

modify your `tailwind.config.js` as follows:

```ts
import { radixColors, tailwindSafelist } from 'radi-color-css'

export default {
  darkMode: 'class',
  content: ['./src/**/*.{ts,tsx}'],
  // Include the safelist if Tailwind's JIT compiler dosnt show all colors unless explicitly named. This will increase your app bundle size !!!
  safelist: [
    ...tailwindSafelist
  ],
  theme: {
    // OVERRIDE the base theme completely instead of extending it
    colors: {
      ...radixColors,
    },
    // EXTEND the base theme completely instead of extending it
    extend: {
      colors: {
        ...radixColors,
      }
    }
    // ...rest of your config
  }
}
```
modify your `global.css` as follows:

```css
// import the CSS file that contains all colors
@import "radi-color-css/dist/colors.css";

@tailwind base;
@tailwind components;
@tailwind utilities;

```

## License

[MIT](./LICENSE) License © [Omar McAdam](https://github.com/mcpizza0)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/radi-color-css?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/radi-color-css
[npm-downloads-src]: https://img.shields.io/npm/dm/radi-color-css?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/radi-color-css
[bundle-src]: https://img.shields.io/bundlephobia/minzip/radi-color-css?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=radi-color-css
[license-src]: https://img.shields.io/github/license/antfu/radi-color-css.svg?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/antfu/radi-color-css/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/radi-color-css
