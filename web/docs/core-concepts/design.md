---
sidebar_position: 1
---

# Plugins design

The main principles of creating plugins "as intended".

### Why we created ResourceMod
There are many ways to create your own plugins for Counter-Strike 2. Resourcemod is slightly different. In addition to a full-fledged NodeJS Runtime, we've slightly changed the plugin architecture that everyone is used to.

When creating ResourceMod we were inspired by game engines and front-end frameworks, not by systems like sourcemod or CounterStrikeSharp.

Now you have that clean slate in front of you, this is your server entrypoint (by default it is in src/server.js).

We hope that this small improvement will allow you to create unique game servers, rather than asset flip from pre-made plugins.

### Server Snapshots

Thanks to our architecture, you can share entire game servers (snapshots), not just plugins. Simply initialize the repository inside the `addons/resourcemod` folder and upload all of your server source code (including the list of plugins) to the repository.

Another person (or you) can easily install the same server on another hosting or simply scale it up.

### Opensource first

This is very cool if you want to monetize your plugins by selling them to game server creators. However, now it will simply be impossible for us to create conditions for this for you. If possible, we will definitely implement such a protection system, but at the moment we are not responsible for the theft or unfair use of plugins.

### NPM

Install plugins only through a package manager. Other installation methods are considered incorrect and may cause operational problems.

### .gitignore
Please use git to store the source code of your plugins and servers. And so that others can easily use them, always save the .gitignore file in the root.

### Respect Valve and their requirements

We all love Valve's games, so please be respectful and respect the rules that Valve has clearly stated.

[https://blog.counter-strike.net/index.php/server_guidelines/](https://blog.counter-strike.net/index.php/server_guidelines/)