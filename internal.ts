/**
 * ScoreboardMax API Types - Internal
 *
 * This file contains ALL type definitions including admin-only types.
 * These types are automatically generated from the ScoreboardMax API source code.
 *
 * Note: Admin types are only used in administrative applications and models with
 * these interfaces will not be returned by the API to non-admin users.
 *
 */

/**
 * Account creation/update request
 */
export interface AccountRequest {
  name: string | null;
  logoFilename: string | null;
}

/**
 * Account details response
 */
export interface AccountResponse {
  object: string;
  accountId: string;
  url: string;
  uri: string;
  name: string | null;
  logoFilename: string | null;
  logoUrl: string | null;
  logoPreviewUrl: string | null;
  plan: PlanResponse;
  storageUsed: number; 
  dateCreated: string;
  dateModified: string;
  subscriptionId: string | null;
  token?: string;
}

/**
 * Account response with admin fields
 */
export interface AccountResponseAdmin extends AccountResponse {
  paymentProvider: string | null;
  paymentProviderCustomerId: string | null;
}

/**
 * AI-generated talking points for a game
 */
export interface TalkingPointsResponse {
    /** Each element is a discrete talking point */
    content: string[];
    /** When the talking points were generated (ISO 8601) */
    dateCreated: string;
}

/**
 * API action identifiers
 */
export enum ApiAction {
    Create = "create",
    Read = "read",
    Update = "update",
    Delete = "delete",
    All = "*",
}

/**
 * API resource identifiers
 */
export enum ApiResource {
    All = "*",
    Account = "account",
    AccountList = "accountList",
    App = "app",
    AppList = "appList",
    Archive = "archive",
    ArchiveList = "archiveList",
    File = "file",
    FileList = "fileList",
    Auth = "auth",
    AuthList = "authList",
    Clock = "clock",
    ClockList = "clockList",
    Insight = "insight",
    Player = "player",
    PlayerList = "playerList",
    Roster = "roster",
    RosterList = "rosterList",
    Scoreboard = "scoreboard",
    ScoreboardList = "scoreboardList",
    ScoreboardLog = "scoreboardLog",
    ScoreboardLogList = "scoreboardLogList",
    Sponsor = "sponsor",
    SponsorList = "sponsorList",
    Team = "team",
    TeamList = "teamList",
    Upload = "upload",
    UploadList = "uploadList",
    User = "user",
    UserList = "userList",
    UserCredentials = "userCredentials",
    UserCredentialsList = "userCredentialsList",
    Overlay = "overlay",
    OverlayList = "overlayList",
    Preset = "preset",
    PresetList = "presetList",
    Game = "game",
    GameList = "gameList",
}

/**
 * App creation/update request
 */
export interface AppRequest {
    uploadId: string;
}

/**
 * App details response
 */
export interface AppResponse {
    object: string;
    url: string;
    uri: string;
    appId: string;
    version: string;
    name: string;
    description: string;
    type: AppType;
    manifest: AppManifest;
    accountId: string;
    dateCreated: string;
}

/**
 * App input field definition
 */
export type InputDefinition = SelectInput | BooleanInput | ColorInput | TextInput | NumberInput | RangeInput;

/**
 * App input field selection
 */
export type InputSelection = Record<string, string | number | boolean>;

/**
 * App manifest definition
 */
export interface AppManifest {
    type: AppType.Template;
    manifestVersion: number;
    name: string;
    description: string;
    version: string;
    templates: TemplateDefinition[];
}

/**
 * App type identifiers
 */
export enum AppType {
    Template = "template",
}

/**
 * Auth request with admin fields
 */
export interface AuthRequestAdmin extends AuthRequest {
  isAdmin: boolean;
}

/**
 * Auth response with admin fields
 */
export interface AuthResponseAdmin extends AuthResponse {
  isAdmin: boolean;
  isAssumed: boolean;
}

/**
 * Authentication method types
 */
export enum AuthType {
  Session = "session",
  Api = "api",
  Guest = "guest",
  ScoreboardView = "scoreboardView",
}

/**
 * Authentication request
 */
export interface AuthRequest {
  type: AuthType;
  description?: string | null;
  permissions: Permissions;
  dateExpires?: string;
}

/**
 * Authentication session model
 */
export interface Auth {
  authId: string;
  mask: string;
  accountId: string;
  userId?: string;
  type: AuthType;
  isAdmin: boolean;
  isAssumed?: boolean;
  description?: string | null;
  permissions: Permissions;
  dateCreated: string;
  dateModified: string;
  dateExpires?: string;
  dateLastUsed?: string;
  dateLastUserActivityUpdate?: string;
  ttl?: number;
}

/**
 * Authentication session response
 */
export interface AuthResponse {
  object: string;
  authId: string;
  url: string;
  uri: string;
  mask: string;
  accountId: string;
  account: AccountResponse | string;
  userId?: string;
  description?: string | null;
  permissions: Permissions;
  dateCreated: string;
  dateModified: string;
  dateExpires?: string;
  dateLastUsed?: string;
  dateNow: string;
  type: AuthType;
  token?: string;
}

/**
 * Available plan identifiers
 */
export enum PlanId {
    Basic = "basic",
    Plus = "plus",
    Pro = "pro",
}

/**
 * Base input field type
 */
export interface BaseInput {
    type: string;
    label: string;
    description?: string;
    default: any;
}

/**
 * Base insight team response shared across sports
 */
export interface InsightTeamBaseResponse {
    name: string;
    abbreviation: string;
    color: string;
    logoUrl: string | null;
    reference: string;
}

/**
 * Base settings shared across sports
 */
export interface ScoreboardSettingsBase {
    clockAscending: boolean;
    enableKeyboardShortcuts: boolean;
    showAccountLogo: boolean;
    showSponsors: boolean;
    sponsorFilter: string[] | null;
}

/**
 * Base team request shared across sports
 */
export interface ScoreboardTeamBaseRequest {
    teamId: string | null;
    name: string | undefined;
    description: string | null;
    color: string | undefined;
    logoFilename: string | null | undefined;
    rosterId: string | null;
    reference?: string;
}

/**
 * Base team response shared across sports
 */
export interface ScoreboardTeamBaseResponse {
    teamId: string | null;
    team: TeamResponse | string | null;
    name: string;
    abbreviation: string;
    description: string | null;
    color: string;
    logoFilename: string | null;
    logoUrl: string | null;
    logoPreviewUrl: string | null;
    rosterId: string | null;
    roster: string | RosterResponse | null;
    reference: string;
}

/**
 * Baseball game data request
 */
export interface BaseballDataRequest {
    inning: number;
    inningSegment: BaseballInningSegment;
    balls: number | null
    strikes: number | null;
    outs: number | null;
    runnerOnFirst: boolean;
    runnerOnSecond: boolean;
    runnerOnThird: boolean;
    isFinal: boolean;
    team1: BaseballScoreboardTeamRequest;
    team2: BaseballScoreboardTeamRequest;
    settings?: BaseballSettingsRequest;
}

