---
sidebar_position: 1
---

# Getting Started

Let me first show you how to install resourcemod on your CS2 server.

## Install resourcemod

1. Download the latest release from [our repository](https://github.com/ResourceMod/resourcemod).
2. Download [Metamod:Source](https://www.sourcemm.net/downloads.php/?branch=master).
3. Unzip metamod to your server folder
4. Open `gameinfo.gi` file with your favorite text editor
5. Find the line `Game_LowViolence	csgo_lv // Perfect World content override`
6. Type `Game	csgo/addons/metamod` right after this line
7. Download .vdf file from resourcemod release repository
8. Put resourcemod.vdf to `csgo/addons/metamod` folder
9. Save it and open ResourceMod release archive
10. Open addons folder and create `resourcemod` folder inside
11. Put everything from resourcemod release archive to this folder

Done! Now start the server and enjoy javascript plugins.

## Install plugin

The original idea of ResourceMod was that you do not have to install plugins by dragging and dropping files on your server, but the reality was more complicated and in the Alpha version of ResourceMod we did not have time to create a full-fledged package manager.

1. Download a plugin
2. Put it into your `addons/resourcemod/plugins` folder
3. Add this plugin to `plugins.json` file like that
```jsx title="addons/resourcemod/plugins.json"
  ...
  "plugin_name": "plugin_version"
  ...
```

## Create your own plugin

Javascript is a fun language to create anything you want. ResourceMod will help you turn your idea into reality using the Source2 engine.

1. Create folder in `addons/resourcemod/plugins` with the name of your plugin.
2. Create a single .js file called `plugin.js` in that folder. This is your plugin entrypoint.
3. Create a plugin.json file with some information about your awesome plugin.
```jsx title="addons/resourcemod/plugins/*plugin_name*/plugin.json"
{
    "name": "example_plugin",
    "authors": ["Twelvee"],
    "website": "https://resourcemod.com/",
    "version": "1.0"
}
```
4. Now you can code your own logic on top of Source 2 engine.
