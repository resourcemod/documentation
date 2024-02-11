---
sidebar_position: 1
---

# Getting Started

Let me first show you how to install resourcemod on your CS2 server.

## Install resourcemod

1. Install [Metamod:Source](https://www.sourcemm.net/downloads.php/?branch=master).
2. Install [NodeJS](https://nodejs.org/).
3. Open `cmd` and navigate to `your_server_path/addons` folder.
4. Type `npx create-resourcemod-app@latest .`

Done! Now start the server and enjoy javascript plugins.

## Install plugin

The original idea of ResourceMod was that you do not have to install plugins by dragging and dropping files on your server. Since we were able to use a full-fledged nodejs runtime, we decided that the ideal solution would be to use npm packages as plugins for your server.

1. Find a plugin. [They can be here](https://www.npmjs.com/search?q=resourcemod)
2. Run `npm i {plugin_name}` inside `addons/resourcemod/` folder.
3. Every plugin must have an entry point, usually a constant-anonymous function to be specified in the resourcemod.config.js file. For example like this:
```jsx title="resourcemod.config.js"
const {useWelcomeMessages} = require('welcome-messages-plugin')
...
plugins: [
    useWelcomeMessages({
        prefix: "Server >",
        connect: true,
        disconnect: true
    }),
],
```

## Create your own plugin

Javascript is a fun language to create anything you want. ResourceMod will help you turn your idea into reality using the Source2 engine.

1. Create an empty folder.
2. Run `npm init` inside of it.
3. Create an entrypoint file (index.js by default).
4. Create a single entrypoint const that server creators will call inside resourcemod.config.js file. Just like `useWelcomeMessages` from the example above.
5. Now you can code your own logic on top of Source 2 engine.

Before publishing the plugin to the registry, I advise you to watch a video tutorial about it.

<iframe width="560" height="315" src="https://www.youtube.com/embed/J4b_T-qH3BY?si=urhujvTisjZ5HXmX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

You can also check out the example plugin, and just copy what you need from there.

- [GitHub - Welcome Messages Plugin](https://github.com/resourcemod/welcome-messages-plugin)
- [NPM - Welcome Messages Plugin](https://www.npmjs.com/package/welcome-messages-plugin)