const { build } = require("esbuild");

const sharedConfig = {
  entryPoints: ["src/index.ts"],
  bundle: true,
  minify: true,
};

build({
  ...sharedConfig,

  platform: "node", // for CJS
  outfile: "bin/index.js",
});
