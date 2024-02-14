---
sidebar_position: 3
---

# Chat

Chat allows plugin creators to inform the player, and can also be a place where server creators publish important news for players.
Chat in resourcemod is very easy to use.

## Send a message to global chat (for everyone)

It is very easy to send a message to the global chat - just use the method chat.sayToEveryone().
```jsx title="addons/resourcemod/src/server.js"
const {chat} = require('resourcemod');
...
chat.sayToEveryone(message: string, destination: int);
```
### Parameters
1. message - everything you want to say.
2. destination, default - chat.

### Example
```jsx title="addons/resourcemod/src/server.js"
const {events, chat, constants} = require('resourcemod')

events.onPlayerHurt((data) => {
    chat.sayToEveryone('ouch!')
    chat.sayToEveryone('Hint ouch!', constants.HUD_PRINT_CENTER) // hint
});
```

## Send a message to a player

```jsx title="addons/resourcemod/src/server.js"
chat.sayToSlot(slot: int, message: string, destination: int)
```
### Parameters
1. slot - player slot received from some event, for example.
2. message - everything you want to say.
3. destination, default - chat

### Example
```jsx title="addons/resourcemod/src/server.js"
const {events, chat, constants} = require('resourcemod')

events.onPlayerHurt((data) => {
    chat.sayToSlot(data.player.slot, 'ouch!')
    chat.sayToSlot(data.player.slot, 'Hint ouch!', constants.HUD_PRINT_CENTER) // hint
});
```