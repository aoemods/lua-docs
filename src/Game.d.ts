import { Player } from './__aoetypes'

/**
 *
 */
export function Game_AIControlLocalPlayer(): void

/**
 *
 */
export function Game_ConvertInputEnabledFlagEnumToInt(): void

/**
 *
 */
export function Game_ConvertVisibilityFlagEnumToInt(): void

/**
 *
 */
export function Game_CurrentSystemTimeSeconds(): void

/**
 *
 */
export function Game_DeleteSaveGameDev(): void

/**
 *
 */
export function Game_EnableInput(): void

/**
 *
 */
export function Game_EndSubTextFade(): void

/**
 *
 */
export function Game_EndTextTitleFade(): void

/**
 *
 */
export function Game_FastForwardProduction(): void

/**
 *
 */
export function Game_FastForwardResourceIncome(): void

/**
 *
 */
export function Game_GetActiveLayerTags(): void

/**
 *
 */
export function Game_GetAppFrameNumber(): void

/**
 *
 */
export function Game_GetInputEnabledFlag(): void

/**
 * Gets the local player
 * @returns The local player
 */
export function Game_GetLocalPlayer(): Player

/**
 * Gets the local player's ID.
 * @returns The local player's ID
 */
export function Game_GetLocalPlayerID(): number

/**
 *
 */
export function Game_GetRenderFrameCount(): void

/**
 *
 */
export function Game_GetSaveGameExtension(): void

/**
 *
 */
export function Game_GetSaveGameFileSizeDev(): void

/**
 *
 */
export function Game_GetSimRate(): void

/**
 *
 */
export function Game_GetSPDifficulty(): void

/**
 *
 */
export function Game_GetTerrainTypeVariables(): void

/**
 *
 */
export function Game_GetVisibilityFlag(): void

/**
 *
 */
export function Game_HasLocalPlayer(): void

/**
 *
 */
export function Game_IsDataLocked(): void

/**
 *
 */
export function Game_IsFtue(): void

/**
 *
 */
export function Game_IsPaused(): void

/**
 *
 */
export function Game_IsPerformanceTest(): void

/**
 *
 */
export function Game_IsRTM(): void

/**
 *
 */
export function Game_IsSaving(): void

/**
 *
 */
export function Game_LaunchSPGeneratedMap(): void

/**
 *
 */
export function Game_LoadDataStore(): void

/**
 *
 */
export function Game_LoadFromFileDev(): void

/**
 *
 */
export function Game_LoadGame(): void

/**
 * Loads a scenario
 * @param scenarioName Name of the scenario to load. ex: "cdn_mongol_raid_ai_test"
 * @param n1 unknown
 */
export function Game_LoadSP(scenarioName: string, n1: number): void

/**
 *
 */
export function Game_LockRandom(): void

/**
 *
 */
export function Game_QuitApp(): void

/**
 *
 */
export function Game_QuitAppWithCode(): void

/**
 *
 */
export function Game_RemoveTableData(): void

/**
 *
 */
export function Game_RequestSetLocalPlayer(): void

/**
 *
 */
export function Game_RetrieveTableData(): void

/**
 *
 */
export function Game_SaveDataStore(): void

/**
 *
 */
export function Game_SaveGameExistsDev(): void

/**
 *
 */
export function Game_ScreenFade(): void

/**
 *
 */
export function Game_SendCustomChallengeEvent(): void

/**
 *
 */
export function Game_SetDataLock(): void

/**
 *
 */
export function Game_SetDefaultPlayerColours(): void

/**
 *
 */
export function Game_SetDefaultPlayerUIColours(): void

/**
 *
 */
export function Game_SetInputEnabledFlag(): void

/**
 *
 */
export function Game_SetPlayerColour(): void

/**
 *
 */
export function Game_SetPlayerSlotColour(): void

/**
 *
 */
export function Game_SetPlayerUIColour(): void

/**
 *
 */
export function Game_SetPlayerUISlotColour(): void

/**
 *
 */
export function Game_SetPostGameChatChannel(): void

/**
 *
 */
export function Game_SetSimRate(): void

/**
 *
 */
export function Game_SetVisibility(): void

/**
 *
 */
export function Game_SetVisibilityFlag(): void

/**
 *
 */
export function Game_SkipAllEvents(): void

/**
 *
 */
export function Game_SkipEvent(): void

/**
 *
 */
export function Game_StoreTableData(): void

/**
 *
 */
export function Game_SubTextFadeInternal(): void

/**
 *
 */
export function Game_TextTitleFade(): void

/**
 *
 */
export function Game_TransitionToState(): void

/**
 *
 */
export function Game_UnLockRandom(): void
