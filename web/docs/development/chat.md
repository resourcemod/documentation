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
    chat.sayToEveryone('Hint ouch!', constants.GameMessageTarget.Hint) // center
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
    chat.sayToSlot(data.player.slot, 'Hint ouch!', constants.GameMessageTarget.Hint) // center
});
```

## Colors

As in previous parts of Counter-Strike you can set the color of your chat message. Unfortunately, it is not possible to change the color of a message in hint, at least for now.

ResourceMod supports the following colors:
```jsx
enum Colors {
    Default = " \x01",
    DarkRed = " \x02",
    LightPurple = " \x03",
    Green = " \x04",
    Olive = " \x05",
    Lime = " \x06",
    Red = " \x07",
    Grey = " \x08",
    Yellow = " \x09",
    Silver = " \x0A",
    LightBlue = " \x0B",
    Blue = " \x0C",
    Purple = " \x0E",
    LightRed = " \x0F",
    Orange = " \x10"
}
```
And this is how you can set the color of your hint:

```jsx title="addons/resourcemod/src/server.js"
const {events, chat} = require('resourcemod')

events.onPlayerChat((event) => {
    event.player.say(`${chat.Colors.Blue} [ResourceMod] ${chat.Colors.Red} new chat event!`)
})
```