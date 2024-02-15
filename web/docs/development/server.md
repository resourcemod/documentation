---
sidebar_position: 4
---

# Server

The `server` class allows you to get up-to-date information about the server, as well as manage it.

## Getting online players

The server class stores information about connected players, so you can always get an up-to-date list of players, as well as ready-made filters of these players.

```jsx title="addons/resourcemod/src/server.js"
const {events, server} = require('resourcemod')

events.onMapLoaded((event) => {
    server.players.allHumanPlayers // returns []Player without bots
    server.players.allPlayers // returns []Player
})
```

## Sending a Game Message

GameMessage is the message that is shown just above the hint. It supports HTML markup, and you can customize how long this message is displayed.
Just use `server.message(slot: number, message: string, duration: number)` with duration in seconds.

```jsx title="addons/resourcemod/src/server.js"
const {events, server, GameMessage} = require('resourcemod')

events.onPlayerChat((event) => {
    if (event.message.startsWith('!help')) {
        const helpMessage = new GameMessage(`
            <font class="fontSize-xl">Help </font> <br>
            <font class="fontSize-m">!admins - online admins list</font> <br>
            <font class="fontSize-s">!help - shows this menu</font>
        `)
        server.message(event.player.slot, helpMessage, 15)
    }
})
```

You can also display images and even gif files by using img tag

```jsx title="addons/resourcemod/src/server.js"
const {events, server, GameMessage} = require('resourcemod')

events.onPlayerChat((event) => {
    if (event.message.startsWith('!help')) {
        const helpMessage = new GameMessage(`
            <img src="https://i.gifer.com/origin/f5/f5baef4b6b6677020ab8d091ef78a3bc_w200.gif" />
        `)
        server.message(event.player.slot, helpMessage, 15)
    }
})
```

<img src="/img/gif-game-message.jpg" />

