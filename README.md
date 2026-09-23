# GS4EVER

Site vitrine de guilde — Next.js + TypeScript + Tailwind CSS v4.

Toutes les classes de style de la page sont directement dans le JSX via Tailwind. `app/globals.css` ne contient que l'import Tailwind, le scroll smooth et le fond global.

## Lancer

```bash
npm install
npm run dev
```

Puis ouvrir http://localhost:3000.

## À personnaliser

- URL Discord : remplacer les `href="#"` concernés dans `app/page.tsx`.
- Progression / roster / recrutement : modifier les tableaux en haut de `app/page.tsx`.
- Hero : `public/hero.png`.
