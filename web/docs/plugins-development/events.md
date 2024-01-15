---
sidebar_position: 1
---

# Events

Creating plugins is a work around of the game engine's eventing. You hook into an event and work with the data that came in.
In resourcemod this is implemented using the `events.subscribe` and `events.unsubscribe` methods.

## Subscribing

To subscribe to an event, you need to call the `events.subscribe` method from your plugin, whose signature is as follows:
```jsx title="addons/resourcemod/example_plugin/plugin.js"
events.subscribe(event_name: string, callback: function)
```
### Parameters
1. Event name is source2 event name, you can see the full list of supported events on this page: Events list
2. A callback function that will be called after the event is triggered.

### Example
```jsx title="addons/resourcemod/example_plugin/plugin.js"
const falldamageCallback = (data) => {
    console.log(data.GetDamage()) // prints the damage
    console.log(data.GetPlayer().hp) // prints the player's hp in the server console
    data.GetPlayer().hp = data.GetPlayer().hp + data.GetDamage() // restore given damage
}

events.subscribe("player_falldamage", falldamageCallback)
```

This example will output a message to the server console with the current amount of health of the player who took damage from the fall, each time he took it.

## Unsubscribing
If for some reason you no longer need to know that an event has occurred - it is recommended to unsubscribe from it. You can do this using the `events.unsubscribe` method.
```jsx title="addons/resourcemod/example_plugin/plugin.js"
events.unsubscribe("player_falldamage")
```

### Parameters
The method expects only one parameter - the name of the event.

### Example
Here's a complete example of a plugin that will show the current hp of a player who took damage from a fall, and after it shows the message - it will unsubscribe from the event and will no longer handle this event in any way.
```jsx title="addons/resourcemod/example_plugin/plugin.js"
const falldamageCallback = (data) => {
    console.log(data.GetPlayer().hp) // prints the player's hp in the server console
    events.unsubscribe("player_falldamage")
}

events.subscribe("player_falldamage", falldamageCallback)
```

## Events data
As you may have noticed from the examples above - a data object is passed to the callback function, which is called as soon as an event triggers. 

The data object is a regular Javascript object of the Event class (RMEvent in c++). Until we have added hints to the IDE (and ts hints) you can see what methods and parameters this object stores in our documentation, as well as simply by running a loop through it.

The main principle of ResourceMod is to give the simplest possible API to work with plugins, so instead of Source2 entities (PlayerController/PlayerPawn) we implemented a single Player class, which is passed every time an event implies it.
```jsx title="inside event callback function"
    ...
    data.GetPlayer() // Returns an object of the player class that will allow full control of this player.
    ...
```