/**
 * Baseball game data response
 */
export interface BaseballDataResponse {
    type: ScoreboardType;
    inning: number;
    inningSegment: BaseballInningSegment;
    balls: number | null
    strikes: number | null;
    outs: number | null;
    runnerOnFirst: boolean;
    runnerOnSecond: boolean;
    runnerOnThird: boolean;
    isFinal: boolean;
    team1: BaseballScoreboardTeamResponse;
    team2: BaseballScoreboardTeamResponse;
    settings: BaseballSettingsResponse;
}

/**
 * Baseball game settings model
 */
export interface BaseballSettings extends ScoreboardSettingsBase {
    showCount: boolean;
    showBaseRunners: boolean;
    showLineScore: boolean;
    showPitchCount: boolean;
    showBattingAverage: boolean;
    pitchClockLength?: number; 
    showPitchClock: boolean;
    showPitchClockWhenLow: boolean;
    enableClockAutomations: boolean;
    innings: number;
}

/**
 * Baseball settings request
 */
export interface BaseballSettingsRequest extends BaseballSettings {
}

/**
 * Baseball settings response
 */
export interface BaseballSettingsResponse extends BaseballSettings {
}

/**
 * Baseball team request
 */
export interface BaseballScoreboardTeamRequest extends ScoreboardTeamBaseRequest {
    runs: number;
    inningRuns: number[];
    hits: number;
    errors: number;
    pitcher: PlayerSummaryRequest | null;
    pitchCount: Record<string, number>;
    batter: PlayerSummaryRequest | null;
    battingRecord: Record<string, (boolean | null)[]>;
    battingList: PlayerSummaryRequest[];
    isHomeTeam: boolean;
}

/**
 * Baseball team response
 */
export interface BaseballScoreboardTeamResponse extends ScoreboardTeamBaseResponse {
    runs: number;
    inningRuns: number[];
    hits: number;
    errors: number;
    pitcher: PlayerSummaryResponse | null;
    pitchCount: Record<string, number>;
    batter: PlayerSummaryResponse | null;
    battingRecord: Record<string, (boolean | null)[]>;
    battingList: PlayerSummaryResponse[];
    isHomeTeam: boolean;
}

/**
 * Basketball game data request
 */
export interface BasketballDataRequest {
    period: BasketballPeriod;
    overtimeNumber?: number;
    team1: BasketballScoreboardTeamRequest;
    team2: BasketballScoreboardTeamRequest;
    settings?: BasketballSettingsRequest;
}

/**
 * Basketball game data response
 */
export interface BasketballDataResponse {
    type: ScoreboardType;
    period: BasketballPeriod;
    overtimeNumber?: number;
    team1: BasketballScoreboardTeamResponse;
    team2: BasketballScoreboardTeamResponse;
    settings: BasketballSettingsResponse;
}

/**
 * Basketball game insight analytics
 */
export interface BasketballInsightResponse {
    team1: BasketballInsightTeamResponse;
    team2: BasketballInsightTeamResponse;
    timelinePoints: TimelinePointResponse[];
    periodEndPoints: TimelinePointResponse[];
    runs: BasketballRunSummaryResponse[];
    periodLength: number;
    overtimeLength: number;
    gamePeriods: BasketballGamePeriods;
    overtimeCount: number;
    regulationLength: number;
    gameLength: number;
    leadChanges: number;
    largestLeadPointTeam1: TimelinePointResponse | null;
    largestLeadPointTeam2: TimelinePointResponse | null;
    periodStats: BasketballPeriodStatsResponse[];
    team1TimeLeadingPercent: number;
    team2TimeLeadingPercent: number;
    team1ShotBreakdown: BasketballShotBreakdownResponse;
    team2ShotBreakdown: BasketballShotBreakdownResponse;
    ties: number;
    largestStreakTeam1: BasketballLargestStreakResponse | null;
    largestStreakTeam2: BasketballLargestStreakResponse | null;
}

/**
 * Basketball game settings model
 */
export interface BasketballSettings extends ScoreboardSettingsBase {
    periodLength: number; 
    shotClockLength?: number; 
    shotClockSecondaryLength?: number; 
    halfLength: number; 
    overtimeLength: number; 
    showGameClock: boolean;
    showShotClock: boolean;
    showTimeouts: boolean;
    gamePeriods: BasketballGamePeriods;
    timeoutAllocation?: BasketballTimeoutAllocation;
    timeoutsFirstHalf?: number;
    timeoutsSecondHalf?: number;
    timeoutsTotal?: number;
    showTeamFouls: boolean;
    hasDoubleBonus: boolean;
    bonusThreshold?: number;
    doubleBonusThreshold?: number;
    enableClockAutomations: boolean;
    showShotClockWhenLow: boolean;
}

/**
 * Basketball insight team statistics
 */
export interface BasketballInsightTeamResponse extends InsightTeamBaseResponse {
    score: number;
}

/**
 * Basketball largest scoring streak
 */
export interface BasketballLargestStreak {
    /** Which team owns this streak */
    team: "team1" | "team2";
    /** Points scored by this team during the run */
    points: number;
    /** Points scored by the opponent during the run */
    opponentPoints: number;
    /** Human-readable period range (e.g., "Q2", "Q3-Q4", "OT1-OT2") */
    periodRange: string;
    /** Zero-based period index where the run started */
    startPeriodIndex: number;
    /** Zero-based period index where the run ended */
    endPeriodIndex: number;
}

/**
 * Basketball largest scoring streak response
 */
export interface BasketballLargestStreakResponse extends BasketballLargestStreak { }

/**
 * Basketball per-period statistics
 */
export interface BasketballPeriodStats {
    /** Zero-based period index (0 = first period) */
    periodIndex: number;
    /** Display label (e.g., "Q1", "H2", "OT1") */
    periodLabel: string;
    /** Points team 1 scored in this period */
    team1Points: number;
    /** Points team 2 scored in this period */
    team2Points: number;
    /** Team 1 cumulative score at end of this period */
    team1CumulativeScore: number;
    /** Team 2 cumulative score at end of this period */
    team2CumulativeScore: number;
    /** Number of lead changes within this period */
    leadChanges: number;
    /** Number of times the score became tied within this period */
    ties: number;
    /** Largest lead amount in this period (0 if always tied) */
    largestLeadAmount: number;
    /** Team that held the largest lead in this period (null if largestLeadAmount is 0) */
    largestLeadTeam: "team1" | "team2" | null;
    /** Seconds remaining on the period clock at the largest lead point (null if no clock data) */
    largestLeadClockSeconds: number | null;
    /** Team with the best scoring run in this period (null if no runs) */
    largestStreakTeam: "team1" | "team2" | null;
    /** Points scored by the streak team during the best run */
    largestStreakPoints: number;
    /** Opponent points during the best run */
    largestStreakOpponentPoints: number;
}

/**
 * Basketball per-period statistics response
 */
export interface BasketballPeriodStatsResponse extends BasketballPeriodStats { }

