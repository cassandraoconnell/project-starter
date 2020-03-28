# `project-starter`

## A Javascript project environment ready for coding with zero config.

## Setup

This project works best in [VSCode](https://code.visualstudio.com/) with the [Prettier Code Formatter extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) installed.

To use, clone this repo:

```bash
git clone git@github.com:cassandraoconnell/project-starter.git
```

In the same directory you cloned this repo, run this command (replacing `[your-project-name]` with, well, your project's name):

```bash
mv project-starter [your-project-name] && cd ./[your-project-name] && rm README.md
```

Add the following fields to 'package.json' (filled with your information):

```json
{
  "name": "",
  "version": "",
  "description": "",
  "main": "",
  "author": "",
  "license": ""
}
```

## Writing/Running Tests

All test files must be named in the format `*.test.js`. To run all tests:

```bash
npm run test
```

## Packages Included

- [**`eslint`**](https://eslint.org/) - For checking syntax and finding problems.
- [**`esm`**](https://www.npmjs.com/package/esm) - To allow project-wide module-style import/export statements.
- [**`jest`**](https://jestjs.io/) - For running tests.
- [**`prettier`**](https://prettier.io/) - For automatic code style enforcement and formatting.
