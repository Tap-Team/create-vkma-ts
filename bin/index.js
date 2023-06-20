#!/usr/bin/env node
"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function (thisArg, body) {
    var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: [],
      },
      f,
      y,
      t,
      g;
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === "function" &&
        (g[Symbol.iterator] = function () {
          return this;
        }),
      g
    );
    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while ((g && ((g = 0), op[0] && (_ = 0)), _))
        try {
          if (
            ((f = 1),
            y &&
              (t =
                op[0] & 2
                  ? y["return"]
                  : op[0]
                  ? y["throw"] || ((t = y["return"]) && t.call(y), 0)
                  : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (
                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                (op[0] === 6 || op[0] === 2)
              ) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var chalk_1 = __importDefault(require("chalk"));
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
var enquirer_1 = require("enquirer");
var fs_extra_1 = require("fs-extra");
var appPackageJson = (0, fs_extra_1.readJsonSync)(
  path_1.default.resolve(__dirname, "../templates/typescript/package.json")
);
console.log(
  chalk_1.default.cyan(
    "oooooo     oooo oooo    oooo ooo        ooooo       .o.               ooooooooooooo  .oooooo..o \n" +
      " `888.     .8'  `888   .8P'  `88.       .888'      .888.              8'   888   `8 d8P'    `Y8 \n" +
      "  `888.   .8'    888  d8'     888b     d'888      .8\"888.                  888      Y88bo.      \n" +
      "   `888. .8'     88888[       8 Y88. .P  888     .8' `888.                 888       `\"Y8888o.  \n" +
      "    `888.8'      888`88b.     8  `888'   888    .88ooo8888.   8888888      888           `\"Y88b \n" +
      "     `888'       888  `88b.   8    Y     888   .8'     `888.               888      oo     .d8P \n" +
      "      `8'       o888o  o888o o8o        o888o o88o     o8888o             o888o     8\"\"88888P'  \n"
  )
);
var start = function () {
  return __awaiter(void 0, void 0, void 0, function () {
    var useThisPathPrompt,
      useThisPath,
      appNamePrompt,
      appName,
      projectPath,
      root;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          useThisPathPrompt = new enquirer_1.Confirm({
            name: "useThisPath",
            message: "Want to create a project in this directory?",
            initial: "Y",
          });
          return [4 /*yield*/, useThisPathPrompt.run()];
        case 1:
          useThisPath = _a.sent();
          appNamePrompt = new enquirer_1.Input({
            name: "appNamePrompt",
            message: "Enter app name",
            initial: "my-app",
          });
          return [4 /*yield*/, appNamePrompt.run()];
        case 2:
          appName = _a.sent().trim().replaceAll(" ", "-");
          appPackageJson.name = appName;
          projectPath = useThisPath ? "./" : "./" + appName;
          if (!useThisPath) {
            (0, fs_extra_1.mkdirSync)(projectPath);
          }
          console.log(
            chalk_1.default.yellow(
              "The project will be created in the " +
                projectPath +
                " folder with the name '" +
                appName +
                "'"
            )
          );
          console.log(
            chalk_1.default.yellow(
              "Generating files with specified modules — it might take a some time..."
            )
          );
          root = path_1.default.resolve(__dirname, "../templates");
          fs_1.default.mkdirSync(root + "/dist/");
          fs_1.default.mkdirSync(root + "/dist/src/");
          (0, fs_extra_1.copySync)(root + "/typescript", root + "/dist");
          fs_1.default.writeFileSync(
            path_1.default.join(__dirname, "../templates/dist/package.json"),
            JSON.stringify(appPackageJson, null, 2)
          );
          console.log(chalk_1.default.green("Files generated successfully"));
          console.log(chalk_1.default.yellow("Copying files..."));
          (0,
          fs_extra_1.copySync)(path_1.default.join(__dirname, "../templates/dist"), projectPath);
          fs_1.default.rmSync(
            path_1.default.join(__dirname, "../templates/dist"),
            {
              recursive: true,
              force: true,
            }
          );
          console.log(chalk_1.default.green("Files are copied"));
          console.log(
            chalk_1.default.green(
              "Run `npm install`, `yarn install` or `pnpm install` to install dependencies"
            )
          );
          console.log(chalk_1.default.cyan("Happy coding!"));
          return [2 /*return*/];
      }
    });
  });
};
start();
//# sourceMappingURL=index.js.map
