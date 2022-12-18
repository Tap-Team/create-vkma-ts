#! /usr/bin/env node

const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');
const { execSync } = require('child_process');

const packageRoot = path.join(__dirname, '..');
const miniAppDirectory = process.argv[2] ? process.argv[2] : './';
const showHelp = ~process.argv.indexOf('--help');

if (showHelp) {
  console.error(`Usage:
Create VK Mini App with @vkontakte/vk-miniapps-deploy deploy: ${chalk.bold.green('@tap_team/create-vkma-ts <app-directory-name>')}`);
  process.exit(1);
}

console.log('Creating project...');
if(miniAppDirectory !== './')
fs.mkdirSync(miniAppDirectory);

console.log('Copying VK Mini App source and configuration files..');
fs.copySync(path.join(packageRoot, 'boilerplate'), miniAppDirectory);

console.log(`VK Mini App source and configuration files are copied`);

console.log('Installing project dependencies — it might take a few minutes..');
try {
  execSync(`cd ${miniAppDirectory} && npm ci --loglevel=error --no-update-notifier`);
} catch (npmErr) {
  console.error(`npm error:\n${npmErr}`);
  process.exit(1);
}
console.log('Dependencies are installed');

console.log(`VK Mini App is ready to start in ${miniAppDirectory} folder. \nCheck README.MD for brief instructrions.\nHappy Coding!`)