# `@zlict/slidev-theme-zli`

[![NPM version](https://img.shields.io/npm/v/@zlict/slidev-theme-zli?color=3AB9D4&label=@zlict/slidev-theme-zli)](https://www.npmjs.com/package/@zlict/slidev-theme-zli)

Our companys theme for [Slidev](https://github.com/slidevjs/slidev).

## Use

Add the following frontmatter to your `slides.md`. Start Slidev then it will prompt you to install the theme automatically.

```text
---
theme: @zlict/slidev-theme-zli
---
```

Learn more about [how to use a theme](https://sli.dev/themes/use).

### Layouts

This theme provides the following layouts:

> TODO:

### Components

This theme provides the following components:

> TODO:

## Contribute

1. Make sure you have [Docker](https://docs.docker.com/get-docker/) up and running
1. Get [Visual Studio Code](https://code.visualstudio.com/) with [Dev Containers](https://code.visualstudio.com/docs/devcontainers/containers) ready
1. Open the project inside a Dev Container and run `pnpm install`
   - If needed for export or screenshots, install playwright dependencies with `sudo npx playwright install-deps`
1. `pnpm run dev` to start theme preview of `example.md`
1. Edit the `example.md` and style to see the changes
1. `pnpm run export` to generate the preview PDF
1. `pnpm run screenshot` to generate the preview PNG
1. Commit and push your changes or create a pull request
1. Release a new version with `pnpm run release:patch`, `pnpm run release:minor` or `pnpm run release:major`
