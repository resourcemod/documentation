---
sidebar_position: 8
---

# Supported Events
As we create a more user-friendly API for server creators - we don't currently support all events. Below is the list of events supported by the latest public version of ResourceMod.
Documentation will be developed further over time.

## onItemPickup
```jsx title=ItemPickupEvent
class ItemPickupEvent {
    constructor(name, item, silent, defindex, player) {
        this.name = name
        this.item = item
        this.player = player
        this.silent = silent
        this.defindex = defindex
        this.getName = () => {
            return this.name
        }
    
        this.getItem = () => {
            return this.item
        }
    
        this.getPlayer = () => {
            return this.player
        }
    
        this.isSilent = () => {
            return this.isSilent
        }
    
        this.getDefIndex = () => {
            return this.defindex
        }
    }
}
```

## onClientPutInServer
```jsx
class ClientPutInServerEvent {
    constructor(name, player) {
        this.name = name
        this.player = player
        this.getName = () => {
            return this.name
        }
    
        this.getPlayer = () => {
            return this.player
        }
    }
}
```

## onClientDisconnected
```jsx
class ClientDisconnectedEvent {
    constructor(name, player) {
        this.name = name
        this.player = player
        this.getName = () => {
            return this.name
        }
    
        this.getPlayer = () => {
            return this.player
        }
    }
}
```

## onClientConnect
```jsx
class ClientConnectEvent {
    constructor(name, steamId) {
        this.name = name
        this.steamId = steamId
        this.getName = () => {
            return this.name
        }
    
        this.getSteamId = () => {
            return this.steamId ?? undefined
        }
    
        this.getSteamId64 = () => {
            if (this.getSteamId() == undefined) return undefined // bots
            return (BigInt(this.getSteamId()) + BigInt(76561197960265728)).toString();
        }
    }
}
```

## onClientConnected
```jsx
class ClientConnectedEvent {
    constructor(name, steamId, ip, isBot) {
        this.name = name
        this.steamId = steamId
        this.ip = ip
        this._bot = isBot
        this.isBot = () => {
            return this._bot
        }

        this.getSteamId = () => {
            return this.steamId ?? undefined
        }

        this.getSteamId64 = () => {
            if (this.getSteamId() == undefined) return undefined // bots
            return (BigInt(this.getSteamId()) + BigInt(76561197960265728)).toString();
        }

        this.getIp = () => {
            return this.ip
        }
    }
}
```

## onPlayerActivate
```jsx
class PlayerActivateEvent {
    constructor(name, player) {
        this.name = name
        this.player = player

        this.getName = () => {
            return this.name
        }
    
        this.getPlayer = () => {
            return this.player
        }
    }
}
```

## onPlayerSpawn
```jsx
class PlayerSpawnEvent {
    constructor(name, player) {
        this.name = name
        this.player = player

        this.getName = () => {
            return this.name
        }
    
        this.getPlayer = () => {
            return this.player
        }
    }
}
```

## onPlayerChangeTeam
```jsx
class PlayerChangeTeamEvent {
    constructor(name, team, oldTeam, disconnect, silent, player) {
        this.name = name
        this.team = team
        this.oldTeam = oldTeam
        this.disconnect = disconnect
        this.silent = silent
        this.player = player

        this.getName = () => {
            return this.name
        }
    
        this.getTeam = () => {
            return this.team
        }
    
        this.getOldTeam = () => {
            return this.oldTeam
        }
    
        this.isBecauseDisconnected = () => {
            return this.disconnect
        }
    
        this.isSilent = () => {
            return this.silent
        }
    
        this.getPlayer = () => {
            return this.player
        }
    }
}
```

## onPlayerHurt
```jsx
class PlayerHurtEvent {
    constructor(name, hp, armor, weapon, damageHp, damageArmor, hitGoup, player, attacker) {
        this.name = name
        this.hp = hp
        this.armor = armor
        this.weapon = weapon
        this.damageHp = damageHp
        this.damageArmor = damageArmor
        this.hitGoup = hitGoup
        this.attacker = attacker
        this.player = player

        this.getName = () => {
            return this.name
        }
    
        this.getHp = () => {
            return this.hp
        }
    
        this.getArmor = () => {
            return this.armor
        }
        
        this.getWeapon = () => {
            return this.weapon
        }
    
        this.getDamage = () => {
            return {
                hp: this.damageHp,
                armor: this.damageArmor
            }
        }
    
        this.getHitGroup = () => {
            return this.hitGoup
        }
    
        this.getPlayer = () => {
            return this.player
        }
    
        this.getAttacker = () => {
            return this.attacker
        }
    }
}
```

