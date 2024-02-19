---
sidebar_position: 2
---

# Player

To simplify plugin development, we combined two entities from the Source 2 engine - PlayerController and PlayerPawn into
a single Player class.
Every `player`, `attacker` and `assister` event object properties will return the Player class.

## Player class

Currently, this class contains the following methods and properties.

### Properties

| name            | type     | read-only | description                             |
|-----------------|----------|-----------|-----------------------------------------|
| name            | string   | true      | Player name                             |
| steamId         | number   | true      | SteamId 32 (bot = 0)                    |
| slot            | number   | true      | Player slot number                      |
| hp              | number   | false     |                                         |
| steamId64       | string/0 | true      | SteamId 64 as string or 0 if it's a bot |
| isBot           | boolean  | true      |                                         |
| isAlive         | string/0 | true      |                                         |
| isConnected     | boolean  | true      |                                         |
| isConnecting    | boolean  | true      |                                         |
| isReconnecting  | boolean  | true      |                                         |
| isDisconnecting | boolean  | true      |                                         |
| iSDisconnected  | boolean  | true      |                                         |
| isReserved      | boolean  | true      |                                         |
| team            | number   | true      |                                         |
| currentWeapon   | Weapon   | true      | i.e `weapon_ak47` (as Enum if ts)       |
| stats           | Stats    | false     |                                         |
| money           | number   | false     |                                         |
| armor           | number   | false     |                                         |


#### Stats class

| name    | type     | read-only |
|---------|----------|-----------|
| _slot   | number   | true      |
| damage  | number   | false     |
| kills   | number   | false     |
| assists | number   | false     |
| deaths  | number   | false     |

to change player stats you can modify stats object inside player class.

```jsx
event.player.stats.kills = 100;
event.player.stats.deaths = 0;
```

### Methods

| name       | parameters                    | description                                                        |
|------------|-------------------------------|--------------------------------------------------------------------|
| slap       | (hp: number)                  | Slap play on `hp` value                                            |
| slay       |                               | Kill player                                                        |
| respawn    |                               | Respawn player, works only if a player is alive                    |
| changeTeam | (team: number, kill: boolean) | Change player team, team is a constant number of the selected team |
| say        | (message: string)             | Print message to a player in chat                                  |
| hint       | (message: string)             | Print message to a player in players hint                          |
| setModel   | (path: string)                | Set the player model, models have to be precached.                 |
| setColor   | (color: Color)                | Color is a class with RGBA constructor                             |
| playSound  | (path: string)                | Emits player console command `play %path%`                         |
| kick       |                               | Kick player.                                                       |
| giveWeapon | (weapon: Weapon)              | Give player a weapon (accept an enum `Weapon`)                     |
| dropWeapon |                               | Drop current weapon.                                               |
