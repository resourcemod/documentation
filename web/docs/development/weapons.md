---
sidebar_position: 4
---

# Weapons

With the resourcemod `1.0.30-beta` update, you now have the ability to use the Weapons API. At the moment it is still beta API and not all possible methods are available.

## Give weapon

To give a weapon to a player, the following script must be performed

```jsx title="addons/resourcemod/src/server.js"
const {events, Weapon} = require('resourcemod');
...
events.onPlayerChat((event) => {
    if (event.message.startsWith('!give_ak')) {
        event.player.giveWeapon(Weapon.Ak47)
    }
})
```

or directly with Weapons API

```jsx title="addons/resourcemod/src/server.js"
const {events, weapons, Weapon} = require('resourcemod');
...
events.onPlayerChat((event) => {
    if (event.message.startsWith('!give_ak')) {
        weapons.give(event.player.slot, Weapon.Ak47)
    }
})
```

### Weapon enum
To simplify weapon naming we have developed the enum:

```jsx
enum Weapon {
    Ak47 = "weapon_ak47",
    Aug = "weapon_aug",
    Awp = "weapon_awp",
    Bizon = "weapon_bizon",
    C4 = "weapon_c4",
    Deagle = "weapon_deagle",
    Decoy = "weapon_decoy",
    Elite = "weapon_elite",
    Famas = "weapon_famas",
    FiveSeven = "weapon_fiveseven",
    Flash = "weapon_flashbang",
    G3SG1 = "weapon_g3sg1",
    Galilar = "weapon_galilar",
    Glock = "weapon_glock",
    HealShot = "weapon_healthshot",
    HEGrenade = "weapon_hegrenade",
    HKP2000 = "weapon_hkp2000",
    IncGrenade = "weapon_incgrenade",
    Knife = "weapon_knife",
    M249 = "weapon_m249",
    M4A1 = "weapon_m4a1",
    Mac10 = "weapon_mac10",
    Mag7 = "weapon_mag7",
    Molotov = "weapon_molotov",
    Mp7 = "weapon_mp7",
    Negev = "weapon_negev",
    Nova = "weapon_nova",
    P250 = "weapon_p250",
    P90 = "weapon_p90",
    SawedOff = "weapon_sawedoff",
    SCAR20 = "weapon_scar20",
    SG556 = "weapon_sg556",
    Smoke = "weapon_smokegrenade",
    SSH08 = "weapon_ssg08",
    Taser = "weapon_taser",
    Tec9 = "weapon_tec9",
    UMP45 = "weapon_ump45",
    XM1014 = "weapon_xm1014",
}
```

## Drop weapon

```jsx title="addons/resourcemod/src/server.js"
const {events, Weapon} = require('resourcemod');
...
events.onPlayerChat((event) => {
    if (event.message.startsWith('!drop')) {
        event.player.dropWeapon()
    }
})
```

or directly with Weapons API

```jsx title="addons/resourcemod/src/server.js"
const {events, weapons, Weapon} = require('resourcemod');
...
events.onPlayerChat((event) => {
    if (event.message.startsWith('!drop')) {
        weapons.drop(event.player.slot)
    }
})
```

## Getting player loadout

We have developed a system where you can get the name of the weapon in any player loadout slot.

```jsx title="addons/resourcemod/src/server.js"
const {events, weapons, GearSlot} = require('resourcemod');
...
events.onPlayerChat((event) => {
    console.log(weapons.getWeaponFromGearSlot(event.player.slot, GearSlot.Rifle))
    console.log(weapons.getWeaponFromGearSlot(event.player.slot, GearSlot.Pistol))
    console.log(weapons.getWeaponFromGearSlot(event.player.slot, GearSlot.Knife))
    console.log(weapons.getWeaponFromGearSlot(event.player.slot, GearSlot.Grenades))
    console.log(weapons.getWeaponFromGearSlot(event.player.slot, GearSlot.C4))
    console.log(weapons.getWeaponFromGearSlot(event.player.slot, GearSlot.Boosts))
    console.log(weapons.getWeaponFromGearSlot(event.player.slot, GearSlot.Utility))
    console.log(weapons.getWeaponFromGearSlot(event.player.slot, GearSlot.Count))
    console.log(weapons.getWeaponFromGearSlot(event.player.slot, GearSlot.CurrentWeapon))
    console.log(weapons.getWeaponFromGearSlot(event.player.slot, GearSlot.First))
    console.log(weapons.getWeaponFromGearSlot(event.player.slot, GearSlot.Last))
});
```

or just receive current players weapon:
```jsx title="addons/resourcemod/src/server.js"
const {events, Weapon} = require('resourcemod');
...
events.onPlayerChat((event) => {
    if (event.player.currentWeapon == Weapon.Ak47) {
        console.log("Ak!")
        return;
    }
    console.log("Not ak..")
});
```