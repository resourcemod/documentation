---
sidebar_position: 8
---

# Supported Events

As we create a more user-friendly API for server creators - we don't currently support all events. Below is the list of
events supported by the latest public version of ResourceMod.
Documentation will be developed further over time.

## onItemPickup

Triggers when a player or bot picks up an item (or buys it).

### Properties

| name     | type    | read-only | description                                    |
|----------|---------|-----------|------------------------------------------------|
| name     | string  | true      | Event name i.e. `item_pickup`                  |
| item     | string  | true      | Item name i.e. `knife`                         |
| player   | Player  | true      | The class of the player who picked up the item |
| silent   | boolean | true      |                                                |
| defindex | number  | true      |                                                |

## onClientPutInServer

Triggers when the player has connected to the server and has been registered by the server.

### Properties

| name   | type   | read-only | description                            |
|--------|--------|-----------|----------------------------------------|
| name   | string | true      | Event name i.e. `client_put_in_server` |
| player | Player | true      | The class of the player who connected  |

## onClientDisconnected

Triggers when the player has been disconnected.

### Properties

| name   | type   | read-only | description                              |
|--------|--------|-----------|------------------------------------------|
| name   | string | true      | Event name i.e. `client_disconnected`    |
| player | Player | true      | The class of the player who disconnected |

## onClientConnect

Triggers when the player trying to connect. Doesn't work on bots. Can be canceled.

### Properties

| name      | type   | read-only | description                      |
|-----------|--------|-----------|----------------------------------|
| name      | string | true      | Event name i.e. `client_connect` |
| steamId   | number | true      | The person steamId 32            |
| steamId64 | string | true      | The person steamId 64            |

## onClientConnected

Triggers when the player trying to connect. Does work on bots. Can be canceled. Steam id is null if it's a bot.

### Properties

| name      | type        | read-only | description                        |
|-----------|-------------|-----------|------------------------------------|
| name      | string      | true      | Event name i.e. `client_connected` |
| isBot     | boolean     | true      |                                    |
| steamId   | number/null | true      | The person steamId 32              |
| steamId64 | string/null | true      | The person steamId 64              |
| ip        | string      | true      | The person ip address              |

## onPlayerActivate

Triggers when the player finishes connecting.

### Properties

| name   | type   | read-only | description                       |
|--------|--------|-----------|-----------------------------------|
| name   | string | true      | Event name i.e. `player_activate` |
| player | Player | true      |                                   |

## onPlayerSpawn

Triggers when the player spawned.

### Properties

| name   | type   | read-only | description                    |
|--------|--------|-----------|--------------------------------|
| name   | string | true      | Event name i.e. `player_spawn` |
| player | Player | true      |                                |

## onPlayerChangeTeam

Triggers when the player changes team.

### Properties

| name                | type    | read-only | description                   |
|---------------------|---------|-----------|-------------------------------|
| name                | string  | true      | Event name i.e. `player_team` |
| player              | Player  | true      |                               |
| team                | number  | true      |                               |
| oldTeam             | number  | true      |                               |
| becauseDisconnected | boolean | true      |                               |
| silent              | boolean | true      |                               |

## onPlayerHurt

Triggers when the player was hurt (take any damage).

### Properties

| name     | type        | read-only | description                   |
|----------|-------------|-----------|-------------------------------|
| name     | string      | true      | Event name i.e. `player_hurt` |
| player   | Player      | true      |                               |
| attacker | Player/null | true      |                               |
| hp       | number      | true      | How much left                 |
| armor    | number      | true      | How much left                 |
| weapon   | string      | true      |                               |
| damage   | object*     | true      |                               |
| hitGroup | number      | true      |                               |

*damage object:

| name  | type   | read-only | description |
|-------|--------|-----------|-------------|
| hp    | number | true      |             |
| armor | number | true      |             |

## onMapShutdown

Triggers when the map ends.

### Properties

| name | type   | read-only | description                    |
|------|--------|-----------|--------------------------------|
| name | string | true      | Event name i.e. `map_shutdown` |

## onPlayerChat

Triggers when the player sent message in chat.

### Properties

| name     | type    | read-only | description                   |
|----------|---------|-----------|-------------------------------|
| name     | string  | true      | Event name i.e. `player_chat` |
| player   | Player  | true      |                               |
| message  | string  | true      |                               |
| teamOnly | boolean | true      | Team only chat or global chat |

## onGameMessage (not tested)

Map events?

### Properties

