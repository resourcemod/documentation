---
sidebar_position: 7
---

# Supported Events
As we create a more user-friendly API for server creators - we don't currently support all events. Below is the list of events supported by the latest public version of ResourceMod.
Documentation will be developed further over time.

## server_spawn
### Methods
#### GetHostname()
#### GetAddress()
#### GetGame()
#### GetMap()
#### GetAddon()
#### GetOS()
#### GetPort()
#### GetMaxPlayers()
#### HasPassword()
#### IsDedicated()

## server_pre_shutdown
### Methods
#### GetReason()

## server_shutdown
### Methods
#### GetReason()

## server_message
### Methods
#### GetText()

## server_cvar
### Methods
#### GetCVarName()
#### GetCVarValue()

## player_activate
### Methods
#### GetPlayer()

## player_connect_full
### Methods
#### GetPlayer()

## player_full_update
### Methods
#### GetPlayer()

## player_connect
### Methods
#### GetPlayer()
#### IsBot()
#### GetName()
#### GetNetworkID()
#### GetAddress()
#### GetXuid()

## player_disconnect
### Methods
#### GetPlayer()
#### GetXuid()
#### GetName()
#### GetNetworkID()
#### GetReason()

## player_info
### Methods
#### GetPlayer()
#### GetSteamID()
#### GetName()
#### IsBot()

## player_spawn
### Methods
#### GetPlayer()

## player_team
### Methods
#### GetPlayer()
#### GetTeam()
#### GetOldTeam()
#### IsDisconnected()
#### IsSilent()
#### IsBot()

## player_changename
### Methods
#### GetOldName()
#### GetNewName()

## player_hurt
### Methods
#### GetPlayer()
#### GetAttacker()
#### GetHP()
#### GetArmor()
#### GetWeapon()
#### GetDamageHP()
#### GetDamageArmor()
#### GetHitGroup()

## player_chat (not working)
### Methods
#### IsTeamOnly()
#### GetUserID()
#### GetText()

## teamplay_broadcast_audio
### Methods
#### GetTeam()
#### GetSound()

## player_stats_updated
### Methods
#### IsForceUpload()

## team_info
### Methods
#### GetTeamID()
#### GetTeamName()

## team_score
### Methods
#### GetTeamID()
#### GetScore()

## map_shutdown

## map_transition

## hostname_changed
### Methods
#### GetHostname()

## difficulty_changed
### Methods
#### GetStrDifficulty()
#### GetNewDifficulty()
#### GetOldDifficulty()

## game_message
### Methods
#### GetTarget()
#### GetText()

## game_newmap
### Methods
#### GetMapName()

## round_start
### Methods
#### GetTimeLimit()
#### GetFragLimit()
#### GetObjective()

## round_end
### Methods
#### GetWinner()
#### GetReason()
#### GetMessage()
#### GetLegacy()
#### GetPlayerCount()
#### GetNoMusic()

## round_freeze_end

## player_death
### Methods
#### GetPlayer()
#### GetAttacker()
#### GetAssister()
#### GetLegacy()
#### GetWeapon()
#### GetWeaponItemID()
#### GetWeaponFauxItemID()
#### GetWeaponOriginalOwnerXUID()
#### IsHeadshot()
#### IsDominated()
#### IsRevenge()
#### IsWipe()
#### IsPenetrated()
#### NoReplay()
#### IsNoScope()
#### IsThroughSmoke()
#### IsAttackerWasBlind()
#### GetDistance()

## player_footstep
### Methods
#### GetPlayer()

## player_hintmessage
### Methods
#### GetMessage()

## break_breakable
### Methods
#### GetPlayer()
#### GetEntityIndex()
#### GetMaterial()

## break_prop
### Methods
#### GetPlayer()
#### GetEntityIndex()

## entity_killed
### Methods
#### GetKilledEntityIndex()
#### GetAttackerEntityIndex()
#### GetInflictorEntityIndex()
#### GetDamageBits()

## door_close
### Methods
#### GetPlayer()
#### IsCheckPoint()

## vote_started
### Methods
#### GetIssue()
#### GetParam1()
#### GetTeam()
#### GetInitiator()

## vote_failed
### Methods
#### GetTeam()