/**
 * Basketball period identifiers
 */
export enum BasketballPeriod {
    Pre = "pregame",
    First = "1",
    Second = "2",
    Half = "half",
    Third = "3",
    Fourth = "4",
    Overtime = "overtime",
    Final = "final",
}

/**
 * Basketball period structure options
 */
export enum BasketballGamePeriods {
    Quarters = "quarters",
    Halves = "halves",
}

/**
 * Basketball scoring run summary
 */
export interface BasketballRunSummary {
    /** Team responsible for the scoring run */
    team: "team1" | "team2";
    /** Points scored by the run team */
    points: number;
    /** Points scored by the opponent during the run */
    opponentPoints: number;
    /** Timeline sequence where the run began */
    startSeq: number;
    /** Timeline sequence where the run ended */
    endSeq: number;
    /** Leader at the start of the run */
    startLeader: "team1" | "team2" | null;
    /** Leader at the end of the run */
    endLeader: "team1" | "team2" | null;
    /** True if the run resulted in a lead change */
    causedLeadChange: boolean;
}

/**
 * Basketball scoring run summary response
 */
export interface BasketballRunSummaryResponse extends BasketballRunSummary { }

/**
 * Basketball settings request
 */
export interface BasketballSettingsRequest extends BasketballSettings {
}

/**
 * Basketball settings response
 */
export interface BasketballSettingsResponse extends BasketballSettings {
}

/**
 * Basketball shot attempt breakdown
 */
export interface BasketballShotBreakdown {
    /** Scoring events with a delta of 1 point */
    freeThrows: number;
    /** Scoring events with a delta of 2 points */
    twoPointers: number;
    /** Scoring events with a delta of 3 points */
    threePointers: number;
}

/**
 * Basketball shot attempt breakdown response
 */
export interface BasketballShotBreakdownResponse extends BasketballShotBreakdown { }

/**
 * Basketball team request
 */
export interface BasketballScoreboardTeamRequest extends ScoreboardTeamBaseRequest {
    score: number;
    timeoutsLeft: number;
    possession: boolean;
    fouls: number;
    bonus: boolean;
    doubleBonus: boolean;
}

/**
 * Basketball team response
 */
export interface BasketballScoreboardTeamResponse extends ScoreboardTeamBaseResponse {
    score: number;
    timeoutsLeft: number;
    possession: boolean;
    fouls: number;
    bonus: boolean;
    doubleBonus: boolean;
}

/**
 * Basketball timeout allocation options
 */
export enum BasketballTimeoutAllocation {
    PerGame = "perGame",
    PerHalf = "perHalf",
}

/**
 * Boolean toggle input type
 */
export interface BooleanInput extends BaseInput {
    type: "boolean";
    default: boolean;
}

/**
 * Client configuration response
 */
export interface ClientConfigResponse {
    websocketUrl: string;
    signInUrl: string;
    dashboardUrl: string;
}

/**
 * Clock creation/update request
 */
export interface ClockRequest {
    seconds: number | null;
    running: boolean;
    ascending: boolean;
    stopAt?: number;
}

/**
 * Clock details response
 */
export interface ClockResponse extends Clock {
    object: string;
    url: string;
    uri: string;
    display: string | null; 
    nowTimestamp: number;
}

/**
 * Clock model
 */
export interface Clock {
    clockId: string;
    scoreboardId: string;
    accountId: string;
    seconds: number | null;
    running: boolean;
    ascending: boolean;
    asOfTimestamp: number;
    stopAt?: number;
}

/**
 * Clock type identifiers
 */
export enum ClockType {
    Game = "game",
    Play = "play",
    Shot = "shot",
    Pitch = "pitch",
    Period = "period",
}

/**
 * Color picker input type
 */
export interface ColorInput extends BaseInput {
    type: "color";
    default: string;
}

/**
 * Data extraction request
 */
export interface DataExtractRequest {
    removeDuplicates?: boolean;
}

/**
 * Data extraction response
 */
export interface DataExtractResponse {
    removeDuplicates: boolean;
    fileId: string;
    data: DataRow[];
}

/**
 * Data extraction row
 */
export interface DataRow extends Array<string> { }

/**
 * Display connection code request
 */
export interface DisplayConnectionCodeRequest {
    code: string;
}

/**
 * Display connection response
 */
export interface DisplayConnectionResponse {
    displayConnectionId: string;
    code: string;
    status: DisplayConnectionStatus;
    dateCreated: string;
    dateModified: string;
    dateExpires: string;
    scoreboardUrl?: string;
}

/**
 * Display connection status values
 */
export enum DisplayConnectionStatus {
    New = "new",
    Connected = "connected",
    Sent = "sent",
    Completed = "completed",
}

/**
 * Down and distance display options
 */
export enum DownAndDistanceDisplay {
    Both = "both",
    DownOnly = "downOnly",
    None = "none",
}

/**
 * Energy level for talking points generation
 */
export enum TalkingPointEnergy {
    Standard = "standard",
    Hype = "hype",
}

/**
 * Event action identifiers
 */
export enum EventAction {
  Created = "created",
  Updated = "updated",
  Deleted = "deleted",
  Read = "read"
}

/**
 * Event log entry model
 */
export interface Event {
  eventId: string;
  accountId: string;
  dateCreated: string;
  resource: string;
  resourceUri: string;
  subscriptionResourceUri: string;
  action: EventAction;
  data: object;
}

/**
 * Event log entry response
 */
export interface EventResponse {
  object: string;
  eventId: string;
  accountId: string;
  dateCreated: string;
  resource: string;
  resourceUri: string;
  subscriptionResourceUri: string;
  action: EventAction;
  data: object;
}

/**
 * Extra time display label options
 */
export enum ExtraTimeLabel {
    ExtraTime = "ET",
    Overtime = "OT",
}

/**
 * File content type identifiers
 */
export enum ContentType {
    Png = "image/png",
    Jpg = "image/jpeg",
    Gif = "image/gif",
    Webp = "image/webp",
    Avif = "image/avif",
    Csv = "text/csv",
    Xlsx = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    Zip = "application/zip",
}

/**
 * File metadata request
 */
export interface FileRequest {
    uploadId: string;
    type: FileType;
}

/**
 * File metadata response
 */
export interface FileResponse {
    object: string;
    url: string;
    uri: string;
    fileId: string;
    filename: string;
    fileUrl: string;
    accountId: string;
    type: FileType;
    size: number; 
    dateCreated: string;
}

/**
 * File type identifiers
 */
export enum FileType {
    TeamLogo = "teamLogo",
    AccountLogo = "accountLogo",
    PlayerPhoto = "playerPhoto",
    SponsorLogo = "sponsorLogo",
    InsightLogo = "insightLogo",
    Temporary = "temporary",
}

/**
 * Focus area for talking points generation
 */
export enum TalkingPointFocus {
    Story = "story",
    Balanced = "balanced",
    Stats = "stats",
}

/**
 * Football game data request
 */