| name    | type   | read-only | description                    |
|---------|--------|-----------|--------------------------------|
| name    | string | true      | Event name i.e. `game_message` |
| message | string | true      |                                |
| target  | string | true      |                                |

## onMapLoaded

Triggers every time new map loaded.

### Properties

| name   | type   | read-only | description                  |
|--------|--------|-----------|------------------------------|
| name   | string | true      | Event name i.e. `map_loaded` |
| map    | string | true      |                              |
| oldMap | string | true      |                              |

## onRoundEnd

Triggers every time round ended.

### Properties

| name        | type   | read-only | description                 |
|-------------|--------|-----------|-----------------------------|
| name        | string | true      | Event name i.e. `round_end` |
| winner      | number | true      |                             |
| reason      | number | true      |                             |
| message     | string | true      |                             |
| legacy      | number | true      |                             |
| playerCount | number | true      |                             |
| noMusic     | number | true      |                             |

## onRoundStart

Triggers every time round started.

### Properties

| name      | type   | read-only | description                   |
|-----------|--------|-----------|-------------------------------|
| name      | string | true      | Event name i.e. `round_start` |
| timeLimit | number | true      |                               |
| fragLimit | number | true      |                               |
| objective | string | true      |                               |

## onFreezeTimeEnded

Triggers every time `mp_freezetime` is over.

### Properties

| name | type   | read-only | description                        |
|------|--------|-----------|------------------------------------|
| name | string | true      | Event name i.e. `round_freeze_end` |

## onPlayerDeath

Triggers every time a player or a bot died.

### Properties

| name             | type        | read-only | description                    |
|------------------|-------------|-----------|--------------------------------|
| name             | string      | true      | Event name i.e. `player_death` |
| assistFlash      | boolean     | true      |                                |
| weapon           | string      | true      |                                |
| weaponItemId     | string      | true      |                                |
| weaponFauxItemId | string      | true      |                                |
| headshot         | boolean     | true      |                                |
| dominated        | number      | true      |                                |
| revenge          | number      | true      |                                |
| wipe             | number      | true      |                                |
| penetrated       | number      | true      |                                |
| noReplay         | boolean     | true      |                                |
| noScope          | boolean     | true      |                                |
| throughSmoke     | boolean     | true      |                                |
| attackerBlind    | boolean     | true      |                                |
| distance         | number      | true      |                                |
| player           | Player      | true      |                                |
| attacker         | Player/null | true      |                                |
| assister         | Player/null | true      |                                |

## onPlayerFootstep

Triggers on every player footstep.

### Properties

| name   | type   | read-only | description                       |
|--------|--------|-----------|-----------------------------------|
| name   | string | true      | Event name i.e. `player_footstep` |
| player | Player | true      |                                   |

## onPropBreak

Triggers when spawned entity breaks.

### Properties

| name     | type        | read-only | description                  |
|----------|-------------|-----------|------------------------------|
| name     | string      | true      | Event name i.e. `break_prop` |
| entityId | number      | true      |                              |
| player   | Player/null | true      | Player who broke an entity   |

## onItemPurchase

Triggers when player purchase an item.

### Properties

| name    | type   | read-only | description                     |
|---------|--------|-----------|---------------------------------|
| name    | string | true      | Event name i.e. `item_purchase` |
| team    | number | true      |                                 |
| loadout | number | true      |                                 |
| weapon  | string | true      |                                 |
| player  | Player | true      |                                 |

## onBombBeginPlant

Triggers on bomb begin plant.

### Properties

| name   | type   | read-only | description                       |
|--------|--------|-----------|-----------------------------------|
| name   | string | true      | Event name i.e. `bomb_beginplant` |
| site   | number | true      |                                   |
| player | Player | true      |                                   |

## onBombPlanted

Triggers once bomb planted.

### Properties

| name   | type   | read-only | description                    |
|--------|--------|-----------|--------------------------------|
| name   | string | true      | Event name i.e. `bomb_planted` |
| site   | number | true      |                                |
| player | Player | true      |                                |

## onBombDefused

Triggers once bomb defused.

### Properties

| name   | type   | read-only | description                    |
|--------|--------|-----------|--------------------------------|
| name   | string | true      | Event name i.e. `bomb_defused` |
| site   | number | true      |                                |
| player | Player | true      |                                |

## onBombExploded

Triggers once bomb exploded.

### Properties

