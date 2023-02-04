const { generate_indextsx } = require("./generators/src/index.tsx");
const fs = require("fs");
const fse = require("fs-extra");
const chalk = require("chalk");
const path = require("path");
const { generate_apptsx } = require("./generators/src/App.tsx");
const {
  generate_onboardingtsx,
} = require("./generators/src/panels/onboarding/Onboarding.tsx");

const addScripts = (file, isReactScripts) => {
  if (isReactScripts) {
    file.devDependencies = {
      ...file.devDependencies,
      "react-scripts": "^4.0.3",
    }
    file.scripts = {
      "start": "cross-env PORT=10888 react-scripts --openssl-legacy-provider start",
      "build": "react-scripts --openssl-legacy-provider build",
      ...file.scripts,
    }
  } else {
    file.scripts = {
      "start": "vite",
      "build": "tsc && vite build",
      "preview": "vite preview",
      ...file.scripts,
    }
  }
  return file;
};

// PHELG - prettier + husky + editorconfig + lint-staged
const addPHELG = (file) => {
  const root = path.resolve(__dirname, "../");
  file.scripts = {
    ...file.scripts,
    "prepare": "husky install",
    "pre-commit": "lint-staged",
    "prettier": "prettier --write src/**/*.{js,jsx,ts,tsx,css,scss,md} --ignore-unknown"
  }
  file["lint-staged"] = {
    "src/**/*.{js,jsx,ts,tsx,css,scss,md}": "prettier --write --ignore-unknown"
  }
  
  fs.copyFileSync(
    root + "/bin/generators/.prettierrc.json",
    root + "/templates/dist/.prettierrc.json"
  );
  
  try {
    fs.mkdirSync(root + "/templates/dist/.husky");
  } catch (e) {}
  fs.copyFileSync(
    root + "/bin/generators/.husky/pre-commit",
    root + "/templates/dist/.husky/pre-commit"
  );
  
  fs.copyFileSync(
    root + "/bin/generators/.editorconfig",
    root + "/templates/dist/.editorconfig"
  );
  
  return file;
}

const addDependencies = (file, dependencies) => {
  dependencies.forEach((dependence) => {
    if (dependence["eruda"] || dependence["prettier+husky+editorconfig+lint-staged"]) {
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

const generateFiles = (dependenciesNames, isReactScripts) => {
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

  try {
    fs.mkdirSync(root + "/templates/dist/src/panels/onboarding");
  } catch (e) {}
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
  
  if (isReactScripts) {
    try {
      fs.mkdirSync(root + "/templates/dist/public");
    } catch (e) {}
    fs.copyFileSync(
      root + "/bin/generators/public/index.html",
      root + "/templates/dist/public/index.html"
    );
  } else {
    fs.copyFileSync(
      root + "/bin/generators/index.html",
      root + "/templates/dist/index.html"
    );
  }
};

module.exports = {
  addScripts,
  addPHELG,
  addDependencies,
  generateFiles,
};
