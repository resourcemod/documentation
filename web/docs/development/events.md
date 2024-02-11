---
sidebar_position: 1
---

# Events

Creating plugins is a work around of the game engine's eventing. You hook into an event and work with the data that came in.
In resourcemod this is implemented using the `on{EventName}` or `onEvent('name', callback)` methods.

## Using hooks
For example, we will use the `player_chat` event.

To subscribe to event, you need to call the `onPlayerChat` method from your code, whose signature is as follows:
```jsx title="addons/resourcemod/src/server.js"
events.onPlayerChat(callback)
```
or 
```jsx title="addons/resourcemod/src/server.js"
events.onEvent('player_chat', callback)
```
### Parameters
1. Event name is source2 event name, you can see the full list of supported events on this page: [Events list](/docs/development/supported-events)
2. A callback function that will be called after the event is triggered.

### Example
```jsx title="addons/resourcemod/src/server.js"
const {events} = require('resourcemod')

events.onPlayerChat((data) => {
    console.log(data.getPlayer().getName())
    data.getPlayer().hint("You said: "+data.getMessage())
})
```

This example will display in the server console the name of the player who typed something into the chat. And also the player himself will receive the hint message with the message he wrote.

## Events data
As you may have noticed from the examples above - a data object is passed to the callback function, which is called as soon as an event triggers. 

The data object is a regular Javascript object of the Event class (RMEvent in c++). Until we have added hints to the IDE (and ts hints) you can see what methods and parameters this object stores in our documentation, as well as simply by running a loop through it.

The main principle of ResourceMod is to give the simplest possible API to work with plugins, so instead of Source2 entities (PlayerController/PlayerPawn) we implemented a single Player class, which is passed every time an event implies it.
```jsx title="inside event callback function"
    ...
    data.getPlayer() // Returns an object of the player class that will allow full control of this player.
    ...
```

## Cancelling events
Almost all events are pre-invents, i.e. they come to resourcemod BEFORE the server processes them.

For some of them we have made a system of canceling the event, it is very easy to do it:

```jsx title="addons/resourcemod/src/server.js"
const {events, constants} = require('resourcemod')
...
events.onClientConnect((event) => {
    if (event.getPlayer().getName() === 'bad_guy') {
        return constants.PREVENT_EVENT;
    }
})
```

List of events that can be canceled:

`onClientConnect`, `player_chat`, `onClientPutInServer`.

You can also undo the action by changing the logic of the event:
```jsx title="addons/resourcemod/src/server.js"
const {events} = require('resourcemod')
...
events.onPlayerHurt((event) => {
    const hp = event.getPlayer().getHp()
    event.getPlayer.setHp(hp + event.getPlayer().getDamage().hp) // restore player damaged hp
})
```