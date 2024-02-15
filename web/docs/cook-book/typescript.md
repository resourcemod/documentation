---
sidebar_position: 1
---

# Setting up TypeScript

Since `1.0.20-beta` resourcemod supports typescript.
In this tutorial I will tell you how to configure your server to work with typescript and what you will need for that.

First things first - install resourcemod, or ensure it is already installed.

### Create your script

In this example I'll just create a simple `src/server.ts` file with the following content.

```jsx title="csgo/addons/resourcemod/src/server.ts"
import { events } from "resourcemod"

events.onItemPickup((event) => {
    console.log(`${event.player.name} just picked up ${event.item}`)
})
```

### Create tsconfig

Create an empty file called `tsconfig.json` inside `resourcemod` folder. Open it and set everything up for your needs (at least make sure that folders exists).

Make sure your compiler will compile commonjs module, because currently resourcemod have no esmodules support.

```jsx title="csgo/addons/resourcemod/tsconfig.json"
{
    "compilerOptions": {
        "target": "ES5",
        "lib": [
            "ES6",
            "ESNext",
            "DOM"
        ],
        "module": "commonjs",
        "moduleResolution": "node",
        "baseUrl": "./",
        "paths": {
            "@src/*": ["src/*"],
        },
        "typeRoots": [
            "./node_modules/@types"
        ],
        "allowUmdGlobalAccess": true,
        "resolveJsonModule": true,
        "allowJs": true,
        "declaration": true,
        "declarationMap": true,
        "sourceMap": true,
        "outDir": "./dist",
        "removeComments": true,
        "allowSyntheticDefaultImports": true,
        "esModuleInterop": true,
        "forceConsistentCasingInFileNames": true,
        "strict": true,
        "noImplicitAny": true,
        "strictNullChecks": true,
        "skipLibCheck": true
    },
    "include": [
        "src"
    ],
    "exclude": [
        "node_modules",
        ".vscode",
        "dist"
    ],
    "ts-node": {
        "esm": true
    }
}
```

### Modify package.json

First - install typescript by running this command:

`npm i typescript @types/node --save-dev`

Second - add a script into `package.json` that will compile your typescript code into javascript.

```jsx title="csgo/addons/resourcemod/package.json"
    ...
    "scripts": {
        "build": "tsc"
    },
    ...
```

### Test it

1. Change the entrypoint in `resourcemod.config.js` to `dist/server.js`
2. Run `npm run ts:compile` command
3. Start your server!
