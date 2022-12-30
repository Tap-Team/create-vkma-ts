const { generate_indextsx } = require("./generators/src/index.tsx");
const fs = require("fs");
const fse = require("fs-extra");
const chalk = require("chalk");
const path = require("path");
const { generate_apptsx } = require("./generators/src/App.tsx");
const {
  generate_onboardingtsx,
} = require("./generators/src/panels/onboarding/Onboarding.tsx");
const addDependencies = (file, dependencies) => {
  dependencies.forEach((dependence) => {
    if (dependence["eruda"]) {
      file.devDependencies = {
        ...file.devDependencies,
        ...dependence,
      };
    } else {
      file.dependencies = {
        ...file.dependencies,
        ...dependence,
      };
    }
  });
  return file;
};

const generateFiles = (dependenciesNames) => {
  const root = path.resolve(__dirname, "../");
  fs.mkdirSync(root + "/templates/dist/");
  fs.mkdirSync(root + "/templates/dist/src/");
  fse.copySync(root + "/templates/base", root + "/templates/dist");

  fs.writeFileSync(
    root + "/templates/dist/src/index.tsx",
    generate_indextsx(dependenciesNames),
    { flag: "wx"},
  );
  fs.writeFileSync(
    root + "/templates/dist/src/App.tsx",
    generate_apptsx(dependenciesNames),
    { flag: "wx" },
  );

  if (dependenciesNames.indexOf("eruda") !== -1) {
    fs.copyFileSync(
      root + "/bin/generators/src/eruda.js",
      root + "/templates/dist/src/eruda.js"
    );
  }

  if (dependenciesNames.indexOf("@happysanta/router") !== -1) {
    fs.copyFileSync(
      root + "/bin/generators/src/router.ts",
      root + "/templates/dist/src/router.ts"
    );
  }

  fs.mkdirSync(root + "/templates/dist/src/panels/onboarding");

  fs.writeFileSync(
    root + "/templates/dist/src/panels/onboarding/Onboarding.tsx",
    generate_onboardingtsx(dependenciesNames),
    { flag: "wx" },
    (err) => {
      if (err) {
        console.log(chalk.red(err));
      }
    }
  );
};

module.exports = {
  addDependencies,
  generateFiles,
};
