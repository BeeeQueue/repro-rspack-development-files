import type { Configuration } from "@rspack/cli"

export = {
  stats: "normal",
  entry: "./src/main.ts",
  target: "web",
  builtins: {
    html: [{
      template: "./index.html"
    }],
    presetEnv: {
      coreJs: "3",
      targets: ["chrome 100", "firefox 100"],
    },
  },
} satisfies Configuration
