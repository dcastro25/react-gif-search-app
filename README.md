# 🎬 GIF App - React + TypeScript

Aplicación web desarrollada con **React, TypeScript y Vite** que permite buscar GIFs utilizando la API de Giphy.
Este proyecto fue creado como práctica para reforzar conceptos de arquitectura en React, consumo de APIs y tipado fuerte con TypeScript.

---

## 🚀 Demo en vivo

🔗 https://react-gif-search-app-woa6.vercel.app

---

## 🧠 Lo que demuestra este proyecto

* Manejo de estado en React
* Componentización
* Separación de responsabilidades
* Consumo de APIs externas
* Uso de funciones asíncronas
* Tipado de respuestas de API con TypeScript
* Organización modular del código
* Deploy en producción con Vercel

---

## 🏗️ Estructura del proyecto

```
src/
│
├── components/
│   └── GifsApp.tsx
│
├── gifs/
│   ├── actions/
│   │   └── get-gifs-by-query.ts
│   │
│   ├── api/
│   │   └── giphy.api.ts
│   │
│   ├── interface/
│   │   ├── gif.interface.ts
│   │   └── giphy.response.ts
│   │
│   ├── components/
│   │   ├── GifList.tsx
│   │   └── PreviousSearches.tsx
│   │
│   └── mock-data/
│       └── mocks-data.ts
│
├── shared/
│   ├── CustomHeader.tsx
│   └── CustomSearches.tsx
│
└── main.tsx
```

La estructura está organizada por dominio (`gifs/`) y responsabilidades (`actions`, `api`, `interface`, `components`), siguiendo una arquitectura escalable.

---

## 🛠️ Tecnologías utilizadas

* React
* TypeScript
* Vite
* Fetch API
* CSS
* Giphy API

---

## ⚙️ Instalación

Clonar el repositorio:

```bash
git clone https://github.com/dcastro25/react-gif-search-app
```

Entrar en la carpeta:

```bash
cd react-gif-search-app
```

Instalar dependencias:

```bash
npm install
```

Ejecutar en desarrollo:

```bash
npm run dev
```

---

## 🌎 Variables de entorno

El proyecto usa un archivo `.env` para la API Key de Giphy.

Ejemplo:

```
VITE_GIPHY_API_KEY=tu_api_key
```

El archivo `.env.template` está incluido como referencia.

---

## 📦 Deploy

La aplicación está desplegada en producción usando Vercel y se conecta automáticamente al repositorio de GitHub.

---

## 👨‍💻 Autor

Oscar Castro
Frontend Developer en formación

GitHub: https://github.com/dcastro25

---

## 📌 Nota

Este proyecto forma parte de mi proceso de aprendizaje y práctica en desarrollo Frontend moderno.
