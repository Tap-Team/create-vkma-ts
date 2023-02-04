module.exports = {
  packageJson: "../templates/base/package.json",
  packages: [
    {
      name: "@vkontakte/vk-tunnel",
      value: { "@vkontakte/vk-tunnel": "0.1.3" },
    },
    {
      name: "eruda",
      value: { eruda: "2.8.3", "eruda-dom": "2.0.0" },
    },
    {
      name: "recoil",
      value: { recoil: "0.7.6" },
    },
    {
      name: "@happysanta/router",
      value: { "@happysanta/router": "0.3.1" },
    },
    {
      name: "@happysanta/bridge-plus",
      value: { "@happysanta/bridge-plus": "0.0.24" },
    },
    {
      name: "prettier+husky+editorconfig+lint-staged",
      value: { husky: "^8.0.3", "lint-staged": "^13.1.0", prettier: "^2.8.3" },
    },
  ],
};
