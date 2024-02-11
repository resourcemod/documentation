---
sidebar_position: 2
---

# Player

To simplify plugin development, we combined two entities from the Source 2 engine - PlayerController and PlayerPawn into a single Player class.
Every `getPlayer`, `getAttacker` and `getAssister` event object methods will return the Player class.

## Methods
Currently, this class contains the following methods

### getName
```
player.getName() // returns the player's nickname.
```
### getHp
```
player.getHp() // returns the player's current hp.
```
### setHp
```
player.setHp(hp: int) // will set the player hp to `hp` value.
```
### getSlot
```
player.getSlot() // returns the player's slot (int).
```
### isConnected
```
player.isConnected() // returns the player's connected or not (bool).
```
### isDisconnected
```
player.isDisconnected() // returns the player's disconnected or not (bool).
```
### isConnecting
```
player.isConnecting() // returns the player's connecting or not (bool).
```
### isReserved
```
player.isConnected() // returns the player's reserved or not (bool).
```
### isReconnecting
```
player.isReconnecting() // returns the player's reconnecting or not (bool).
```
### getSteamId
``` 
player.getSteamId() // returns the player's steamid (32).
```
### getSteamId64
``` 
player.getSteamId64() // returns the player's steamid (64).
```
### isAlive
```
player.isAlive() // returns true/false if the player is alive or not.
```
### slap
```
player.slap(hp: int) // will hit the player's hp by a certain value.
```
### slay 💅
```
player.slay() // will kill the player.
```
### getTeam
```
player.getTeam() // returns the team number (0-3) where 0 is unknown team.
```
### respawn
```
player.respawn() // will respawn player. Works only if player is dead.
```
### say
```
player.say(message: string) // print message to player chat (visible only for this player).
```
### hint
```
player.hint(message: string) // print message to players hint (visible only for this player). Hint is a thing in the middle of players screen.
```
### setModel
```
player.setModel(path: string) // set model.
```
### setColor
```
player.setModel(color: Color) // set player model color. Color is a class: Color(r,g,b,a).
```
### playSound
```
player.playSound(path: string) // will trigger player's `play` console command.
```
### kick
```
player.kick() // will disconnect player from the server.
```
### changeTeam
```
const {constants} = require('resourcemod');
...
player.changeTeam(constants.TEAM_SPECTATOR) // will move the player into the speculators
player.changeTeam(constants.TEAM_T) // will move the player into the terrorist team
player.changeTeam(constants.TEAM_CT) // will move the player into the counter-terrorist team
player.changeTeam(constants.TEAM_T, true) // will move the player into the terrorist team and kill
```

## Properties

### public
``` 
player.name
player.steamId //32
player.slot
```