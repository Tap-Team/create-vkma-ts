#!/usr/bin/env node

import fs from "fs";
import path from "path";

import chalk from "chalk";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Confirm, Input } from "enquirer";
import { copySync, readJsonSync, mkdirSync } from "fs-extra";

const appPackageJson = readJsonSync(
  path.resolve(__dirname, "../templates/typescript/package.json")
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
    name: "appNamePrompt",
    message: "Enter app name",
    initial: "my-app",
  });
  const appName = (await appNamePrompt.run()).trim().replaceAll(" ", "-");
  appPackageJson.name = appName;
  const projectPath = useThisPath ? "./" : "./" + appName;
  if (!useThisPath) {
    mkdirSync(projectPath);
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

  console.log(
    chalk.yellow(
      "Generating files with specified modules — it might take a some time..."
    )
  );

  const root = path.resolve(__dirname, "../templates");
  fs.mkdirSync(root + "/dist/");
  fs.mkdirSync(root + "/dist/src/");
  copySync(root + "/typescript", root + "/dist");
  fs.writeFileSync(
    path.join(__dirname, "../templates/dist/package.json"),
    JSON.stringify(appPackageJson, null, 2)
  );

  console.log(chalk.green("Files generated successfully"));
  console.log(chalk.yellow("Copying files..."));
  copySync(path.join(__dirname, "../templates/dist"), projectPath);
  fs.rmSync(path.join(__dirname, "../templates/dist"), {
    recursive: true,
    force: true,
  });
  console.log(chalk.green("Files are copied"));
  console.log(
    chalk.green(
      "Run `npm install`, `yarn install` or `pnpm install` to install dependencies"
    )
  );
  console.log(chalk.cyan("Happy coding!"));
};

start();
