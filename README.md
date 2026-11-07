# Leolight — Solar Engineer Portfolio

React (Create React App) + Tailwind CSS.

```
leolight/
├── tailwind/tailwind.config.js   ← Tailwind config (colours, fonts)
├── tailwind.config.js            ← tiny file CRA needs in the root; points to the one above
├── src/styles/tailwind.css       ← Tailwind styles (colour tokens, .panels, .sun)
├── src/                          ← React: index.js, App.js, data.js, components/
└── public/index.html
```

## Run it
```bash
npm install
npm start        # opens http://localhost:3000
npm run build    # production build in /build
```

## Edit
- Content: `src/data.js`
- Layout: `src/components/`
- Colours (`--accent`): `src/styles/tailwind.css`

## Photos
Put images in `public/` and use `<img src="/name.jpg" />` where the panel-grid blocks are.