export interface FootballDataRequest {
    down: number | null;
    distanceToGo: string | null;
    flag: boolean;
    period: FootballPeriod;
    overtimeNumber?: number;
    team1: FootballScoreboardTeamRequest;
    team2: FootballScoreboardTeamRequest;
    settings?: FootballSettingsRequest;
}

/**
 * Football game data response
 */
export interface FootballDataResponse {
    type: ScoreboardType;
    down: number | null;
    distanceToGo: string | null;
    flag: boolean;
    period: FootballPeriod;
    overtimeNumber?: number;
    team1: FootballScoreboardTeamResponse;
    team2: FootballScoreboardTeamResponse;
    settings: FootballSettingsResponse;
}

/**
 * Football game settings model
 */
export interface FootballSettings extends ScoreboardSettingsBase {
    periodLength: number; 
    halfLength: number; 
    playClockLength?: number;
    playClockSecondaryLength?: number;
    timeoutsPerHalf?: number;
    overtimeLength?: number; 
    overtimeHasClock: boolean;
    showGameClock: boolean;
    showPlayClock: boolean;
    showTimeouts: boolean;
    showPossession: boolean;
    downAndDistanceDisplay: DownAndDistanceDisplay;
    hideFlagAfter: number;
    clockStopsOnFirstDown: boolean;
    enableMercyRule: boolean;
    enableClockAutomations: boolean;
    showPlayClockWhenLow: boolean;
}

/**
 * Football period identifiers
 */
export enum FootballPeriod {
    Pre = "pregame",
    First = "1",
    Second = "2",
    Half = "half",
    Third = "3",
    Fourth = "4",
    Overtime = "overtime",
    Final = "final",
}

/**
 * Football settings request
 */
export interface FootballSettingsRequest extends FootballSettings {
}

/**
 * Football settings response
 */
export interface FootballSettingsResponse extends FootballSettings {
}

/**
 * Football team request
 */
export interface FootballScoreboardTeamRequest extends ScoreboardTeamBaseRequest {
    score: number;
    timeoutsLeft: number;
    possession: boolean;
}

/**
 * Football team response
 */
export interface FootballScoreboardTeamResponse extends ScoreboardTeamBaseResponse {
    score: number;
    timeoutsLeft: number;
    possession: boolean;
}

/**
 * Game creation/update request
 */
export interface GameRequest {
    description: string;
}

/**
 * Game insight analytics response
 */
export interface InsightResponse {
    object: string;
    url: string;
    uri: string;
    accountId: string;
    scoreboardId: string;
    gameId: string;
    scoreboardType: ScoreboardType;
    dateCreated: string; 
    dateGameStart: string;
    dateGameEnd?: string;
    qualityScore: number;
    data: BasketballInsightResponse; 
    talkingPoints: TalkingPointsResponse[];
}

/**
 * Game record response
 */
export interface GameResponse {
    object: string;
    url: string;
    uri: string;
    scoreboardId: string;
    gameId: string;
    type: ScoreboardType;
    startLogId: string;
    endLogId?: string;
    description: string;
    dateGameStart: string;
    dateGameEnd?: string;
    dateCreated: string;
    dateModified: string;
}

/**
 * Magic link guest access request
 */
export interface MagicLinkScoreboardGuestRequest {
    scoreboardId: string;
    expiresInHours: number;
}

/**
 * Magic link response
 */
export interface MagicLinkResponse {
    object: string;
    magicLinkId: string;
    type: MagicLinkType;
    url: string;
    uri: string;
    dateCreated: string;
    dateExpires?: string;
    dateLastUsed?: string;
    token?: string;
    code?: string;
}

/**
 * Magic link type identifiers
 */
export enum MagicLinkType {
    SignIn = "signIn",
    ScoreboardGuest = "scoreboardGuest",
    UserInvite = "userInvite",
    ScoreboardView = "scoreboardView",
}

/**
 * New account registration request
 */
export interface NewAccountRequest {
  email: string;
  password: string;
  name?: string;
  captchaToken?: string;
}

/**
 * Number field input type
 */
export interface NumberInput extends BaseInput {
    type: "number";
    default: number;
    min?: number;
    max?: number;
    step?: number;
}

/**
 * OAuth action identifiers
 */
export enum OAuthAction {
    NewUserCreated = "new_user_created",
    ExistingUserSignedIn = "existing_user_signed_in",
    ProviderLinkedAndSignedIn = "provider_linked_and_signed_in"
}

/**
 * OAuth authentication request
 */
export interface OAuthRequest {
    code: string;
    redirectUri: string;
}

/**
 * OAuth authentication response
 */
export interface OAuthResponse {
    auth?: AuthResponse;
    userCredentials?: UserCredentialsResponse;
    oAuthProvider: OAuthProvider;
    oAuthProviderId: string;
    oAuthProviderEmail: string;
    oAuthProviderName: string;
    dateNow: string;
    action: OAuthAction;
}

/**
 * OAuth provider identifiers
 */
export enum OAuthProvider {
    Google = "google",
}

/**
 * Overlay creation/update request
 */
export interface OverlayRequest {
    type: "players" | "sponsors";
    data: PlayerSummaryRequest[] | SponsorSummaryRequest[];
    title?: string | null;
    color?: string;
}

/**
 * Overlay details response
 */
export interface OverlayResponse {
    type: "players" | "sponsors";
    data: PlayerSummaryResponse[] | SponsorSummaryResponse[];
    title?: string | null;
    color?: string;
}

/**
 * Paginated list of accounts
 */
export interface AccountListResponse {
  url: string;
  uri: string;
  pageNext: string | null;
  data: AccountResponse[];
}

/**
 * Paginated list of activations
 */
export interface ScoreboardActivationListResponse {
    url: string;
    uri: string;
    pageNext: string | null;
    data: ScoreboardActivationResponse[];
}

/**
 * Paginated list of apps
 */
export interface AppListResponse {
    url: string;
    uri: string;
    pageNext: string | null;
    data: AppResponse[];
}

/**
 * Paginated list of auth sessions
 */
export interface AuthListResponse {
  url: string;
  uri: string;
  pageNext: string | null;
  data: AuthResponse[];
}

/**
 * Paginated list of clocks
 */
export interface ClockListResponse {
    url: string;
    uri: string;
    data: ClockResponse[];
}

/**
 * Paginated list of files
 */
export interface FileListResponse {
    url: string;
    uri: string;
    pageNext: string | null;
    data: FileResponse[];
}

/**
 * Paginated list of games
 */
export interface GameListResponse {
    url: string;
    uri: string;
    pageNext: string | null;
    data: GameResponse[];
}

/**
 * Paginated list of players
 */
export interface PlayerListResponse {
    url: string;
    uri: string;
    data: PlayerResponse[];
}

/**
 * Paginated list of presets
 */
export interface PresetListResponse {
    url: string;
    uri: string;
    pageNext: string | null;
    data: PresetResponse[];
}

/**
 * Paginated list of rosters
 */
export interface RosterListResponse {
  url: string;
  uri: string;
  pageNext: string | null;
  data: RosterResponse[];
}