## vote_passed
### Methods
#### GetDetails()
#### GetParam1()
#### GetTeam()

## vote_changed
### Methods
#### GetOption1()
#### GetOption2()
#### GetOption3()
#### GetOption4()
#### GetOption5()
#### GetPotentialVotes()

## vote_cast_yes
### Methods
#### GetTeam()
#### GetEntityID()

## vote_cast_no
### Methods
#### GetTeam()
#### GetEntityID()

## achievement_event
### Methods
#### GetAchievementName()
#### GetCurrentValue()
#### GetMaxValue()

## achievement_earned
### Methods
#### GetPlayer()
#### GetAchievement()

## spec_target_updated
### Methods
#### GetPlayer()
#### GetTarget()

## spec_mode_updated
### Methods
#### GetPlayer()

## entity_visible
### Methods
#### GetPlayer()
#### GetSubject()
#### GetClassName()
#### GetEntityName()

## items_gifted
### Methods
#### GetPlayer()
#### GetItemDef()
#### GetNumGifts()
#### GetGiftIDx()
#### GetAccountID()

## player_score
### Methods
#### GetPlayer()
#### GetKills()
#### GetDeaths()
#### GetScore()

## player_shoot
### Methods
#### GetPlayer()
#### GetWeapon()
#### GetMode()

## game_init

## game_start
### Methods
#### GetRoundsLimit()
#### GetTimeLimit()
#### GetFragLimit()
#### GetObjective()

## game_end
### Methods
#### GetWinner()

## round_announce_match_point

## round_announce_final

## round_announce_last_round_half

## round_announce_match_start

## round_announce_warmup

## round_end_upload_stats

## round_officially_ended

## round_time_warning

## begin_new_match

## other_death
### Methods
#### GetOtherID()
#### GetOtherType()
#### GetAttacker()
#### GetWeapon()
#### GetWeaponItemID()
#### GetWeaponFauxItemID()
#### GetWeaponOriginalOwnerXuid()
#### IsHeadshot()
#### IsPenetrated()
#### IsNoScope()
#### IsThroughSmoke()
#### IsAttackerWasBlind()

## item_purchase
### Methods
#### GetPlayer()
#### GetTeam()
#### GetLoadout()
#### GetWeapon()

## bomb_beginplant
### Methods
#### GetPlayer()
#### GetSite()

## bomb_abortplant
### Methods
#### GetPlayer()
#### GetSite()

## bomb_planted
### Methods
#### GetPlayer()
#### GetSite()

## bomb_defused
### Methods
#### GetPlayer()
#### GetSite()

## bomb_exploded
### Methods
#### GetPlayer()
#### GetSite()

## bomb_dropped
### Methods
#### GetPlayer()
#### GetEntityIndex()

## bomb_pickup
### Methods
#### GetPlayer()

## defuser_dropped
### Methods
#### GetEntityID()

## defuser_pickup
### Methods
#### GetPlayer()
#### GetEntityID()

## bomb_begindefuse
### Methods
#### GetPlayer()
#### WithKit()

## bomb_abortdefuse
### Methods
#### GetPlayer()

## hostage_follows
### Methods
#### GetPlayer()
#### GetHostage()

## hostage_hurt
### Methods
#### GetPlayer()
#### GetHostage()

## hostage_killed
### Methods
#### GetPlayer()
#### GetHostage()

## hostage_rescued
### Methods
#### GetPlayer()
#### GetHostage()
#### GetSite()

## hostage_stops_following
### Methods
#### GetPlayer()
#### GetHostage()

## hostage_rescued_all

## hostage_call_for_help
### Methods
#### GetHostage()

## player_radio
### Methods
#### GetPlayer()
#### GetSlot()

## bomb_beep
### Methods
#### GetEntityIndex()

## weapon_fire
### Methods
#### GetPlayer()
#### GetWeapon()
#### IsSilenced()

## weapon_fire_on_empty
### Methods
#### GetPlayer()
#### GetWeapon()

## grenade_thrown
### Methods
#### GetPlayer()
#### GetWeapon()

## weapon_outofammo
### Methods
#### GetPlayer()

## weapon_reload
### Methods
#### GetPlayer()

