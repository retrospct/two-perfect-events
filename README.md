<p align="center">
  <a href="https://two-perfect-events.netlify.app">
    <img alt="Two Perfect Events & Weddings Logo" src="src/images/favicon-11.png" width="60" />
  </a>
</p>
<h1 align="center">
  Two Perfect Events Website
</h1>

Two Perfect Events & Weddings website code made with GatsbyJs, Netlify, and DatoCMS.

## 🔮 [!View Latest Preview >>](https://twoperfectevents.netlify.app)

[![Netlify Status](https://api.netlify.com/api/v1/badges/5bfd9d5d-f369-4ad7-9844-0bad775c0748/deploy-status)](https://app.netlify.com/sites/twoperfectevents/deploys)

## ✅ To Do

- [x] Update all packages to the latest and test for issues
- [x] Setup with [Gatsby Cloud Dashboard](https://www.gatsbyjs.com/dashboard/dd5c1421-6cb6-4c8c-9301-d7c8041b380f/sites/c807d07f-2635-4af7-9dde-116e635cf403/production)
- [x] Setup with DatoCMS - [TPE DatoCMS Admin](https://tpe.admin.datocms.com/editor)
- [x] Setup with Netlify Hosting - [TPE Netlify Admin](https://app.netlify.com/sites/twoperfectevents/overview)
- [ ] Setup pre-commit hooks again via husky, prettier, & eslint
- [ ] gatsby-plugin-react-axe ??
- [ ] gatsby-plugin-svg-sprite ??
- [ ] gatsby-plugin-svgr ??
- [ ] Remove and clean up all unneeded code, packages, and tooling
- [ ] [gatsby-plugin-google-tagmanager](https://www.gatsbyjs.org/packages/gatsby-plugin-google-tagmanager/)
- [ ] [gatsby-plugin-facebook-pixel](https://www.gatsbyjs.org/packages/gatsby-plugin-facebook-pixel)
- [ ] \(TBD) [gatsby-plugin-google-analytics]
- [ ] \(TBD) [gatsby-plugin-robots-txt]
- [ ] \(TBD) [gatsby-plugin-sitemap]
- [ ] Configure GitHub Actions to handle CI/CD tests on a master or stage branch?
- [ ] Write more robust unit tests for all components and custom hook
- [ ] Possibly add support for MDX and markdown
- [ ] Add more Storybook add-ons with more component demos
- [ ] Add a **Contributing** section to README
- [ ] ???

## Theme

[Gatsby-theme-portfolio](https://github.com/smakosh/gatsby-theme-portfolio)

## Features

- Eslint/Prettier configured
- Scores 100% on a11y / Performance / PWA / SEO
- PWA (desktop & mobile)
- Easy to customize
- Nice project structure
- Amazing illustrations by [Undraw.co](https://undraw.co)
- Tablet & mobile friendly
- Continuous deployment with [Vercel](https://vercel.co/?utm_source=smakosh)
- Or with Netlify, check [Netlify branch](https://github.com/smakosh/gatsby-portfolio-dev/tree/netlify)
- A contact form protected by Google Recaptcha
- Can be deployed with one click
- Functional components with ~~Recompose~~ React Hooks! ~~ready to migrate to React hooks!~~
- Fetches your Github pinned projects with most stars (You could customize this if you wish)

## 🚀 DatoCMS Integration [>>](https://tpe.admin.datocms.com/editor)

- [gatsby-source-datocms](https://www.gatsbyjs.org/packages/gatsby-source-datocms/) and dependency for [gatsby-transformer-remark](https://www.gatsbyjs.org/packages/gatsby-transformer-remark/) were added along with some of the gatsby-starter-datocms code which is suffixed with \*-cms.js.
- None of the sass styling and packages were installed for this code so it will be unstyled. The content is being pulled from our DatoCMS project though.

## Project Structure

```bash
.
├── data
│   └── config              # SEO related tags
├── src
│   └── assets              # Assets
│   │   │── icons             # icons
│   │   │── illustrations     # illustrations from (undraw.co)
│   │   └── thumbnail         # cover of your website when it's shared to social media
│   ├── components          # Components
│   │   │── common            # Common components
│   │   │── landing           # Components used on the landing page
│   │   └── theme             # Header & Footer
│   └── pages               # Pages
└── static                  # favicon & Netlify redirects
```

## 👾 Install

You will need to have `node` and `yarn` installed.

You can use `npx` (recommended) or install the `gatsby-cli` globally.

Clone and install the project:

```sh
git clone git@github.com:retrospct/two-perfect-events.git
cd two-perfect-events
yarn
```

## 🛸 Contribute

> This section is a WIP

This project uses concepts from [Git Flow](https://nvie.com/posts/a-successful-git-branching-model/) and [GitHub Flow](https://guides.github.com/introduction/flow/) for branching. I recommend going through the GitHub Flow link first and then skimming the branching portions of the Git Flow article. It's not much reading overall, shouldn't take too much time.

## ⚡️ Develop

To start the development servers:

```sh
yarn develop
```

If all was successful, you should see links to two development servers in the Node terminal. You can open these url in any browser that you would like.

- [http://localhost:8080](http://localhost:8080):

This is the development server that allows you to preview your website. It comes with hot-module reloading, which means that you should see your changes almost immediately without having to refresh the browser tab.

- [http://localhost:8000/\_\_\_graphql](http://localhost:8000/___graphql):

This is the development server that allows you to interact with the your site's GraphQL data via the GraphiQL IDE.

## 🤖 Available Scripts

| Script            | Description                                                   |
| ----------------- | :------------------------------------------------------------ |
| `develop`         | Start the development server with hot module reloading.       |
| `dev`             | Alias for `develop`.                                          |
| `format`          | Format your code with Prettier.                               |
| `clean`           | Delete the `.cache` and `public` directories.                 |
| `test`            | Run your Jest tests once.                                     |
| `test:watch`      | Run your Jest tests in watch mode.                            |
| `lint`            | Lint your code with ESLint.                                   |
| `lint:watch`      | Lint your code with ESLint in watch mode.                     |
| `lint:fix`        | Lint your code with ESLint and attempt to fix linting issues. |
| `serve`           | Serve the production build of your site for testing.          |
| `build`           | Compile your application and make it ready for deployment     |
| `storybook`       | Starts Storybook.                                             |
| `build-storybook` | Compiles your stories and makes them ready for deployment.    |

## 😎 Styling

This library is pre-configured with [styled-components](https://www.styled-components.com/).

### Global Styles

Global styles are defined in the `src/styles/global-styles.tsx` file using the `createGlobalStyle` function provided by styled-components. The global styles are injected in the `Layout` component via the component that is provided from the `createGlobalStyle` function.

The global style also includes the styles from [css-modern-reset](https://github.com/hankchizljaw/modern-css-reset), which aims to provide a sensible reset of browser styles.

### Theme

You can define your theme styles in the `/src/styles/theme` file. The theme will be available in any styled-component via `props.theme` and to any other component via the `useTheme` hook.

### Handling Media Queries

The theme utilizes the [use-media](https://github.com/streamich/use-media) library, which allows you to track the state of a CSS media queries. This works by passing a boolean for each screen size that you defined in your theme. Just define your screen sizes in `src/styles/theme`.

### Styling Examples

**`src/pages/about.tsx` includes various examples (with comments) of using styled-components and framer-motion with the theme provider.**

### The CSS Prop

This starter is also preconfigured to work with the `css` prop:

```jsx
import styled from 'styled-components'

const MyComponent = () => (
  <div>
    <h1
      css={`
        color: #333;
      `}
    >
      Hello World!
    </h1>
  </div>
)
```

_Note: The `css` prop does not play nicely with the `jsx-no-multiline-js` ESLint rule. You may want to disable the rule if you plan on using the `css` prop. This can be done in the `.eslintrc.js` file._

I personally do not use the `css` prop and prefer to define styled-components outside of the component definition. My general rule is if the component that is using a styled-component is the only component that uses it, I define the styled-component in the same file. Otherwise, I will move it out to a `components/common` directory.

```tsx
import styled from 'styled-components'

const Heading = styled.h1`
  color: #333;
`

const MyComponent = () => (
  <div>
    <Heading>Hello World!</Heading>
  </div>
)
```

## 🐞 CSS Debugger

This starter also includes a `CSSDebugger` component. This component allows you to easily debug your styles by drawing outlines around all elements and applying a grid in the background. It also includes a toggle button that you can optionally use during debugging.

**_Note: You can drag the toggle button around if it gets in your way._**

The `CSSDebugger` component is used in the `layout.tsx` component.

<img src="https://res.cloudinary.com/gojutin/image/upload/v1568660140/gatsby-starter-typescript-deluxe/css-debugger.gif" alt="GIF of css debugger" style="max-width: 100%;" />

## 🌟 Linting

This project includes a combination of ESLint, TSLint, and React-A11y rules for React and TypeScript code, which are extended from the [eslint-config-gojutin](https://github.com/gojutin/eslint-config-gojutin) npm package. Many of the rules favor a functional approach with a strong emphasis on immutability and strong type definitions. Since all of the rules and dependencies are included in this package, you can easily remove it if you prefer to wire up your own linting configuration.

The rules are listed as key/value pairs. The key represents the rule name and the value (number) represents the setting of the rule:

|     |       |
| --- | :---- |
| `0` | off   |
| `1` | warn  |
| `2` | error |

Here is an example of a rule:

```js
"immutable/no-this": 2
```

This particular rule disallows the use of the `this` keyword, which will result in an error.

## 📕 Storybook

Storybook is available by creating stories in the `src/stories` directory and running the `yarn storybook` script. Your storybook will be availble at [http://localhost:6006](http://localhost:6006).

You can also compile a production build of your Storybook by running `yarn build:storybook`. The compiled production build will be located in a `/storybook-static` directory.

## 🕹 Testing

> This section is a WIP, tests will be enforced via GitHub Actions but tooling should be used in development. Will add more info later.

Lint your files and fix all linting issues.

```sh
yarn lint
```

Run your test suite and fix any broken tests.

```sh
yarn test
```

## 💫 Deploy

> This section is a WIP. CI/CD pipeline not fully configured but the basics are already setup for deploy.

- [ ] Automate and enforce linting, best practices, styling, and tests with GitHub Actions
- [ ] Document the deployment pipeline
- [ ] Setup the remaining deployment pipeline

> ex: **feature\_\*** or **fix\_\*** (_merge_) > **develop** (_PR, preview generated_) > _\*not setup yet\*_ **stage** (_PR, deploy to prod once approved_) > **master** (_prod_)

## 👀 Lighthouse Audit Score

<img src="https://res.cloudinary.com/gojutin/image/upload/v1568660306/gatsby-starter-typescript-deluxe/gatsby-starter-typescript-deluxe-lighthouse-audit.gif" style="max-width: 100%;" alt="Lighthouse Score" />

## ❤️ Credits

Built with [Gatsby](https://www.gatsbyjs.org/) - the blazing-fast static site generator for [React](https://facebook.github.io/react/).

Project scaffolded from [Gatsby Starter Typescript Deluxe](https://github.com/gojutin/gatsby-starter-typescript-deluxe).

---

That's about it. Now, build something awesome 😀

This repo contains a static website written with [GatsbyJS](https://www.gatsbyjs.org/), integrated with content coming from [DatoCMS](https://www.datocms.com).

![Preview](preview.png)

[See the live demo](https://demo-datocms-gatsby.netlify.com/)

If you want to use try this out yourself, you first need to set up a project on DatoCMS which will host your data.

You can [sign up for a free account](https://dashboard.datocms.com/signup) and then you can simply click this button:

[![Deploy with DatoCMS](https://dashboard.datocms.com/deploy/button.svg)](https://dashboard.datocms.com/projects/new-from-template/static-website/gatsby-portfolio)

## Repo usage

First, install the dependencies of this project:

```shell
yarn install
```

Add an `.env` file containing the read-only API token of your DatoCMS site:

```shell
echo 'DATO_API_TOKEN=abc123' >> .env
```

Then, to run this website in development mode (with live-reload):

```shell
yarn develop
```

To build the final, production ready static website:

```shell
yarn build
```

The final result will be saved in the `public` directory.

## About

The goal of this project is to show how easily you can create static sites using the content (text, images, links, etc.) stored on [DatoCMS](https://www.datocms.com). This project is configured to fetch data from a specific administrative area using [the API DatoCMS provides](https://www.datocms.com/docs/content-management-api).

You can find further information about how to integrate DatoCMS with Gatsby in [our documentation](https://www.datocms.com/docs/static-generators/gatsbyjs).

This websites uses:

- [Yarn](https://yarnpkg.com/) as package manager;
- [GatsbyJS](https://github.com/gatsbyjs/gatsby) as website generator;
- [gatsby-source-datocms](https://github.com/datocms/gatsby-source-datocms) to integrate the website with DatoCMS.

## 🗒️ Starter Features - [gatsby-starter-typescript-deluxe](https://github.com/gojutin/gatsby-starter-typescript-deluxe)

- [x] TypeScript for type-safe code.
- [x] Styled-Components for all your styles.
- [x] modern-css-reset for a reset of sensible default styles.
- [x] Framer Motion for awesome animations.
- [x] gatsby-image and gatsby-transformer-sharp for optimized images.
- [x] gatsby-plugin-manifest / SEO component for an SEO-friendly PWA.
- [x] Storybook with add-ons for showing off your awesome components.
- [x] Jest and React Testing library for snapshots and unit tests.
- [x] ESLint (with TSLint and Prettier) to make your code look its best.
- [x] React Axe and React A11y for accessibility so that your site is awesome for everyone.