| name   | type   | read-only | description                     |
|--------|--------|-----------|---------------------------------|
| name   | string | true      | Event name i.e. `bomb_exploded` |
| site   | number | true      |                                 |
| player | Player | true      |                                 |

## onBombDropped

Triggers when player drops the bomb.

### Properties

| name     | type   | read-only | description                    |
|----------|--------|-----------|--------------------------------|
| name     | string | true      | Event name i.e. `bomb_dropped` |
| entityId | number | true      |                                |
| player   | Player | true      |                                |

## onBombPickup

Triggers when player pickup the bomb.

### Properties

| name   | type   | read-only | description                   |
|--------|--------|-----------|-------------------------------|
| name   | string | true      | Event name i.e. `bomb_pickup` |
| player | Player | true      |                               |

## onDefuserDropped

Triggers when player drop defuse kit.

### Properties

| name     | type   | read-only | description                       |
|----------|--------|-----------|-----------------------------------|
| name     | string | true      | Event name i.e. `defuser_dropped` |
| entityId | number | true      |                                   |

## onDefuserPickup

Triggers when player pickup defuse kit. Somehow it won't trigger on CT buys defuse kit.

### Properties

| name     | type   | read-only | description                      |
|----------|--------|-----------|----------------------------------|
| name     | string | true      | Event name i.e. `defuser_pickup` |
| entityId | number | true      |                                  |

## onBeginDefuse

Triggers when player starts defuse the bomb.

### Properties

| name   | type    | read-only | description                        |
|--------|---------|-----------|------------------------------------|
| name   | string  | true      | Event name i.e. `bomb_begindefuse` |
| hasKit | boolean | true      |                                    |
| player | Player  | true      |                                    |

## onAbortDefuse

Triggers when player stop defusing the bomb.

### Properties

| name   | type   | read-only | description                        |
|--------|--------|-----------|------------------------------------|
| name   | string | true      | Event name i.e. `bomb_abortdefuse` |
| player | Player | true      |                                    |

## onHostageBeginsFollowing

Triggers when hostage begins following player.

### Properties

| name    | type   | read-only | description                       |
|---------|--------|-----------|-----------------------------------|
| name    | string | true      | Event name i.e. `hostage_follows` |
| hostage | number | true      |                                   |
| player  | Player | true      |                                   |

## onHostageHurt

Triggers on hostage was hurt.

### Properties

| name    | type   | read-only | description                    |
|---------|--------|-----------|--------------------------------|
| name    | string | true      | Event name i.e. `hostage_hurt` |
| hostage | number | true      |                                |
| player  | Player | true      |                                |

## onHostageRescued

Triggers on hostage has been rescued.

### Properties

| name    | type   | read-only | description                       |
|---------|--------|-----------|-----------------------------------|
| name    | string | true      | Event name i.e. `hostage_rescued` |
| hostage | number | true      |                                   |
| site    | number | true      |                                   |
| player  | Player | true      |                                   |

## onHostageStopsFollowing

Triggers on hostage stopped following player (player died for example).

### Properties

| name    | type   | read-only | description                              |
|---------|--------|-----------|------------------------------------------|
| name    | string | true      | Event name i.e. `hostage_stopsfollowing` |
| hostage | number | true      |                                          |
| player  | Player | true      |                                          |

## onWeaponFire

Triggers on weapon shoots.

### Properties

| name     | type    | read-only | description                   |
|----------|---------|-----------|-------------------------------|
| name     | string  | true      | Event name i.e. `weapon_fire` |
| weapon   | string  | true      |                               |
| silenced | boolean | true      |                               |
| player   | Player  | true      |                               |

## onWeaponReload

Triggers on weapon reload.

### Properties

| name   | type   | read-only | description                     |
|--------|--------|-----------|---------------------------------|
| name   | string | true      | Event name i.e. `weapon_reload` |
| player | Player | true      |                                 |

## onWeaponZoom

Triggers on weapon zoom.

### Properties

| name   | type   | read-only | description                   |
|--------|--------|-----------|-------------------------------|
| name   | string | true      | Event name i.e. `weapon_zoom` |
| player | Player | true      |                               |

## onPlayerBlind

Triggers when player got blinded.

### Properties

| name          | type        | read-only | description                    |
|---------------|-------------|-----------|--------------------------------|
| name          | string      | true      | Event name i.e. `player_blind` |
| player        | Player      | true      |                                |
| attacker      | Player/null | true      |                                |
| entityId      | number      | true      |                                |
| blindDuration | number      | true      |                                |

