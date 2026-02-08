# 🎬 GiftApp - Buscador de GIFs

Una aplicación web moderna para buscar, descubrir y compartir GIFs. Construida con React, TypeScript y Vite para máximo rendimiento.

## 📋 Características

- 🔍 **Búsqueda de GIFs**: Interfaz intuitiva para buscar GIFs
- 📚 **Historial de búsquedas**: Guarda tus búsquedas previas
- 💾 **Datos simulados**: Incluye una galería de GIFs precargados
- ⚡ **Rendimiento rápido**: Construido con Vite para HMR instantáneo
- 🎨 **Interfaz responsive**: Diseño adaptable a cualquier dispositivo
- 🛡️ **TypeScript**: Tipado fuerte para mayor seguridad

## 🚀 Tecnologías

- **React 19** - Librería UI declarativa
- **TypeScript** - Tipado estático para JavaScript
- **Vite 7** - Build tool ultrarrápido
- **ESLint** - Linter de código con reglas estrictas
- **React DOM** - Rendering en el DOM

## 🎯 Estructura del Proyecto

```
src/
├── components/       # Componentes principales
├── gifs/            # Componentes relacionados con GIFs
├── shared/          # Componentes reutilizables
├── mock-data/       # Datos simulados
└── main.tsx         # Punto de entrada
```

## 📦 Instalación

```bash
git clone <repository>
cd gift-app
npm install
```

## 🏃 Desarrollo

```bash
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

## 🔨 Build para producción

```bash
npm run build
```

## 📝 Scripts disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run lint` - Ejecuta ESLint
- `npm run preview` - Previsualiza la build de producción

## 🛠️ Configuración ESLint avanzada

Para una aplicación en producción, se recomienda actualizar la configuración para incluir reglas con type-aware:

```js
export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```