## onMapShutdown
```jsx
class MapShutdownEvent {
    constructor(name) {
        this.name = name
        this.getName = () => {
            return this.name
        }
    }
}
```

## onPlayerChat
```jsx
class PlayerChatEvent {
    constructor(name, text, teamOnly, player) {
        this.name = name
        this.message = text
        this.teamOnly = teamOnly;
        this.player = player

        this.getMessage = () => {
            return this.message
        }

        this.getName = () => {
            return this.name
        }

        this.isTeamOnly = () => {
            return this.teamOnly
        }

        this.getPlayer = () => {
            this.player
        }
    }
}
```

## onGameMessage (not tested)
```jsx
class GameMessageEvent {
    constructor(name, text, target) {
        this.name = name
        this.message = text
        this.target = target

        this.getName = () => {
            return this.name
        }

        this.getMessage = () => {
            return this.message
        }

        this.getTarget = () => {
            return this.target
        }
    }
}
```

## onMapLoaded
```jsx
class MapLoadedEvent {
    constructor(name, map, oldMap) {
        this.name = name
        this.map = map
        this.oldMap = oldMap

        this.getName = () => {
            return this.name
        }

        this.getMap = () => {
            return this.map
        }

        this.getOldMap = () => {
            return this.oldMap
        }
    }
}
```

## onRoundEnd
```jsx
class RoundEndEvent {
    constructor(name, winner, reason, message, legacy, playerCount, noMusic) {
        this.name = name
        this.winner = winner
        this.reason = reason
        this.message = message
        this.legacy = legacy
        this.playerCount = playerCount
        this.noMusic = noMusic

        this.getName = () => {
            return this.name
        }

        this.getWinnerTeam = () => {
            return this.winner
        }

        this.getReason = () => {
            return this.reason
        }

        this.getMessage = () => {
            return this.message
        }

        this.getLegacy = () => {
            return this.legacy
        }

        this.getPlayersCount = () => {
            return this.playerCount
        }

        this.isMusicPlaying = () => {
            return !this.noMusic
        }
    }
}
```

## onRoundStart
```jsx
class RoundStartEvent {
    constructor(name, timeLimit, fragLimit, objective) {
        this.name = name
        this.timeLimit = timeLimit
        this.fragLimit = fragLimit
        this.objective = objective

        this.getName = () => {
            return this.name
        }

        this.getTimeLimit = () => {
            return this.timeLimit
        }

        this.getFragLimit = () => {
            return this.fragLimit
        }

        this.getObjective = () => {
            return this.objective
        }
    }
}
```

## onFreezeTimeEnded
```jsx
class FreezeTimeEndedEvent {
    constructor(name) {
        this.name = name

        this.getName = () => {
            return this.name
        }
    }
}
```

