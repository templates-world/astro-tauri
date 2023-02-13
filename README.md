# Astro w/ Tauri 

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
├── src-tauri/
│   ├── icons/
│   ├── src/
│   │   └── main.rs
│   ├── tauri-conf.json/
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

All Tauri files are in the `src-tauri/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Installs dependencies                        |
| `npm run dev`     | Starts local dev server at `localhost:3000`  |
| `npm run build`   | Build your production site to `./dist/`      |
| `npm run preview` | Preview your build locally, before deploying |
| `npx tauri dev`   | Start the windows dev                        |
| `npx tauri build` | Build the project                            |

## 👀 Want to learn more?

Feel free to check [the Astro documentation](https://docs.astro.build) and [the Tauri documentation](https://tauri.app/v1/guides/).
