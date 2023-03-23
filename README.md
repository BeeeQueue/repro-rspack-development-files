# rspack Using Development Files In Production Mode

1. Install dependencies - `pnpm install`
1. Build it - `pnpm rspack build --mode production`
1. Observe how development files are used logs, despite using `--mode production`

Example logs:

```
Hash: 4b7fd70829a74ab
PublicPath: auto
     Asset       Size  Chunks             Chunk Names
   main.js   33.3 KiB    main  [emitted]  main
index.html  287 bytes          [emitted]
Entrypoint main = main.js
[821] ./src/main.ts 584 bytes {main}
[987] ./node_modules/.pnpm/lit@2.7.0/node_modules/lit/index.js 157 bytes {main}
[378] ./node_modules/.pnpm/lit@2.7.0/node_modules/lit/decorators.js 598 bytes {main}
[927] ./node_modules/.pnpm/tslib@2.5.0/node_modules/tslib/tslib.es6.js 14.4 KiB {main}
[694] ./node_modules/.pnpm/lit-html@2.7.0/node_modules/lit-html/development/lit-html.js 63.5 KiB {main}
[425] ./node_modules/.pnpm/lit-html@2.7.0/node_modules/lit-html/development/is-server.js 706 bytes {main}
[890] ./node_modules/.pnpm/@swc+helpers@0.4.13/node_modules/@swc/helpers/src/_ts_decorate.mjs 46 bytes {main}
[844] ./node_modules/.pnpm/@swc+helpers@0.4.13/node_modules/@swc/helpers/src/_ts_metadata.mjs 46 bytes {main}
[327] ./node_modules/.pnpm/lit-element@3.3.0/node_modules/lit-element/development/lit-element.js 9.56 KiB {main}
[496] ./node_modules/.pnpm/@lit+reactive-element@1.6.1/node_modules/@lit/reactive-element/development/css-tag.js 5.14 KiB {main}
[268] ./node_modules/.pnpm/@lit+reactive-element@1.6.1/node_modules/@lit/reactive-element/development/decorators/base.js 2.35 KiB {main}
[750] ./node_modules/.pnpm/@lit+reactive-element@1.6.1/node_modules/@lit/reactive-element/development/decorators/query.js 1.78 KiB {main}
[980] ./node_modules/.pnpm/@lit+reactive-element@1.6.1/node_modules/@lit/reactive-element/development/decorators/state.js 965 bytes {main}
[738] ./node_modules/.pnpm/@lit+reactive-element@1.6.1/node_modules/@lit/reactive-element/development/reactive-element.js 43.1 KiB {main}
[974] ./node_modules/.pnpm/@lit+reactive-element@1.6.1/node_modules/@lit/reactive-element/development/decorators/property.js 3.59 KiB {main}
    + 6 hidden modules
build: 199.561ms
```