/**
 * Paginated list of scoreboards
 */
export interface ScoreboardListResponse {
  url: string;
  uri: string;
  pageNext: string | null;
  data: ScoreboardResponse[];
}

/**
 * Paginated list of sponsors
 */
export interface SponsorListResponse {
    url: string;
    uri: string;
    groups: string[];
    data: SponsorResponse[];
}

/**
 * Paginated list of teams
 */
export interface TeamListResponse {
  url: string;
  uri: string;
  pageNext: string | null;
  data: TeamResponse[];
}

/**
 * Paginated list of users
 */
export interface UserListResponse {
  url: string;
  uri: string;
  pageNext: string | null;
  data: UserResponse[];
}

/**
 * Permission URI-to-actions mapping
 */
export type PermissionItem = {
    [uri: string]: ApiAction[];
};

/**
 * Player creation/update request
 */
export interface PlayerRequest {
    playerId?: string;
    firstName: string;
    lastName: string;
    number: string | null;
    position: string | null;
    imageFilename: string | null;
    attributes: Record<string, string>;
    groups: string[];
}

/**
 * Player details response
 */
export interface PlayerResponse {
    object: string;
    url: string;
    uri: string;
    playerId: string;
    rosterId: string;
    firstName: string;
    lastName: string;
    number: string | null;
    position: string | null;
    imageFilename: string | null;
    imageUrl: string | null;
    imagePreviewUrl: string | null;
    imageMediumUrl: string | null;
    attributes: Record<string, string>;
    groups: string[];
    accountId: string;
    dateCreated: string;
    dateModified: string;
}

/**
 * Player summary request
 */
export interface PlayerSummaryRequest {
    playerId: string | null;
    firstName: string | null;
    lastName: string | null;
    number: string | null;
    position: string | null;
    imageFilename: string | null;
    reference?: string;
}

/**
 * Player summary response
 */
export interface PlayerSummaryResponse {
    playerId: string | null;
    firstName: string | null;
    lastName: string | null;
    number: string | null;
    position: string | null;
    imageFilename: string | null;
    imageUrl: string | null;
    imagePreviewUrl: string | null;
    imageMediumUrl: string | null;
    reference: string;
}

/**
 * Preferences for tuning AI-generated talking points
 */
export interface TalkingPointPreferencesRequest {
    /** Browser locale code (e.g., "en-US", "es-MX"). When set, talking points are generated in this language. */
    language?: string;
    /** Team reference from the insight document. When set, commentary is framed from that team's perspective. */
    teamPerspective?: string;
    /** Energy level: "standard" for neutral commentary, "hype" for excited, emphatic language. */
    energy?: TalkingPointEnergy;
    /** Focus area: "story" for narrative, "balanced" for even coverage, "stats" for statistical analysis. */
    focus?: TalkingPointFocus;
}

/**
 * Preset creation/update request
 */
export interface PresetRequest {
    type: ScoreboardType;
    name: string;
    description: string | null;
    data: BaseballSettingsRequest | BasketballSettingsRequest | FootballSettingsRequest | SoccerSettingsRequest | VolleyballSettingsRequest | WrestlingSettingsRequest;
}

/**
 * Preset details response
 */
export interface PresetResponse {
    object: string;
    url: string;
    uri: string;
    presetId: string;
    name: string;
    description: string | null;
    type: ScoreboardType;
    data: BaseballSettingsResponse | BasketballSettingsResponse | FootballSettingsResponse | SoccerSettingsResponse | VolleyballSettingsResponse | WrestlingSettingsResponse;
    dateCreated: string;
    dateModified: string;
}

/**
 * Range slider input type
 */
export interface RangeInput extends BaseInput {
    type: "range";
    default: number;
    min: number;
    max: number;
    step?: number;
}

/**
 * Resource-level permission set
 */
export type ResourcePermissions = {
    [key in ApiResource]?: PermissionItem[];
};

/**
 * Roster creation/update request
 */
export interface RosterRequest {
  name: string;
  type: ScoreboardType;
  players?: PlayerRequest[];
  attributes: string[];
  groups: string[];
}

/**
 * Roster details response
 */
export interface RosterResponse {
  object: string;
  url: string;
  uri: string;
  rosterId: string;
  name: string;
  type: ScoreboardType;
  attributes: string[];
  groups: string[];
  players: PlayerListResponse | string;
  playerCount: number;
  accountId: string;
  dateCreated: string;
  dateModified: string;
}

/**
 * Score timeline data point
 */
export interface TimelinePoint {
    /** Monotonic sequence number derived from ledger order */
    seq: number;
    /** Period label from the sport-specific period enum, or null if not applicable */
    period: string | null;
    /** Present only for sports that track overtime as a separate numbered concept */
    overtimeNumber?: number;
    team1Score: number;
    team2Score: number;
    /** Current leader at this point in time (null = tie) */
    leader: "team1" | "team2" | null;
    /** Absolute point differential (always >= 0) */
    leadAmount: number;
    /**
     * Seconds remaining in the current period,
     * if a game clock is present.
     */
    periodSecondsRemaining?: number;
    /**
     * Calculated second of the game starting at tip-off (0),
     * extending through regulation and all overtime periods,
     * if a game clock is present.
     */
    gameSecond?: number;
    /** If the time was estimated based on clock errors */
    timeInferred?: boolean;
    /** If a clock jump occurred immediately after this point */
    clockJumpAfter?: boolean;
}

/**
 * Score timeline data point response
 */
export interface TimelinePointResponse extends TimelinePoint { }

/**
 * Scoreboard activation model
 */
export interface ScoreboardActivation {
    accountId: string;
    scoreboardId: string;
    dateCreated: string;
    ttl: number;
}

/**
 * Scoreboard activation response
 */
export interface ScoreboardActivationResponse extends ScoreboardActivation {
    object: string;
    url: string;
    uri: string;
}

/**
 * Scoreboard creation/update request
 */
export interface ScoreboardRequest {
  name: string | null;
  type: ScoreboardType;
  version: number;
  data: BasketballDataRequest | FootballDataRequest | VolleyballDataRequest | SoccerDataRequest | BaseballDataRequest | WrestlingDataRequest;
  templates?: TemplateSelection[];
}

/**
 * Scoreboard details response
 */
export interface ScoreboardResponse {
  object: string;
  url: string;
  uri: string;
  scoreboardId: string;
  name: string | null;
  description: string;
  controlUrl: string;
  embedUrl: string;
  displayUrl: string;
  directUrl: string;
  type: ScoreboardType;
  data: BasketballDataResponse | FootballDataResponse | VolleyballDataResponse | SoccerDataResponse | BaseballDataResponse | WrestlingDataResponse;
  accountId: string;
  accountLogoUrl: string | null;
  accountLogoPreviewUrl: string | null;
  dateCreated: string;
  dateModified: string;
  currentServerTimestamp: number;
  clocks: ClockListResponse | string;
  overlay: OverlayResponse | string;
  version: number;
  templates: TemplateSelection[];
}

