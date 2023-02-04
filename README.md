# Create VK Mini App with TypeScript [![npm][npm]][npm-url] [![License: MIT][mit]][mit-url]
### Zero-config CLI generator for TypeScript VK mini app development.

![there should have been a demo gif here](readme/demo.gif)

## How to use

### With NPX

```bash
npx @tap_team/create-vkma-ts@latest
```

## How to start work with app

Go to created folder and run:  
`yarn start` or `npm start` to start dev server with hot reload on `localhost:10888`.

`yarn run build` or `npm run build` to build production bundle, with tree-shaking, uglify and all this modern fancy stuff.


## Generated project dependencies

| Dependencies                  | Version |          Is Dev          |         Optional         |
|:------------------------------|:-------:|:------------------------:|:------------------------:|
| @types/jest                   | 29.2.4  | <ul><li>- [ ] </li></ul> | <ul><li>- [ ] </li></ul> |
| @types/node                   | 17.0.45 | <ul><li>- [ ] </li></ul> | <ul><li>- [ ] </li></ul> |
| @types/react                  | 17.0.52 | <ul><li>- [ ] </li></ul> | <ul><li>- [ ] </li></ul> |
| @types/react-dom              | 17.0.18 | <ul><li>- [ ] </li></ul> | <ul><li>- [ ] </li></ul> |
| @vitejs/plugin-react          | ^3.0.0  | <ul><li>- [ ] </li></ul> | <ul><li>- [ ] </li></ul> |
| @vkontakte/icons              | 2.14.0  | <ul><li>- [ ] </li></ul> | <ul><li>- [ ] </li></ul> |
| @vkontakte/vk-bridge          |  2.7.2  | <ul><li>- [ ] </li></ul> | <ul><li>- [ ] </li></ul> |
| @vkontakte/vk-miniapps-deploy | 0.0.26  | <ul><li>- [ ] </li></ul> | <ul><li>- [ ] </li></ul> |
| @vkontakte/vkjs               | 0.31.0  | <ul><li>- [ ] </li></ul> | <ul><li>- [ ] </li></ul> |
| @vkontakte/vkui               |  5.1.0  | <ul><li>- [ ] </li></ul> | <ul><li>- [ ] </li></ul> |
| react                         | ^17.0.0 | <ul><li>- [ ] </li></ul> | <ul><li>- [ ] </li></ul> |
| react-dom                     | ^17.0.0 | <ul><li>- [ ] </li></ul> | <ul><li>- [ ] </li></ul> |
| rollup                        | ^3.7.5  | <ul><li>- [ ] </li></ul> | <ul><li>- [ ] </li></ul> |
| vite                          | ^4.0.2  | <ul><li>- [ ] </li></ul> | <ul><li>- [ ] </li></ul> |
| vite-plugin-singlefile        | ^0.13.2 | <ul><li>- [ ] </li></ul> | <ul><li>- [ ] </li></ul> |
| recoil                        |  0.7.6  | <ul><li>- [ ] </li></ul> | <ul><li>- [x] </li></ul> |
| @happysanta/router            |  0.3.1  | <ul><li>- [ ] </li></ul> | <ul><li>- [x] </li></ul> |
| @happysanta/bridge-plus       | 0.0.24  | <ul><li>- [ ] </li></ul> | <ul><li>- [x] </li></ul> |
| @babel/eslint-parser          | ^7.18.9 | <ul><li>- [x] </li></ul> | <ul><li>- [ ] </li></ul> |
| @babel/preset-react           | ^7.18.6 | <ul><li>- [x] </li></ul> | <ul><li>- [ ] </li></ul> |
| cross-env                     | ^7.0.3  | <ul><li>- [x] </li></ul> | <ul><li>- [ ] </li></ul> |
| react-hot-loader              | ^4.13.0 | <ul><li>- [x] </li></ul> | <ul><li>- [ ] </li></ul> |
| typescript                    | ^4.8.3  | <ul><li>- [x] </li></ul> | <ul><li>- [ ] </li></ul> |
| react-scripts                 | ^4.0.3  | <ul><li>- [x] </li></ul> | <ul><li>- [x] </li></ul> |
| eruda                         |  2.8.3  | <ul><li>- [x] </li></ul> | <ul><li>- [x] </li></ul> |
| eruda-dom                     |  2.0.0  | <ul><li>- [x] </li></ul> | <ul><li>- [x] </li></ul> |
| husky                         | ^8.0.3  | <ul><li>- [x] </li></ul> | <ul><li>- [x] </li></ul> |
| lint-staged                   | ^13.1.0 | <ul><li>- [x] </li></ul> | <ul><li>- [x] </li></ul> |
| prettier                      | ^2.8.3  | <ul><li>- [x] </li></ul> | <ul><li>- [x] </li></ul> |


#### No required dependencies?

You can always write to [issues][issues] or create a [pull request][pulls].

## Contributors
<a href="https://github.com/Tap-Team/create-vkma-ts/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Tap-Team/create-vkma-ts" />
</a>

[npm]: https://img.shields.io/npm/v/@tap_team/create-vkma-ts.svg
[npm-url]: https://npmjs.com/package/@tap_team/create-vkma-ts
[mit]: https://img.shields.io/badge/License-MIT-yellow.svg
[mit-url]: LICENSE
[issues]: https://github.com/Tap-Team/create-vkma-ts/issues
[pulls]: https://github.com/Tap-Team/create-vkma-ts/pulls
