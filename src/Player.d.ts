import { Player } from './__aoetypes'
import { RT } from './__enums'

/**
 *
 */
export function Player_AddAbility(): void

/**
 *
 */
export function Player_AddAbilityLockoutZone(): void

/**
 *
 */
export function Player_AddUnspentCommandPoints(): void

/**
 *
 */
export function Player_CanCastAbilityOnEntity(): void

/**
 *
 */
export function Player_CanCastAbilityOnPlayer(): void

/**
 *
 */
export function Player_CanCastAbilityOnPosition(): void

/**
 *
 */
export function Player_CanCastAbilityOnSquad(): void

/**
 *
 */
export function Player_CanConstruct(): void

/**
 *
 */
export function Player_CanPlaceStructureOnPosition(): void

/**
 *
 */
export function Player_CanSeeEntity(): void

/**
 *
 */
export function Player_CanSeePosition(): void

/**
 *
 */
export function Player_CanSeeSquad(): void

/**
 *
 */
export function Player_ClearAvailabilities(): void

/**
 *
 */
export function Player_ClearPopCapOverride(): void

/**
 *
 */
export function Player_ClearStateModelEnumTableTarget(): void

/**
 *
 */
export function Player_ClearStateModelTarget(): void

/**
 *
 */
export function Player_CompleteUpgrade(): void

/**
 *
 */
export function Player_FindFirstEnemyPlayer(): void

/**
 *
 */
export function Player_FindFirstNeutralPlayer(): void

/**
 * Gets a player from a player ID
 * @param playerId Player ID
 * @returns The player that is associated with this player ID
 */
export function Player_FromId(playerId: number): Player

/**
 *
 */
export function Player_GetAbilityBPCost(): void

/**
 *
 */
export function Player_GetAIType(): void

/**
 *
 */
export function Player_GetAllEntities(): void

/**
 *
 */
export function Player_GetCurrentPopulation(): void

/**
 *
 */
export function Player_GetDisplayName(): void

/**
 *
 */
export function Player_GetEntities(): void

/**
 *
 */
export function Player_GetEntitiesEGroup(): void

/**
 *
 */
export function Player_GetEntityBPCost(): void

/**
 *
 */
export function Player_GetEntityCount(): void

/**
 *
 */
export function Player_GetEntityCountByUnitType(): void

/**
 *
 */
export function Player_GetEntityName(): void

/**
 *
 */
export function Player_GetID(): void

/**
 *
 */
export function Player_GetMapEntryPosition(): void

/**
 *
 */
export function Player_GetMaxPopulation(): void

/**
 *
 */
export function Player_GetNumGatheringSquads(): void

/**
 *
 */
export function Player_GetNumStrategicPoints(): void

/**
 *
 */
export function Player_GetNumVictoryPoints(): void

/**
 *
 */
export function Player_GetRace(): void

/**
 *
 */
export function Player_GetRaceName(): void

/**
 *
 */
export function Player_GetRelationship(): void

/**
 *
 */
export function Player_GetResource(): void

/**
 *
 */
export function Player_GetResourceRate(): void

/**
 *
 */
export function Player_GetResources(): void

/**
 *
 */
export function Player_GetSlotIndex(): void

/**
 *
 */
export function Player_GetSquadBPCost(): void

/**
 *
 */
export function Player_GetSquadCount(): void

/**
 *
 */
export function Player_GetSquads(): void

/**
 *
 */
export function Player_GetStartingPosition(): void

/**
 *
 */
export function Player_GetState(): void

/**
 *
 */
export function Player_GetStateModelBool(): void

/**
 *
 */
export function Player_GetStateModelEntityTarget(): void

/**
 *
 */
export function Player_GetStateModelEnumTableBool(): void

/**
 *
 */
export function Player_GetStateModelEnumTableEntityTarget(): void

/**
 *
 */
export function Player_GetStateModelEnumTableFloat(): void

/**
 *
 */
export function Player_GetStateModelEnumTableInt(): void

/**
 *
 */
export function Player_GetStateModelEnumTablePlayerTarget(): void

/**
 *
 */
export function Player_GetStateModelEnumTableSquadTarget(): void

/**
 *
 */
export function Player_GetStateModelEnumTableVector3f(): void

/**
 *
 */
export function Player_GetStateModelFloat(): void

/**
 *
 */
export function Player_GetStateModelInt(): void

/**
 *
 */