/**
 * Scoreboard QR PDF request
 */
export interface ScoreboardQrPdfRequest {
  target: string;
  use: "control" | "embed" | "display" | "direct";
  datePrinted: string;
}

/**
 * Scoreboard QR PDF response
 */
export interface ScoreboardQrPdfResponse {
  url: string;
}

/**
 * Select dropdown input type
 */
export interface SelectInput extends BaseInput {
    type: "select";
    default: string;
    options: Array<{ value: string; label: string }>;
}

/**
 * Server time model
 */
export interface ServerTime {
    now: string;
    nowTimestamp: number;
}

/**
 * Server time response
 */
export interface ServerTimeResponse extends ServerTime {
}

/**
 * Short codes for sport types
 */
export enum ScoreboardCode {
  Football = "fb",
  Basketball = "bb",
  Volleyball = "vb",
  Soccer = "sc",
  Baseball = "ba",
  Wrestling = "wr",
}

/**
 * Sign-in credentials request
 */
export interface AuthSignInRequest {
  email: string;
  password: string;
  accountId?: string;
}

/**
 * Soccer game data request
 */
export interface SoccerDataRequest {
    period: SoccerPeriod;
    team1: SoccerScoreboardTeamRequest;
    team2: SoccerScoreboardTeamRequest;
    settings?: SoccerSettingsRequest;
}

/**
 * Soccer game data response
 */
export interface SoccerDataResponse {
    type: ScoreboardType;
    period: SoccerPeriod;
    team1: SoccerScoreboardTeamResponse;
    team2: SoccerScoreboardTeamResponse;
    settings: SoccerSettingsResponse;
}

/**
 * Soccer game settings model
 */
export interface SoccerSettings extends ScoreboardSettingsBase {
    periodLength: number; 
    halfLength: number; 
    extraTimeLength: number; 
    showGameClock: boolean;
    gamePeriods: SoccerGamePeriods;
    extraTimeLabel: ExtraTimeLabel;
    hasStoppageTime: boolean;
    hidePenaltyCardAfter: number; 
}

/**
 * Soccer penalty card request
 */
export interface SoccerPenaltyCardRequest {
    cardType: SoccerPenaltyCardType;
    playerSummary: PlayerSummaryRequest | null;
}

/**
 * Soccer penalty card response
 */
export interface SoccerPenaltyCardResponse {
    cardType: SoccerPenaltyCardType;
    playerSummary: PlayerSummaryResponse | null;
}

/**
 * Soccer penalty card types
 */
export enum SoccerPenaltyCardType {
    Yellow = "yellow",
    Red = "red",
}

/**
 * Soccer period identifiers
 */
export enum SoccerPeriod {
    Pre = "pregame",
    First = "1",
    Second = "2",
    Half = "half",
    Third = "3",
    Fourth = "4",
    ExtraTime1 = "ET 1",
    ExtraTime2 = "ET 2",
    Shootout = "shootout",
    Final = "final",
}

/**
 * Soccer period structure options
 */
export enum SoccerGamePeriods {
    Quarters = "quarters",
    Halves = "halves",
}

/**
 * Soccer settings request
 */
export interface SoccerSettingsRequest extends SoccerSettings {
}

/**
 * Soccer settings response
 */
export interface SoccerSettingsResponse extends SoccerSettings {
}

/**
 * Soccer team request
 */
export interface SoccerScoreboardTeamRequest extends ScoreboardTeamBaseRequest {
    score: number;
    shootoutResults: (boolean | null)[];
    penaltyCard?: SoccerPenaltyCardRequest;
}

/**
 * Soccer team response
 */
export interface SoccerScoreboardTeamResponse extends ScoreboardTeamBaseResponse {
    score: number;
    shootoutScore: number;
    shootoutResults: (boolean | null)[];
    penaltyCard?: SoccerPenaltyCardResponse;
}

/**
 * Sponsor creation/update request
 */
export interface SponsorRequest {
    name: string;
    website?: string;
    logoFilename: string;
    active: boolean;
    groups: string[];
}

/**
 * Sponsor details response
 */
export interface SponsorResponse {
    object: string;
    url: string;
    uri: string;
    sponsorId: string;
    name: string;
    website?: string;
    active: boolean;
    groups: string[];
    logoFilename: string;
    logoUrl: string;
    logoPreviewUrl: string;
    logoMediumUrl: string;
    accountId: string;
    dateCreated: string;
    dateModified: string;
}

/**
 * Sponsor summary request
 */
export interface SponsorSummaryRequest {
    sponsorId: string | null;
    name: string | null;
    website: string | null;
    imageFilename: string | null;
}

/**
 * Sponsor summary response
 */
export interface SponsorSummaryResponse {
    sponsorId: string | null;
    name: string | null;
    website: string | null;
    imageFilename: string | null;
    imageUrl: string | null;
    imagePreviewUrl: string | null;
    imageMediumUrl: string | null;
}

/**
 * Stripe billing portal session response
 */
export interface PortalSessionResponse {
    redirectUrl: string;
}

/**
 * Stripe checkout session request
 */
export interface CheckoutSessionRequest {
    priceId: string;
    currency: string;
}

/**
 * Stripe checkout session response
 */
export interface CheckoutSessionResponse {
    sessionId: string;
    redirectUrl: string;
}

/**
 * Subscription plan model
 */
export interface Plan {
    planId: PlanId;
    resetScoreboards: boolean;
    apiAccess: boolean;
    customizationAccess: boolean;
    maxScoreboards: number;
    maxActiveScoreboards: number;
    maxConcurrentDevices: number;
    maxRosters: number;
    maxSponsors: number;
    maxTeams: number;
    maxUsers: number;
    maxPresets: number;
    maxStorage: number;
    accountLogo: boolean;
}

/**
 * Subscription plan response
 */
export interface PlanResponse extends Plan {
}

/**
 * Support email submission request
 */
export interface SupportEmailRequest {
    from: string;
    subject: string;
    name: string;
    body: string;
}

/**
 * Support email submission response
 */
export interface SupportEmailResponse {
    dateCreated: string;
}

/**
 * Supported sport types
 */
export enum ScoreboardType {
  Baseball = "baseball",
  Basketball = "basketball",
  Football = "football",
  Soccer = "soccer",
  Volleyball = "volleyball",
  Wrestling = "wrestling",
}

/**
 * Team creation/update request
 */
export interface TeamRequest {
  name: string;
  description: string | null;
  color: string;
  logoFilename: string | null;
  rosterId: string | null;
}

/**
 * Team details response
 */
export interface TeamResponse {
  object: string;
  url: string;
  uri: string;
  teamId: string;
  name: string;
  description: string | null;
  color: string;
  logoFilename: string | null;
  logoUrl: string | null;
  logoPreviewUrl: string | null;
  rosterId: string | null;
  roster: string | RosterResponse | null;
  accountId: string;
  dateCreated: string;
  dateModified: string;
}

