---
sidebar_position: 3
---

# Chat

Chat allows plugin creators to inform the player, and can also be a place where server creators publish important news for players.
Chat in resourcemod is a global object, it is very easy to use.

## Send a message to global chat (for everyone)

It is very easy to send a message to the global chat - just use the method chat.SayToEveryone().
```jsx title="addons/resourcemod/example_plugin/plugin.js"
chat.SayToEveryone(message: string)
```
### Parameters
1. message - everything you want to say.

### Example
```jsx title="addons/resourcemod/example_plugin/plugin.js"
const onPlayerHurt = (data) => {
    chat.SayToEveryone("OUCH!") // every player will see this message in chat.
}

events.subscribe("player_hurt", onPlayerHurt)
```

## Send a message to a player

```jsx title="addons/resourcemod/example_plugin/plugin.js"
chat.SayToPlayer(player: Player, message: string)
```
### Parameters
1. Player - player object received from some event, for example.
2. message - everything you want to say.

### Example
```jsx title="addons/resourcemod/example_plugin/plugin.js"
const onPlayerHurt = (data) => {
    chat.SayToPlayer(data.GetPlayer(), "Ha-Ha!")
}

events.subscribe("player_hurt", onPlayerHurt)
```