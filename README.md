# ⬡ HIVEVERSE AI

### Step Inside. Discover. Protect.

**A tiny world with an extraordinary story.** Explore a living honey-bee colony through interactive 3D, guided discoveries, and hands-on learning.

[![JavaScript](https://img.shields.io/badge/JavaScript-ES_Modules-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](dist/app.js)
[![Three.js](https://img.shields.io/badge/Three.js-0.176.0-222222?style=flat-square&logo=threedotjs)](dist/scene.js)
[![No API key required](https://img.shields.io/badge/Buzz-Local_Knowledge-EBC373?style=flat-square)](dist/buzz.js)

**[Open the private live experience](https://hiveverse-ai-sahfan.sahfanmohamed938.chatgpt.site)** · [Validation notes](VALIDATION.md)

> The hosted demo is private and may require the owner's sign-in. Clone and run the project to explore it locally.

## Explore a world within

| Experience | What you can do |
| --- | --- |
| **Enter the hive** | Travel from a procedural meadow into an animated honeycomb cutaway. |
| **Meet the colony** | Discover the queen, workers, drones, nursery, honey storage, and entrance. |
| **Cell Explorer** | Inspect eight specimens, including eggs, larvae, pupae, pollen, and royal jelly. |
| **Pollination Mission** | Guide a worker to five flowers, collect food, and return to the hive. |
| **Nectar to Honey** | Follow an eight-step educational journey from flower to capped cell. |
| **Buzz guide** | Ask bee questions and get contextual answers from a local knowledge system. |
| **Bee Quiz** | Answer ten questions with explanations and a saved best score. |
| **Explorer Journal** | Earn XP and five badges, with progress saved on your device. |

Responsive glass controls float over the 3D world. Keyboard-accessible controls, reduced-motion support, optional ambient audio, and a learning fallback for unavailable WebGL keep the experience approachable.

All runtime dependencies are vendored in `dist/vendor`; no API key or paid asset is required. Google Fonts improves typography when online; system fonts are used otherwise.

## Run

Install Node.js 22 or later, then run:

```sh
git clone https://github.com/sahfan938/hiveverse-ai.git
cd hiveverse-ai
npm start
```

Open **http://localhost:4173**. No dependency installation is needed to run the vendored browser build.

On Windows, you can also double-click `start-hiveverse.cmd` and keep its terminal open. The launcher uses a workspace-local portable Node runtime when present, or your installed Node.js otherwise.

**Do not open `dist/index.html` directly.** Browser ES modules need an HTTP server. Direct-file opening displays a recovery link and instructions.

## Validate

`npm run build` validates the production-ready static directory. `npm test` runs educational data, guide, and reward checks. No compilation step is needed for browser-native modules.

## Architecture

- `dist/scene.js`: procedural bees, instanced honeycomb, meadow, camera travel, picking and lifecycle models.
- `dist/app.js`: navigation, learning modes, mission, quiz, audio and future integration adapters.
- `dist/content.js`: educational material, sources and translation dictionaries.
- `dist/state.js`: locally saved progress and one-time XP rewards.
- `dist/buzz.js`: context-aware local knowledge provider; replace with a server endpoint for an LLM.
- `dist/style.css`: responsive glass interface and reduced-motion support.

English educational content is complete. Tamil and Sinhala have initial navigation translations and fall back to English. AR is explicitly future work. Live Hive values are labelled sample data. Buzz uses predefined local knowledge, not a connected LLM. The mission and honey journey are simplified educational simulations. Audio starts only after a user click even when a saved sound preference exists.

The skep-shaped outdoor hive is a stylized exhibit; the interior is an educational cutaway with selectable bees, brood and food stores. Procedural assets can be replaced behind the scene API with GLTF models.

## Educational sources

- [University of Arizona — Honey bee basic biology](https://extension.arizona.edu/publication/honeybee-series-honeybee-basic-biology)
- [UF/IFAS — Welcome to the hive](https://ask.ifas.ufl.edu/publication/4H419)
- [US Forest Service — Honey bees as pollinators in natural areas](https://research.fs.usda.gov/treesearch/53524)

## Dependencies and repository contents

Three.js is distributed under its [MIT license](dist/vendor/THREE-LICENSE.txt). Its notice is included alongside the vendored modules.

Application source, static assets, tests, and launch scripts are included. Downloaded development runtimes, temporary deployment archives, and local credentials are excluded from Git.

---

**Protect the pollinators. Protect our future.**