export function Player_GetStateModelPlayerTarget(): void

/**
 *
 */
export function Player_GetStateModelSquadTarget(): void

/**
 *
 */
export function Player_GetStateModelVector3f(): void

/**
 *
 */
export function Player_GetStrategicPointCaptureProgress(): void

/**
 * Gets the team for a given player
 * @param player Player
 * @returns The team that the player is on
 */
export function Player_GetTeam(player: Player): number

/**
 *
 */
export function Player_GetUIColour(): void

/**
 *
 */
export function Player_GetUnitCount(): void

/**
 *
 */
export function Player_GetUpgradeBPCost(): void

/**
 *
 */
export function Player_GetUpgradeBPCostByResource(): void

/**
 *
 */
export function Player_HasAbility(): void

/**
 *
 */
export function Player_HasCapturingSquadNearStrategicPoint(): void

/**
 *
 */
export function Player_HasEntity(): void

/**
 *
 */
export function Player_HasMapEntryPosition(): void

/**
 *
 */
export function Player_HasUpgrade(): void

/**
 *
 */
export function Player_IsAbilityActive(): void

/**
 *
 */
export function Player_IsAlive(): void

/**
 *
 */
export function Player_IsHuman(): void

/**
 *
 */
export function Player_IsSurrendered(): void

/**
 *
 */
export function Player_IsValid(): void

/**
 *
 */
export function Player_NumUpgradeComplete(): void

/**
 *
 */
export function Player_ObserveRelationship(): void

/**
 *
 */
export function Player_ObserveReputation(): void

/**
 *
 */
export function Player_RemoveAbilityLockoutZone(): void

/**
 *
 */
export function Player_RemoveAllUpgrades(): void

/**
 *
 */
export function Player_RemoveUpgrade(): void

/**
 *
 */
export function Player_ResetAbilityCooldowns(): void

/**
 *
 */
export function Player_ResetResource(): void

/**
 *
 */
export function Player_SetAbilityAvailabilityInternal(): void

/**
 *
 */
export function Player_SetAllCommandAvailabilityInternal(): void

/**
 *
 */
export function Player_SetCommandAvailabilityInternal(): void

/**
 *
 */
export function Player_SetConstructionMenuAvailabilityInternal(): void

/**
 *
 */
export function Player_SetDefaultSquadMoodMode(): void

/**
 *
 */
export function Player_SetEntityProductionAvailabilityInternal(): void

/**
 * Overrides the pop cap for a player
 * @param player Player
 * @param amount Amount to set the pop cap to
 */
export function Player_SetPopCapOverride(player: Player, amount: number): void

/**
 *
 */
export function Player_SetRelationship(): void

/**
 *
 */
export function Player_SetReputation(): void

/**
 * Sets a resource to a specific number for a specific player
 * @param player Player for which to set the resource
 * @param resourceType Resource type
 * @param amount Amount to set
 */
export function Player_SetResource(
    player: Player,
    resourceType: RT,
    amount: number
): void

/**
 *
 */
export function Player_SetResourceInternal(): void

/**
 *
 */
export function Player_SetResources(): void

/**
 *
 */
export function Player_SetSquadProductionAvailabilityInternal(): void

/**
 *
 */
export function Player_SetStateModelBool(): void

/**
 *
 */
export function Player_SetStateModelEntityTarget(): void

/**
 *
 */
export function Player_SetStateModelEnumTableBool(): void

/**
 *
 */
export function Player_SetStateModelEnumTableEntityTarget(): void

/**
 *
 */
export function Player_SetStateModelEnumTableFloat(): void

/**
 *
 */
export function Player_SetStateModelEnumTableInt(): void

/**
 *
 */
export function Player_SetStateModelEnumTablePlayerTarget(): void

/**
 *
 */
export function Player_SetStateModelEnumTableSquadTarget(): void

/**
 *
 */
export function Player_SetStateModelEnumTableVector3f(): void

/**
 *
 */
export function Player_SetStateModelFloat(): void

/**
 *
 */
export function Player_SetStateModelInt(): void

/**
 *
 */
export function Player_SetStateModelPlayerTarget(): void

/**
 *
 */
export function Player_SetStateModelSquadTarget(): void

/**
 *
 */
export function Player_SetStateModelVector3f(): void

/**
 *
 */
export function Player_SetUpgradeAvailabilityInternal(): void

/**
 *
 */
export function Player_StopAbility(): void
