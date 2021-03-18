# README

> A Vue.js Project with Webapck, Eslint(airbnb rules), Less integration

## Prerequisites

- Node v8.3.0 +
- NPM v5.6.0 +

### Technologies

The client side application is comprised of the following technologies:

#### For generating Static Markup

- [Vue.js](https://vuejs.org)
  Vue is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects.

#### HTML, CSS and JavaScript

- LESS - Less (which stands for Leaner Style Sheets) is a backwards-compatible language extension for CSS. This is the official documentation for Less, the language and Less.js, the JavaScript tool that converts your Less styles to CSS styles. (http://lesscss.org/)

#### Build Tools, Transpiler & Package Manager

- [Babel](https://babeljs.io/)
- [Webpack](https://webpack.js.org/)
- [NPM](https://www.npmjs.com/)

### Developer Tools

#### [VS Code](https://code.visualstudio.com/)

Visual Studio Code is a free code editor redefined and optimized for building and debugging modern web and cloud applications.

##### VS Code - User Preference

```json
{
  "editor.formatOnSave": true,
  "[handlebars]": {
    "editor.formatOnSave": true
  },
  "editor.renderWhitespace": "all",
  "prettier.singleQuote": true,
  "prettier.trailingComma": "all",
  "prettier.arrowParens": "always",
  "workbench.editor.enablePreview": false,
  "prettier.eslintIntegration": true,
  "window.zoomLevel": 1
}
```

##### VS Code Plugins

- [Editor Config](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [JavaScript ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [SASS linter](https://marketplace.visualstudio.com/items?itemName=glen-84.sass-lint)

### Getting Started - Code & Environment - Setup

- Go to the root folder (where package.json is available) and run the following command:s

```bash
$ npm install
```

- run below command to start the server:

For Mac/Windows

```bash
$ npm start
```

# build for production with minification

npm run build

# end point changes

- currently the endpoint (under ./src/endpoint.js) is reffering to heroku hosted app. It needs to be updated to localhost:port if the express server is run locally.