## onPlayerDeath
```jsx
class PlayerDeathEvent {
    constructor(name, assistFlash, weapon, weaponItemId, weaponFauxItemId, weaponOriginalOwnerSteamId, headshot, dominated, revenge, wipe, penetrated, noReplay, noScope, throughSmoke, attackerBlind, distance, player, attacker, assister) {
        this.name = name
        this.assistFlash = assistFlash
        this.weapon = weapon
        this.weaponItemId = weaponItemId
        this.weaponFauxItemId = weaponFauxItemId
        this.weaponOriginalOwnerSteamId = weaponOriginalOwnerSteamId
        this.headshot = headshot
        this.dominated = dominated
        this.revenge = revenge
        this.wipe = wipe
        this.penetrated = penetrated
        this.noReplay = noReplay
        this.noScope = noScope
        this.throughSmoke = throughSmoke
        this.attackerBlind = attackerBlind
        this.distance = distance

        this.player = player
        this.attacker = attacker
        this.assister = assister

        this.getName = () => {
            return this.name
        }
    
        this.isFlashAssisted = () => {
            return this.assistFlash
        }

        this.getWeapon = () => {
            return this.weapon
        }

        this.getWeaponDetails = () => {
            return {
                name: this.weapon,
                itemId: this.weaponItemId,
                fauxId: this.weaponFauxItemId,
                originalOwnerSteamId: this.originalOwnerSteamId,
                originalOwnerSteamId64: () => {
                    if (this.originalOwnerSteamId === 0) {
                        return 0;
                    }
                    return (BigInt(this.originalOwnerSteamId) + BigInt(76561197960265728)).toString();
                }
            }
        }

        this.isHeadshot = () => {
            return this.headshot
        }

        this.getDominated = () => {
            return this.dominated
        }

        this.getRevenge = () => {
            return this.revenge
        }

        this.getWipe = () => {
            return this.wipe
        }

        this.getPenetrated = () => {
            return this.penetrated
        }

        this.hasReplay = () => {
            return !this.noReplay
        }

        this.isNoScope = () => {
            return this.noScope
        }

        this.isThroughSmoke = () => {
            return this.throughSmoke
        }

        this.isAttackerWasBlind = () => {
            return this.attackerBlind
        }

        this.getDistance = () => {
            return this.distance
        }

        this.getPlayer = () => {
            return this.player
        }

        this.getAttacker = () => {
            return this.attacker
        }

        this.getAssister = () => {
            return this.assister
        }
    }
}
```

## onPlayerFootstep
```jsx
class PlayerFootstepEvent {
    constructor(name, player) {
        this.name = name
        this.player = player

        this.getName = () => {
            return this.name
        }

        this.getPlayer = () => {
            this.player
        }
    }
}
```

## onPropBreak

```jsx
class BreakPropEvent {
    constructor(name, entityId, player) {
        this.name = name
        this.entityId = entityId
        this.player = player

        this.getName = () => {
            return this.name
        }

        this.getEntityId = () => {
            return this.entityId
        }

        this.getPlayer = () => {
            this.player
        }
    }
}
```

## onItemPurchase
```jsx
class ItemPurchaseEvent {
    constructor(name, team, loadout, weapon, player) {
        this.name = name
        this.team = team
        this.loadout = loadout
        this.weapon = weapon
        this.player = player

        this.getName = () => {
            return this.name
        }

        this.getTeam = () => {
            return this.team
        }

        this.getLoadout = () => {
            return this.loadout
        }

        this.getWeapon = () => {
            return this.weapon
        }

        this.getPlayer = () => {
            this.player
        }
    }
}
```

## onBombBeginPlant
```jsx
class BombBeginPlantEvent {
    constructor(name, site, player) {
        this.name = name
        this.site = site
        this.player = player

        this.getName = () => {
            return this.name
        }

        this.getSite = () => {
            return this.site
        }

        this.getPlayer = () => {
            return this.player
        }
    }
}
```

## onBombPlanted
```jsx
class BombPlantedEvent {
    constructor(name, site, player) {
        this.name = name
        this.site = site
        this.player = player

        this.getName = () => {
            return this.name
        }

        this.getSite = () => {
            return this.site
        }

        this.getPlayer = () => {
            return this.player
        }
    }
}
```

## onBombDefused
```jsx
class BombDefusedEvent {
    constructor(name, site, player) {
        this.name = name
        this.site = site
        this.player = player

        this.getName = () => {
            return this.name
        }

        this.getSite = () => {
            return this.site
        }

        this.getPlayer = () => {
            return this.player
        }
    }
}
```

## onBombExploded
```jsx
class BombExplodedEvent {
    constructor(name, site, player) {
        this.name = name
        this.site = site
        this.player = player

        this.getName = () => {
            return this.name
        }

        this.getSite = () => {
            return this.site
        }

        this.getPlayer = () => {
            return this.player
        }
    }
}
```

## onBombDropped
```jsx
class BombDroppedEvent {
    constructor(name, entityId, player) {
        this.name = name
        this.entityId = entityId
        this.player = player

        this.getName = () => {
            return this.name
        }

        this.getEntityId = () => {
            return this.entityId
        }

        this.getPlayer = () => {
            return this.player
        }
    }
}
```

## onBombPickup
```jsx
class BombPickedUpEvent {
    constructor(name, player) {
        this.name = name
        this.player = player

        this.getName = () => {
            return this.name
        }

        this.getPlayer = () => {
            return this.player
        }
    }
}
```