## weapon_zoom
### Methods
#### GetPlayer()

## silencer_detach
### Methods
#### GetPlayer()

## inspect_weapon
### Methods
#### GetPlayer()

## player_spawned
### Methods
#### GetPlayer()
#### InRestart()

## item_pickup
### Methods
#### GetPlayer()
#### GetItem()
#### IsSilent()
#### GetDefIndex()

## item_pickup_slerp
### Methods
#### GetPlayer()
#### GetIndex()
#### GetBehavior()

## item_pickup_failed
### Methods
#### GetPlayer()
#### GetItem()
#### GetReason()
#### GetLimit()

## item_remove
### Methods
#### GetPlayer()
#### GetDefIndex()
#### GetItem()

## ammo_pickup
### Methods
#### GetPlayer()
#### GetIndex()
#### GetItem()

## item_equip
### Methods
#### GetPlayer()
#### GetItem()
#### CanZoom()
#### HasSilincer()
#### IsSilinced()
#### HasTracers()
#### GetWepType()
#### IsPainted()

## enter_buyzone
### Methods
#### GetPlayer()
#### CanBuy()

## exit_buyzone
### Methods
#### GetPlayer()
#### CanBuy()

## buytime_ended

## enter_bombzone
### Methods
#### GetPlayer()
#### HasBomb()
#### BombIsPlanted()

## exit_bombzone
### Methods
#### GetPlayer()
#### HasBomb()
#### BombIsPlanted()

## enter_rescue_zone
### Methods
#### GetPlayer()

## exit_rescue_zone
### Methods
#### GetPlayer()

## silencer_off
### Methods
#### GetPlayer()

## silencer_on
### Methods
#### GetPlayer()

## buymenu_open
### Methods
#### GetPlayer()

## buymenu_close
### Methods
#### GetPlayer()

## round_prestart

## round_poststart

## grenade_bounce
### Methods
#### GetPlayer()

## hegrenade_detonate
### Methods
#### GetPlayer()
#### GetEntityID()
#### GetX()
#### GetY()
#### GetZ()

## flashbang_detonate
### Methods
#### GetPlayer()
#### GetEntityID()
#### GetX()
#### GetY()
#### GetZ()


## smokegrenade_detonate
### Methods
#### GetPlayer()
#### GetEntityID()
#### GetX()
#### GetY()
#### GetZ()

## smokegrenade_expired
### Methods
#### GetPlayer()
#### GetEntityID()
#### GetX()
#### GetY()
#### GetZ()

## molotov_detonate
### Methods
#### GetPlayer()
#### GetX()
#### GetY()
#### GetZ()

## decoy_detonate
### Methods
#### GetPlayer()
#### GetEntityID()
#### GetX()
#### GetY()
#### GetZ()

## decoy_started
### Methods
#### GetPlayer()
#### GetEntityID()
#### GetX()
#### GetY()
#### GetZ()

## tagrenade_detonate
### Methods
#### GetPlayer()
#### GetEntityID()
#### GetX()
#### GetY()
#### GetZ()

## decoy_firing
### Methods
#### GetPlayer()
#### GetEntityID()
#### GetX()
#### GetY()
#### GetZ()

## bullet_impact
### Methods
#### GetPlayer()
#### GetX()
#### GetY()
#### GetZ()

## player_jump
### Methods
#### GetPlayer()

## player_blind
### Methods
#### GetPlayer()
#### GetAttacker()
#### GetEntityID()
#### GetDuration()

## player_falldamage (not working)
### Methods
#### GetPlayer()
#### GetDamage()

## door_moving
### Methods
#### GetPlayer()
#### GetEntIndex()

## switch_team
### Methods
#### GetNumPlayers()
#### GetNumSpectators()
#### GetAvgRank()
#### GetNumTSlotsFree()
#### GetNumCTSlotsFree()

## player_given_c4
### Methods
#### GetPlayer()

## bot_takeover
### Methods
#### GetPlayer()

## jointeam_failed
### Methods
#### GetPlayer()
#### GetReason()

## nextlevel_changed
### Methods
#### GetNextLevel()
#### GetMapGroup()
#### GetSkirmIsHMode()

## team_intro_start
## team_intro_end