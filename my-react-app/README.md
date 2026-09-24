# Beibarys Arystanbekuly

A JavaScript React personal homepage with a colorful early-2000s style, responsive CSS Grid layout, and GitHub and Instagram contact links.

The app uses five components: App, ProfileName, ProfilePhoto, AboutMe, and ContactInfo.

## Run locally

From the repository root:

```sh
cd my-react-app
npm ci
npm run dev
```

## Checks

```sh
npm run lint
npm run build
```

## GitHub Pages

In the GitHub repository, open Settings > Pages and select GitHub Actions as the source.
Push the deployment workflow and Vite configuration to the main branch. The workflow
installs dependencies, runs ESLint, builds the app, and publishes the dist folder.

Site URL after a successful deployment: https://BeibarysArystanbekuly.github.io/Task-2/

Vite uses `/Task-2/` as the base path, including during local development.