/**
 * Template layout definition
 */
export interface TemplateDefinition {
    path: string;
    name: string;
    sport: string; 
    useCases: TemplateUseCase[];
    thumbnail?: string;
    settings?: Record<string, InputDefinition>;
}

/**
 * Template selection configuration
 */
export interface TemplateSelection {
    path: string;
    appId: string;
    useCase: TemplateUseCase;
    version?: string; 
    settings?: Record<string, InputSelection>;
}

/**
 * Template use case categories
 */
export enum TemplateUseCase {
    Embed = "embed",
    Display = "display",
    Direct = "direct",
}

/**
 * Text field input type
 */
export interface TextInput extends BaseInput {
    type: "text";
    default: string;
    maxLength?: number;
}

/**
 * Top or bottom of inning
 */
export enum BaseballInningSegment {
    Top = "top",
    Middle = "middle",
    Bottom = "bottom",
    End = "end",
}

/**
 * Type guard for admin account response
 */
export const isAccountResponseAdmin = (account: AccountResponse): account is AccountResponseAdmin => {
  return "paymentProvider" in account && "paymentProviderCustomerId" in account;
}

/**
 * Type guard for admin auth response
 */
export const isAuthResponseAdmin = (auth: AuthResponse): auth is AuthResponseAdmin => {
  return "isAdmin" in auth;
}

/**
 * Type guard for admin user list response
 */
export const isUserListResponseAdmin = (list: UserListResponse): list is UserListResponseAdmin => {
  return list.data.length > 0 && isUserResponseAdmin(list.data[0]);
}

/**
 * Type guard for admin user response
 */
export const isUserResponseAdmin = (user: UserResponse): user is UserResponseAdmin => {
  return "isAdmin" in user;
}

/**
 * Type guard for baseball data
 */
export const isBaseballData = (data: any): data is BaseballDataResponse => {
  return data.type === ScoreboardType.Baseball;
}

/**
 * Type guard for basketball data
 */
export const isBasketballData = (data: any): data is BasketballDataResponse => {
  return data.type === ScoreboardType.Basketball;
}

/**
 * Type guard for football data
 */
export const isFootballData = (data: any): data is FootballDataResponse => {
  return data.type === ScoreboardType.Football;
}

/**
 * Type guard for soccer data
 */
export const isSoccerData = (data: any): data is SoccerDataResponse => {
  return data.type === ScoreboardType.Soccer;
}

/**
 * Type guard for volleyball data
 */
export const isVolleyballData = (data: any): data is VolleyballDataResponse => {
  return data.type === ScoreboardType.Volleyball;
}

/**
 * Type guard for wrestling data
 */
export const isWrestlingData = (data: any): data is WrestlingDataResponse => {
  return data.type === ScoreboardType.Wrestling;
}

/**
 * Upload session request
 */
export interface UploadSessionRequest {
    filename: string;
    reference?: string;
}

/**
 * Upload session response
 */
export interface UploadSessionResponse {
    object: string;
    uploadId: string;
    filename: string;
    reference?: string;
    contentType: ContentType;
    uploadUrl: string;
    dateCreated: string;
}

/**
 * User creation request
 */
export interface UserRequest {
  email: string;
  name: string;
  permissions: Permissions;
}

/**
 * User credentials request
 */
export interface UserCredentialsRequest {
    name?: string;
    email: string;
    password?: string;
    emailConsent: boolean;
}

/**
 * User credentials response
 */
export interface UserCredentialsResponse {
    object: string;
    userId: string;
    url: string;
    uri: string;
    name?: string;
    email: string;
    googleEmail?: string;
    hasGoogleSignIn: boolean;
    accountIds: string[];
    dateCreated: string;
    dateModified: string;
    dateLastSignIn: string;
    dateNow: string;
    emailConsent: boolean;
}

/**
 * User details response
 */
export interface UserResponse {
  object: string;
  userId: string;
  url: string;
  uri: string;
  name?: string;
  email: string;
  pending: boolean;
  accountId: string;
  account: AccountResponse | string;
  permissions: Permissions;
  dateCreated: string;
  dateModified: string;
  dateLastActivity: string | null;
}

/**
 * User list response with admin fields
 */
export interface UserListResponseAdmin {
  url: string;
  uri: string;
  pageNext: string | null;
  data: UserResponseAdmin[];
}

/**
 * User permission set
 */
export type Permissions = {
    allow: ResourcePermissions;
    deny: ResourcePermissions;
};

/**
 * User response with admin fields
 */
export interface UserResponseAdmin extends UserResponse {
  isOwner: boolean;
  isAdmin: boolean;
}

/**
 * User update request
 */
export interface UserUpdateRequest {
  name?: string;
  permissions?: Permissions;
}

/**
 * User update request with admin fields
 */
export interface UserUpdateRequestAdmin extends UserUpdateRequest {
  isOwner: boolean;
}

/**
 * Volleyball game data request
 */
export interface VolleyballDataRequest {
    set: VolleyballSet;
    team1: VolleyballScoreboardTeamRequest;
    team2: VolleyballScoreboardTeamRequest;
    settings?: VolleyballSettingsRequest;
}

/**
 * Volleyball game data response
 */
export interface VolleyballDataResponse {
    type: ScoreboardType;
    set: VolleyballSet;
    team1: VolleyballScoreboardTeamResponse;
    team2: VolleyballScoreboardTeamResponse;
    settings: VolleyballSettingsResponse;
    setFirstServingTeam: "team1" | "team2" | null;
}

/**
 * Volleyball game settings model
 */
export interface VolleyballSettings extends ScoreboardSettingsBase {
    sets: number;
    timeoutsPerSet?: number;
    showTimeouts: boolean;
    showServing: boolean;
}

/**
 * Volleyball set identifiers
 */
export enum VolleyballSet {
    Pre = "pregame",
    First = "1",
    Second = "2",
    Third = "3",
    Fourth = "4",
    Fifth = "5",
    Final = "final",
}

/**
 * Volleyball settings request
 */
export interface VolleyballSettingsRequest extends VolleyballSettings {
}

/**
 * Volleyball settings response
 */
export interface VolleyballSettingsResponse extends VolleyballSettings {
}

/**
 * Volleyball team request
 */
export interface VolleyballScoreboardTeamRequest extends ScoreboardTeamBaseRequest {
    setScore: number;
    matchScore: number;
    timeoutsLeft: number;
    serving: boolean;
    server: PlayerSummaryRequest | null;
    finalSetScores: (number | null)[];
}

/**
 * Volleyball team response
 */
export interface VolleyballScoreboardTeamResponse extends ScoreboardTeamBaseResponse {
    setScore: number;
    matchScore: number;
    timeoutsLeft: number;
    serving: boolean;
    server: PlayerSummaryResponse | null;
    finalSetScores: (number | null)[];
}

/**
 * Websocket connection ID request
 */
export interface WebsocketConnectionIdRequest {
    action: "sendmessage";
    operation: WebsocketOperation.GetConnectionId;
}

