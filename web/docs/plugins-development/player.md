---
sidebar_position: 2
---

# Player

To simplify plugin development, we combined two entities from the Source 2 engine - PlayerController and PlayerPawn into a single Player class.
Every `GetPlayer`, `GetAttacker` and `GetAssister` event object methods will return the player class.

## Methods
Currently, this class contains the following methods

### GetName
```
player.GetName() // returns the player's nickname
```
### GetSteamID
``` 
player.GetSteamID() // returns the player's steamid
```
### IsAlive
```
player.IsAlive() // returns true/false if the player is alive or not
```
### Slap
```
player.Slap(hp: int) // will hit the player's hp by a certain value
```
### Slay 💅
```
player.Slay() // will kill the player.
```
### GetTeam
```
player.GetTeam() // returns the team number (0-3) where 0 is unknown team
```
### Respawn
```
player.Respawn() // will respawn player. Works only if player is dead.
```
### ChangeTeam
```
player.ChangeTeam(1) // will move the player into the speculators
player.ChangeTeam(2) // will move the player into the terrorist team
player.ChangeTeam(3) // will move the player into the counter-terrorist team
player.ChangeTeam(2, true) // will move the player into the terrorist team and kill
```

## Properties

### hp
``` 
player.hp // returns the player's current hp
player.hp = 99 // will set the player's hp to a certain value
```