## onDefuserDropped
```jsx
class DefuserDroppedEvent {
    constructor(name, entityId) {
        this.name = name
        this.entityId = entityId

        this.getName = () => {
            return this.name
        }

        this.getEntityId = () => {
            return this.entityId
        }
    }
}
```

## onDefuserPickup
```jsx
class DefuserPickupEvent {
    constructor(name, entityId, player) {
        this.name = name
        this.entityId = entityId
        this.player = player

        this.getName = () => {
            return this.name
        }

        this.getEntityId = () => {
            return this.entityId
        }

        this.getPlayer = () => {
            return this.player
        }
    }
}
```

## onBeginDefuse
```jsx
class BeginDefuseEvent {
    constructor(name, hasKit, player) {
        this.name = name
        this.hasKit = hasKit
        this.player = player

        this.getName = () => {
            return this.name
        }

        this.withKit = () => {
            return this.hasKit
        }

        this.player = () => {
            return this.player
        }
    }
}
```

## onAbortDefuse
```jsx
class AbortDefuseEvent {
    constructor(name, player) {
        this.name = name
        this.player = player

        this.getName = () => {
            return this.name
        }

        this.getPlayer = () => {
            return this.player
        }
    }
}
```

## onHostageBeginsFollowing
```jsx
class HostageBeginsFollowingEvent {
    constructor(name, hostage, player) {
        this.name = name
        this.hostage = hostage
        this.player = player

        this.getName = () => {
            return this.name
        }

        this.getHostage = () => {
            return this.hostage
        }

        this.getPlayer = () => {
            return this.player
        }
    }
}
```

## onHostageHurt
```jsx
class HostageHurtEvent {
    constructor(name, hostage, player) {
        this.name = name
        this.hostage = hostage
        this.player = player

        this.getName = () => {
            return this.name
        }

        this.getHostage = () => {
            return this.hostage
        }

        this.getPlayer = () => {
            return this.player
        }
    }
}
```

## onHostageRescued
```jsx
class HostageRescuedEvent {
    constructor(name, hostage, site, player) {
        this.name = name
        this.hostage = hostage
        this.site = site
        this.player = player

        this.getName = () => {
            return this.name
        }

        this.getHostage = () => {
            return this.hostage
        }

        this.getSite = () => {
            return this.site
        }

        this.getPlayer = () => {
            return this.player
        }
    }
}
```

## onHostageStopsFollowing
```jsx
class HostageStopsFollowingEvent {
    constructor(name, hostage, player) {
        this.name = name
        this.hostage = hostage
        this.player = player

        this.getName = () => {
            return this.name
        }

        this.getHostage = () => {
            return this.hostage
        }

        this.getPlayer = () => {
            return this.player
        }
    }
}
```

## onWeaponFire
```jsx
class WeaponFireEvent {
    constructor(name, weapon, silenced, player) {
        this.name = name
        this.weapon = weapon
        this.silenced = silenced
        this.player = player

        this.getName = () => {
            return this.name
        }

        this.getWeapon = () => {
            return this.weapon
        }

        this.isSilenced = () => {
            return this.silenced
        }

        this.getPlayer = () => {
            return this.player
        }
    }
}
```
## onWeaponReload
```jsx
class WeaponReloadEvent {
    constructor(name, player) {
        this.name = name
        this.player = player

        this.getName = () => {
            return this.name
        }

        this.getPlayer = () => {
            return this.player
        }
    }
}
```

## onWeaponZoom
```jsx
class WeaponZoomEvent {
    constructor(name, player) {
        this.name = name
        this.player = player

        this.getName = () => {
            return this.name
        }

        this.getPlayer = () => {
            return this.player
        }
    }
}
```
## onPlayerBlind
```jsx
class PlayerBlindEvent {
    constructor(name, entityId, blindDuration, player, attacker) {
        this.name = name
        this.entityId = entityId
        this.blindDuration = blindDuration
        this.player = player
        this.attacker = attacker

        this.getName = () => {
            return this.name
        }

        this.getEntityId = () => {
            return this.entityId
        }

        this.getDuration = () => {
            return this.blindDuration
        }

        this.getPlayer = () => {
            return this.player
        }

        this.getAttacker = () => {
            return this.attacker
        }
    }
}
```