/**
 * Websocket connection ID response
 */
export interface WebsocketConnectionIdResponse {
    connectionId: string;
    dateCreated: string;
}

/**
 * Websocket heartbeat command
 */
export interface WebsocketHeartbeatCommand {
    action: "sendmessage";
    operation: WebsocketOperation.SendHeartbeat;
}

/**
 * Websocket message payload
 */
export interface WebsocketMessage {
    type: WebsocketMessageType;
    error: boolean
    message: string;
    data: Event | MetaMessage | WebsocketConnectionIdResponse | null;
}

/**
 * Websocket message type identifiers
 */
export enum WebsocketMessageType {
    Event = "event",
    Heartbeat = "heartbeat",
    ConnectionConfirmation = "connectionConfirmation",
    Info = "info",
    Meta = "meta",
}

/**
 * Websocket meta message
 */
export interface MetaMessage {
    type: MetaMessageType;
    accountId: string;
    subscriptionResource: string;
    subscriptionResourceUri: string;
    dateCreated: string;
    message: string | null;
}

/**
 * Websocket meta message types
 */
export enum MetaMessageType {
    ScoreboardReset = "scoreboardReset",
    ScoreboardRefresh = "scoreboardRefresh",
}

/**
 * Websocket operation identifiers
 */
export enum WebsocketOperation {
    SendHeartbeat = "sendHeartbeat",
    GetConnectionId = "getConnectionId",
}

/**
 * Websocket subscription request
 */
export interface WebsocketSubscriptionRequest {
    connectionId: string;
    sendInitialData?: boolean;
}

/**
 * Websocket subscription response
 */
export interface WebsocketSubscriptionResponse {
    connectionId: string;
    subscriptionResource: string;
    subscriptionResourceUri: string;
    accountId: string;
}

/**
 * Wrestling match data request
 */
export interface WrestlingDataRequest {
    period: WrestlingPeriod;
    overtimePhase: WrestlingOvertimePhase | null;
    team1: WrestlingScoreboardTeamRequest;
    team2: WrestlingScoreboardTeamRequest;
    teamIds: string[];
    weightClass: string | null;
    tournamentTeams: WrestlingScoreboardTeamRequest[];
    settings?: WrestlingSettingsRequest;
}

/**
 * Wrestling match data response
 */
export interface WrestlingDataResponse {
    type: ScoreboardType;
    period: WrestlingPeriod;
    overtimePhase: WrestlingOvertimePhase | null;
    team1: WrestlingScoreboardTeamResponse;
    team2: WrestlingScoreboardTeamResponse;
    teamIds: string[];
    weightClass: string | null;
    tournamentTeams: WrestlingScoreboardTeamResponse[];
    settings: WrestlingSettingsResponse;
}

/**
 * Wrestling match settings model
 */
export interface WrestlingSettings extends ScoreboardSettingsBase {
    style: WrestlingStyle;
    weightType: "kg" | "lb";
    meetType: WrestlingMeetType;
    showPeriodClock: boolean;
    periodLength: number; 
    periodCount: number;
    initialPeriodLength?: number; 
    suddenVictoryLength?: number; 
    tieBreakerLength?: number; 
    ultimateTieBreakerLength?: number; 
    hasUltimateTieBreaker: boolean;
    bandColors: Array<"red" | "green" | "blue"> | [];
    trackTeamScores: boolean;
}

/**
 * Wrestling meet format options
 */
export enum WrestlingMeetType {
    Dual = "dual",
    Tournament = "tournament",
}

/**
 * Wrestling overtime format options
 */
export enum WrestlingOvertimeType {
    SuddenVictory = "sv",
    TieBreaker = "tb",
    UltimateTieBreaker = "utb",
}

/**
 * Wrestling overtime phase data
 */
export interface WrestlingOvertimePhase {
    number: number;
    type: WrestlingOvertimeType;
    half: 1 | 2 | null;
}

/**
 * Wrestling period identifiers
 */
export enum WrestlingPeriod {
    First = "1",
    Second = "2",
    Third = "3",
    Overtime = "overtime",
    Final = "final",
}

/**
 * Wrestling settings request
 */
export interface WrestlingSettingsRequest extends WrestlingSettings {
}

/**
 * Wrestling settings response
 */
export interface WrestlingSettingsResponse extends WrestlingSettings {
}

/**
 * Wrestling style options
 */
export enum WrestlingStyle {
    Freestyle = "freestyle",
    Greco = "greco",
    Folkstyle = "folkstyle",
}

/**
 * Wrestling team request
 */
export interface WrestlingScoreboardTeamRequest extends ScoreboardTeamBaseRequest {
    score: number;
    matchScore: number;
    wrestler: PlayerSummaryRequest | null;
    bandColor: "red" | "blue" | "green" | null;
}

/**
 * Wrestling team response
 */
export interface WrestlingScoreboardTeamResponse extends ScoreboardTeamBaseResponse {
    score: number;
    matchScore: number;
    wrestler: PlayerSummaryResponse | null;
    bandColor: "red" | "blue" | "green" | null;
}

export enum ErrorCode {
    ForbiddenSelfPermissionsChange = "ForbiddenSelfPermissionsChange",
    InsufficientAdminPermissions = "InsufficientAdminPermissions",
    InsufficientItemPermissions = "InsufficientItemPermissions",
    InsufficientResourcePermissions = "InsufficientResourcePermissions",
    InsufficientResourceItemPermissions = "InsufficientResourceItemPermissions",
    InvalidAuthType = "InvalidAuthType",
    InvalidCaptchaToken = "InvalidCaptchaToken",
    InvalidColorFormat = "InvalidColorFormat",
    InvalidDate = "InvalidDate",
    InvalidInput = "InvalidInput",
    InvalidRequest = "InvalidRequest",
    InvalidPermissionGrant = "InvalidPermissionGrant",
    InvalidSignIn = "InvalidSignIn",
    InvalidAccountSignIn = "InvalidAccountSignIn",
    InvalidToken = "InvalidToken",
    AccountLimitExceeded = "AccountLimitExceeded",
    AccountStorageExceeded = "AccountStorageExceeded",
    ActiveScoreboardsExceeded = "ActiveScoreboardsExceeded",
    AccountFeatureNotEnabled = "AccountFeatureNotEnabled",
    AppNotEnabled = "AppNotEnabled",
    ImageProcessingError = "ImageProcessingError",
    RemoteServerError = "RemoteServerError",
    RemoteServerTimeout = "RemoteServerTimeout",
    RequestLimitExceeded = "RequestLimitExceeded",
    ResourceNotFound = "ResourceNotFound",
    UserCredentialsInUse = "UserCredentialsInUse",
    AccountEmailInUse = "AccountEmailInUse",
    IncompatibleState = "IncompatibleState",
    VersionConflict = "VersionConflict",
    UnspecifiedError = "UnspecifiedError"
}

export interface ErrorResponse {
    error: boolean;
    code: ErrorCode;
    statusCode: number;
    reference: string;
    message: string;
}

export {};