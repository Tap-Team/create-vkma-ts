#!/usr/bin/env node

const { Confirm, Input, Select, MultiSelect } = require("enquirer");
const chalk = require("chalk");
const fs = require("fs-extra");
const ffs = require("fs");
const path = require("path");
const constants = require("./constants");
const { addDependencies, generateFiles } = require("./utils");
const { execSync } = require("child_process");

console.log(__dirname);
let appPackageJson = fs.readJsonSync(
  path.resolve(__dirname, constants.packageJson)
);

console.log(
  chalk.cyan(
    "oooooo     oooo oooo    oooo ooo        ooooo       .o.               ooooooooooooo  .oooooo..o \n" +
      " `888.     .8'  `888   .8P'  `88.       .888'      .888.              8'   888   `8 d8P'    `Y8 \n" +
      "  `888.   .8'    888  d8'     888b     d'888      .8\"888.                  888      Y88bo.      \n" +
      "   `888. .8'     88888[       8 Y88. .P  888     .8' `888.                 888       `\"Y8888o.  \n" +
      "    `888.8'      888`88b.     8  `888'   888    .88ooo8888.   8888888      888           `\"Y88b \n" +
      "     `888'       888  `88b.   8    Y     888   .8'     `888.               888      oo     .d8P \n" +
      "      `8'       o888o  o888o o8o        o888o o88o     o8888o             o888o     8\"\"88888P'  \n"
  )
);

const start = async () => {
  const useThisPathPrompt = new Confirm({
    name: "useThisPath",
    message: "Want to create a project in this directory?",
    initial: "Y",
  });
  const useThisPath = await useThisPathPrompt.run();

  const appNamePrompt = new Input({
    name: "useThisPath",
    message: "Enter app name",
    initial: "my-app",
  });
  const appName = (await appNamePrompt.run()).trim().replaceAll(" ", "-");
  appPackageJson.name = appName;
  const projectPath = useThisPath ? "./" : "./" + appName;
  if (!useThisPath) {
    fs.mkdirSync(projectPath);
  }
  console.log(
    chalk.yellow(
      "The project will be created in the " +
        projectPath +
        " folder with the name '" +
        appName +
        "'"
    )
  );

  const usedPackageManagerPrompt = new Select({
    name: "usedPackageManager",
    message: "Which package manager do you want to use?",
    choices: ["npm", "yarn"],
  });
  const usedPackageManager = await usedPackageManagerPrompt.run();

  // TODO: move packages to another file
  const usedPackagesPrompt = new MultiSelect({
    name: "usedPackages",
    message: "What packages do you want to use?",
    choices: [
      {
        name: "@vkontakte/vk-tunnel",
        value: { "@vkontakte/vk-tunnel": "0.1.3" },
      },
      { name: "eruda", value: { eruda: "2.8.3", "eruda-dom": "2.0.0" } },
      { name: "recoil", value: { recoil: "0.7.6" } },
      { name: "@happysanta/router", value: { "@happysanta/router": "0.3.1" } },
      {
        name: "@happysanta/bridge-plus",
        value: { "@happysanta/bridge-plus": "0.0.24" },
      },
    ],
    result(names) {
      return [names, Object.values(this.map(names))];
      // [
      //  ['@vkontakte/vk-tunnel', '@happysanta/bridge-plus'],
      //  [{ '@vkontakte/vk-tunnel': '0.1.3' }, { '@happysanta/bridge-plus': '0.0.24' }]
      // ]
    },
  });
  const [usedPackagesNames, usedPackages] = await usedPackagesPrompt.run();
  appPackageJson = addDependencies(appPackageJson, usedPackages);
  console.log(
    chalk.yellow(
      "Generating files with specified modules — it might take a some time..."
    )
  );
  generateFiles(usedPackagesNames);
  ffs.writeFileSync(
    path.join(__dirname, "../templates/dist/package.json"),
    JSON.stringify(appPackageJson, null, 2)
  );
  console.log(chalk.green("Files generated successfully"));
  console.log(chalk.yellow("Copying files..."));
  fs.copySync(path.join(__dirname, "../templates/dist"), projectPath);
  ffs.rmSync(path.join(__dirname, "../templates/dist"), {
    recursive: true,
    force: true,
  });
  console.log(chalk.green("Files are copied"));
  console.log(
    chalk.yellow(
      "Installing project dependencies — it might take a few minutes..."
    )
  );
  try {
    execSync(`cd ${projectPath} && ${usedPackageManager} install`);
  } catch (e) {
    console.error(chalk.red(`${usedPackageManager} error:\n${e}`));
    process.exit(1);
  }
  console.log(chalk.green("Dependencies are installed"));
  console.log(chalk.cyan("Happy coding!"));
};

start();