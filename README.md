# Create VK Mini App with TypeScript [![npm][npm]][npm-url]

## How to use

### With NPX

```bash
npx @tap_team/create-vkma-ts [app-directory-name] [options]
```
[NPX](https://github.com/npm/npx) allows you to always use the **latest** version of the package without a global installation.

### With installing the package globally
Install the package globally via yarn
```bash
yarn global add @tap_team/create-vkma-ts
```
...or npm
```bash
npm install --global @tap_team/create-vkma-ts
```

and use as follows

```bash
create-vkma-ts [app-directory-name] [options]
```

This way is less recommended because you will have to update the package yourself.

### Options

#### `--help`
Prints the synopsis and a list of options

## How to start work with app

Go to created folder and run:  
`yarn start` or  `npm start` to start dev server with hot reload on `localhost:10888`.

`yarn run build` or `npm run build` to build production bundle, with tree-shaking, uglify and all this modern fancy stuff.

[npm]: https://img.shields.io/npm/v/@tap_team/create-vkma-ts.svg
[npm-url]: https://npmjs.com/package/@tap_team//create-vkma-ts
