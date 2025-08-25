/**
 * ScoreboardMax API Types
 * 
 * This file contains type definitions for API consumers.
 * These types are automatically generated from the ScoreboardMax API source code.
 * 
 */

export const isBaseballData = (data: any): data is BaseballData => {
  return data.type === ScoreboardType.Baseball;
}

export const isBasketballData = (data: any): data is BasketballData => {
  return data.type === ScoreboardType.Basketball;
}

export const isFootballData = (data: any): data is FootballData => {
  return data.type === ScoreboardType.Football;
}

export const isSoccerData = (data: any): data is SoccerData => {
  return data.type === ScoreboardType.Soccer;
}

export const isVolleyballData = (data: any): data is VolleyballData => {
  return data.type === ScoreboardType.Volleyball;
}

export const isWrestlingData = (data: any): data is WrestlingData => {
  return data.type === ScoreboardType.Wrestling;
}

export enum ApiAction {
    Create = "create",
    Read = "read",
    Update = "update",
    Delete = "delete",
    All = "*",
}

export enum ApiResource {
    All = "*",
    Account = "account",
    AccountList = "accountList",
    File = "file",
    FileList = "fileList",
    Auth = "auth",
    AuthList = "authList",
    Clock = "clock",
    ClockList = "clockList",
    Player = "player",
    PlayerList = "playerList",
    Roster = "roster",
    RosterList = "rosterList",
    Scoreboard = "scoreboard",
    ScoreboardList = "scoreboardList",
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
}

export enum AuthType {
  Session = "session",
  Api = "api",
  Guest = "guest",
  ScoreboardView = "scoreboardView",
}

export enum BaseballInningSegment {
    Top = "top",
    Middle = "middle",
    Bottom = "bottom",
    End = "end",
}

export enum BasketballGamePeriods {
    Quarters = "quarters",
    Halves = "halves",
}

export enum BasketballPeriod {
    Pre = "pregame",
    First = "1",
    Second = "2",
    Half = "half",
    Third = "3",
    Fourth = "4",
    Overtime = "overtime",
}

export enum BasketballTimeoutAllocation {
    PerGame = "perGame",
    PerHalf = "perHalf",
}

export enum ClockType {
    Game = "game",
    Play = "play",
    Shot = "shot",
    Pitch = "pitch",
    Period = "period",
}

export enum ContentType {
    Png = "image/png",
    Jpg = "image/jpeg",
    Gif = "image/gif",
    Webp = "image/webp",
    Avif = "image/avif",
    Csv = "text/csv",
    Xlsx = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
}

export enum DownAndDistanceDisplay {
    Both = "both",
    DownOnly = "downOnly",
    None = "none",
}

export enum ErrorCode {
  ForbiddenSelfPermissionsChange = "ForbiddenSelfPermissionsChange",
  InsufficientAdminPermissions = "InsufficientAdminPermissions",
  InsufficientItemPermissions = "InsufficientItemPermissions",
  InsufficientResourcePermissions = "InsufficientResourcePermissions",
  InsufficientResourceItemPermissions = "InsufficientResourceItemPermissions",
  InvalidAuthType = "InvalidAuthType",
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
  ImageProcessingError = "ImageProcessingError",
  RemoteServerError = "RemoteServerError",
  RemoteServerTimeout = "RemoteServerTimeout",
  RequestLimitExceeded = "RequestLimitExceeded",
  ResourceNotFound = "ResourceNotFound",
  UserCredentialsInUse = "UserCredentialsInUse",
  AccountEmailInUse = "AccountEmailInUse",
  IncompatibleState = "IncompatibleState",
  UnspecifiedError = "UnspecifiedError",
}

export enum ExtraTimeLabel {
    ExtraTime = "ET",
    Overtime = "OT",
}

export enum FileType {
    TeamLogo = "teamLogo",
    AccountLogo = "accountLogo",
    PlayerPhoto = "playerPhoto",
    SponsorLogo = "sponsorLogo",
    Temporary = "temporary",
}

export enum FootballPeriod {
    Pre = "pregame",
    First = "1",
    Second = "2",
    Half = "half",
    Third = "3",
    Fourth = "4",
    Overtime = "overtime",
}

export enum MagicLinkType {
    SignIn = "signIn",
    ScoreboardGuest = "scoreboardGuest",
    UserInvite = "userInvite",
    ScoreboardView = "scoreboardView",
}

export enum MetaMessageType {
    ScoreboardReset = "scoreboardReset",
    ScoreboardRefresh = "scoreboardRefresh",
}

export enum OAuthProvider {
    Google = "google",
}

export enum PlanId {
    Basic = "basic",
    Plus = "plus",
    Pro = "pro",
}

export enum ScoreboardCode {
  Football = "fb",
  Basketball = "bb",
  Volleyball = "vb",
  Soccer = "sc",
  Baseball = "ba",
  Wrestling = "wr",
}

export enum ScoreboardType {
  Baseball = "baseball",
  Basketball = "basketball",
  Football = "football",
  Soccer = "soccer",
  Volleyball = "volleyball",
  Wrestling = "wrestling",
}

export enum SoccerGamePeriods {
    Quarters = "quarters",
    Halves = "halves",
}

export enum SoccerPenaltyCardType {
    Yellow = "yellow",
    Red = "red",
}

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
}

export enum WebsocketMessageType {
    Event = "event",
    Heartbeat = "heartbeat",
    ConnectionConfirmation = "connectionConfirmation",
    Info = "info",
    Meta = "meta",
}

export enum WebsocketOperation {
    SendHeartbeat = "sendHeartbeat",
    GetConnectionId = "getConnectionId",
}

export enum WrestlingMeetType {
    Dual = "dual",
    Tournament = "tournament",
}

export enum WrestlingOvertimeType {
    SuddenVictory = "sv",
    TieBreaker = "tb",
    UltimateTieBreaker = "utb",
}

export enum WrestlingPeriod {
    First = "1",
    Second = "2",
    Third = "3",
    Overtime = "overtime"
}

export enum WrestlingStyle {
    Freestyle = "freestyle",
    Greco = "greco",
    Folkstyle = "folkstyle",
}

export interface AccountRequest {
  name: string | null;
  logoFilename: string | null;
}

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

export interface Auth {
  authId: string;
  mask: string;
  accountId: string;
  userId?: string;
  type: AuthType;
  isAdmin: boolean;
  description?: string | null;
  permissions: Permissions;
  dateCreated: string;
  dateModified: string;
  dateExpires?: string;
  dateLastUsed?: string;
  dateLastUserActivityUpdate?: string;
  ttl?: number;
}

export interface AuthListResponse {
  url: string;
  uri: string;
  pageNext: string | null;
  data: AuthResponse[];
}

export interface AuthRequest {
  type: AuthType;
  description?: string | null;
  permissions: Permissions;
  dateExpires?: string;
}

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

export interface AuthSignInRequest {
  email: string;
  password: string;
  accountId?: string;
}

export interface BaseballDataRequest {
    inning: number;
    inningSegment: BaseballInningSegment;
    balls: number | null
    strikes: number | null;
    outs: number | null;
    runnerOnFirst: boolean;
    runnerOnSecond: boolean;
    runnerOnThird: boolean;
    team1: BaseballScoreboardTeamRequest;
    team2: BaseballScoreboardTeamRequest;
    settings?: BaseballSettingsRequest;
}

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
    team1: BaseballScoreboardTeamResponse;
    team2: BaseballScoreboardTeamResponse;
    settings: BaseballSettingsResponse;
}

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
}

export interface BaseballSettingsRequest extends BaseballSettings {
}

export interface BaseballSettingsResponse extends BaseballSettings {
}

export interface BasketballDataRequest {
    period: BasketballPeriod;
    team1: BasketballScoreboardTeamRequest;
    team2: BasketballScoreboardTeamRequest;
    settings?: BasketballSettingsRequest;
}

export interface BasketballDataResponse {
    type: ScoreboardType;
    period: BasketballPeriod;
    team1: BasketballScoreboardTeamResponse;
    team2: BasketballScoreboardTeamResponse;
    settings: BasketballSettingsResponse;
}

export interface BasketballScoreboardTeamRequest extends ScoreboardTeamBaseRequest {
    score: number;
    timeoutsLeft: number;
    possession: boolean;
    fouls: number;
    bonus: boolean;
    doubleBonus: boolean;
}

export interface BasketballScoreboardTeamResponse extends ScoreboardTeamBaseResponse {
    score: number;
    timeoutsLeft: number;
    possession: boolean;
    fouls: number;
    bonus: boolean;
    doubleBonus: boolean;
}

export interface BasketballSettings extends ScoreboardSettingsBase {
    periodLength: number; 
    shotClockLength?: number; 
    shotClockSecondaryLength?: number; 
    halfLength: number; 
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

export interface BasketballSettingsRequest extends BasketballSettings {
}

export interface BasketballSettingsResponse extends BasketballSettings {
}

export interface CheckoutSessionRequest {
    priceId: string;
    currency: string;
}

export interface CheckoutSessionResponse {
    sessionId: string;
    redirectUrl: string;
}

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

export interface ClockListResponse {
    url: string;
    uri: string;
    data: ClockResponse[];
}

export interface ClockRequest {
    seconds: number | null;
    running: boolean;
    ascending: boolean;
    stopAt?: number;
}

export interface ClockResponse extends Clock {
    object: string;
    url: string;
    uri: string;
    display: string | null; 
    nowTimestamp: number;
}

export interface DataExtractRequest {
    removeDuplicates?: boolean;
}

export interface DataExtractResponse {
    removeDuplicates: boolean;
    fileId: string;
    data: DataRow[];
}

export interface DataRow extends Array<string> { }

export interface ErrorResponse {
  error: boolean;
  code: ErrorCode;
  statusCode: number;
  reference: string;
  message: string;
}

export interface Event {
  eventId: string;
  accountId: string;
  dateCreated: string;
  resource: string;
  resourceUri: string;
  subscriptionResourceUri: string;
  data: object | null;
}

export interface EventResponse {
  object: string;
  eventId: string;
  accountId: string;
  dateCreated: string;
  resource: string;
  resourceUri: string;
  subscriptionResourceUri: string;
  data: object | null;
}

export interface FileListResponse {
    url: string;
    uri: string;
    pageNext: string | null;
    data: FileResponse[];
}

export interface FileRequest {
    uploadId: string;
}

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

export interface FootballDataRequest {
    down: number | null;
    distanceToGo: string | null;
    flag: boolean;
    period: FootballPeriod;
    team1: FootballScoreboardTeamRequest;
    team2: FootballScoreboardTeamRequest;
    settings?: FootballSettingsRequest;
}

export interface FootballDataResponse {
    type: ScoreboardType;
    down: number | null;
    distanceToGo: string | null;
    flag: boolean;
    period: FootballPeriod;
    team1: FootballScoreboardTeamResponse;
    team2: FootballScoreboardTeamResponse;
    settings: FootballSettingsResponse;
}

export interface FootballScoreboardTeamRequest extends ScoreboardTeamBaseRequest {
    score: number;
    timeoutsLeft: number;
    possession: boolean;
}

export interface FootballScoreboardTeamResponse extends ScoreboardTeamBaseResponse {
    score: number;
    timeoutsLeft: number;
    possession: boolean;
}

export interface FootballSettings extends ScoreboardSettingsBase {
    periodLength: number; 
    halfLength: number; 
    playClockLength?: number;
    playClockSecondaryLength?: number;
    timeoutsPerHalf?: number;
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

export interface FootballSettingsRequest extends FootballSettings {
}

export interface FootballSettingsResponse extends FootballSettings {
}

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
}

export interface MagicLinkScoreboardGuestRequest {
    scoreboardId: string;
    expiresInHours: number;
}

export interface MetaMessage {
    type: MetaMessageType;
    accountId: string;
    subscriptionResource: string;
    subscriptionResourceUri: string;
    dateCreated: string;
    message: string | null;
}

export interface NewAccountRequest {
  email: string;
  password: string;
  name?: string;
}

export interface OAuthBindingRequest {
    messageCipher: string;
}

export interface OAuthResponse {
    auth?: AuthResponse;
    userCredentials?: UserCredentialsResponse;
    oAuthProvider: OAuthProvider;
    oAuthProviderId: string;
    oAuthProviderEmail: string;
    oAuthProviderName: string;
    messageCipher?: string;
    dateNow: string;
}

export interface OverlayRequest {
    type: "players" | "sponsors";
    data: PlayerSummaryRequest[] | SponsorSummaryRequest[];
    title?: string | null;
    color?: string;
}

export interface OverlayResponse {
    type: "players" | "sponsors";
    data: PlayerSummaryResponse[] | SponsorSummaryResponse[];
    title?: string | null;
    color?: string;
}

export interface Plan {
    planId: PlanId;
    resetScoreboards: boolean;
    apiAccess: boolean;
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

export interface PlanResponse extends Plan {
}

export interface PlayerListResponse {
    url: string;
    uri: string;
    data: PlayerResponse[];
}

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

export interface PlayerSummaryRequest {
    playerId: string | null;
    firstName: string | null;
    lastName: string | null;
    number: string | null;
    position: string | null;
    imageFilename: string | null;
}

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
}

export interface PortalSessionResponse {
    redirectUrl: string;
}

export interface PresetListResponse {
    url: string;
    uri: string;
    pageNext: string | null;
    data: PresetResponse[];
}

export interface PresetRequest {
    type: ScoreboardType;
    name: string;
    description: string | null;
    data: BaseballSettingsRequest | BasketballSettingsRequest | FootballSettingsRequest | SoccerSettingsRequest | VolleyballSettingsRequest | WrestlingSettingsRequest;
}

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

export interface RosterListResponse {
  url: string;
  uri: string;
  pageNext: string | null;
  data: RosterResponse[];
}

export interface RosterRequest {
  name: string;
  type: ScoreboardType;
  players?: PlayerRequest[];
  attributes: string[];
  groups: string[];
}

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

export interface ScoreboardActivation {
    accountId: string;
    scoreboardId: string;
    dateCreated: string;
    ttl: number;
}

export interface ScoreboardActivationListResponse {
    url: string;
    uri: string;
    pageNext: string | null;
    data: ScoreboardActivationResponse[];
}

export interface ScoreboardActivationResponse extends ScoreboardActivation {
    object: string;
    url: string;
    uri: string;
}

export interface ScoreboardListResponse {
  url: string;
  uri: string;
  pageNext: string | null;
  data: ScoreboardResponse[];
}

export interface ScoreboardRequest {
  name: string | null;
  type: ScoreboardType;
  data: BasketballDataRequest | FootballDataRequest | VolleyballDataRequest | SoccerDataRequest | BaseballDataRequest | WrestlingDataRequest;
}

export interface ScoreboardResponse {
  object: string;
  url: string;
  uri: string;
  scoreboardId: string;
  name: string | null;
  description: string;
  controlUrl: string;
  embedUrl: string;
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
}

export interface ScoreboardSettingsBase {
    clockAscending: boolean;
    enableKeyboardShortcuts: boolean;
    showAccountLogo: boolean;
    showSponsors: boolean;
    sponsorFilter: string[] | null;
}

export interface ScoreboardTeamBaseRequest {
    teamId: string | null;
    name: string | undefined;
    description: string | null;
    color: string | undefined;
    logoFilename: string | null | undefined;
    rosterId: string | null;
    reference?: string;
}

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

export interface ServerTime {
    now: string;
    nowTimestamp: number;
}

export interface ServerTimeResponse extends ServerTime {
}

export interface SoccerDataRequest {
    period: SoccerPeriod;
    team1: SoccerScoreboardTeamRequest;
    team2: SoccerScoreboardTeamRequest;
    settings?: SoccerSettingsRequest;
}

export interface SoccerDataResponse {
    type: ScoreboardType;
    period: SoccerPeriod;
    team1: SoccerScoreboardTeamResponse;
    team2: SoccerScoreboardTeamResponse;
    settings: SoccerSettingsResponse;
}

export interface SoccerPenaltyCardRequest {
    cardType: SoccerPenaltyCardType;
    playerSummary: PlayerSummaryRequest | null;
}

export interface SoccerPenaltyCardResponse {
    cardType: SoccerPenaltyCardType;
    playerSummary: PlayerSummaryResponse | null;
}

export interface SoccerScoreboardTeamRequest extends ScoreboardTeamBaseRequest {
    score: number;
    shootoutResults: (boolean | null)[];
    penaltyCard?: SoccerPenaltyCardRequest;
}

export interface SoccerScoreboardTeamResponse extends ScoreboardTeamBaseResponse {
    score: number;
    shootoutScore: number;
    shootoutResults: (boolean | null)[];
    penaltyCard?: SoccerPenaltyCardResponse;
}

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

export interface SoccerSettingsRequest extends SoccerSettings {
}

export interface SoccerSettingsResponse extends SoccerSettings {
}

export interface SponsorListResponse {
    url: string;
    uri: string;
    groups: string[];
    data: SponsorResponse[];
}

export interface SponsorRequest {
    name: string;
    website?: string;
    logoFilename: string;
    active: boolean;
    groups: string[];
}

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

export interface SponsorSummaryRequest {
    sponsorId: string | null;
    name: string | null;
    website: string | null;
    imageFilename: string | null;
}

export interface SponsorSummaryResponse {
    sponsorId: string | null;
    name: string | null;
    website: string | null;
    imageFilename: string | null;
    imageUrl: string | null;
    imagePreviewUrl: string | null;
    imageMediumUrl: string | null;
}

export interface SupportEmailRequest {
    from: string;
    subject: string;
    name: string;
    body: string;
}

export interface SupportEmailResponse {
    dateCreated: string;
}

export interface TeamListResponse {
  url: string;
  uri: string;
  pageNext: string | null;
  data: TeamResponse[];
}

export interface TeamRequest {
  name: string;
  description: string | null;
  color: string;
  logoFilename: string | null;
  rosterId: string | null;
}

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

export interface UploadSessionRequest {
    filename: string;
    type: FileType;
    reference?: string;
}

export interface UploadSessionResponse {
    object: string;
    uploadId: string;
    type: FileType;
    filename: string;
    reference?: string;
    contentType: ContentType;
    uploadUrl: string;
    dateCreated: string;
}

export interface UserCredentialsRequest {
    name?: string;
    email: string;
    password?: string;
}

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
}

export interface UserListResponse {
  url: string;
  uri: string;
  pageNext: string | null;
  data: UserResponse[] | UserResponseAdmin[];
}

export interface UserRequest {
  email: string;
  name: string;
  permissions: Permissions;
}

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

export interface UserResponseAdmin extends UserResponse {
  isOwner: boolean;
  isAdmin: boolean;
}

export interface UserUpdateRequest {
  name?: string;
  permissions?: Permissions;
}

export interface VolleyballDataRequest {
    set: number | null;
    team1: VolleyballScoreboardTeamRequest;
    team2: VolleyballScoreboardTeamRequest;
    settings?: VolleyballSettingsRequest;
}

export interface VolleyballDataResponse {
    type: ScoreboardType;
    set: number | null;
    team1: VolleyballScoreboardTeamResponse;
    team2: VolleyballScoreboardTeamResponse;
    settings: VolleyballSettingsResponse;
}

export interface VolleyballScoreboardTeamRequest extends ScoreboardTeamBaseRequest {
    setScore: number;
    matchScore: number;
    timeoutsLeft: number;
    serving: boolean;
    server: PlayerSummaryRequest | null;
    finalSetScores: (number | null)[];
}

export interface VolleyballScoreboardTeamResponse extends ScoreboardTeamBaseResponse {
    setScore: number;
    matchScore: number;
    timeoutsLeft: number;
    serving: boolean;
    server: PlayerSummaryResponse | null;
    finalSetScores: (number | null)[];
}

export interface VolleyballSettings extends ScoreboardSettingsBase {
    sets: number;
    timeoutsPerSet?: number;
    showTimeouts: boolean;
    showServing: boolean;
}

export interface VolleyballSettingsRequest extends VolleyballSettings {
}

export interface VolleyballSettingsResponse extends VolleyballSettings {
}

export interface WebsocketConnectionIdRequest {
    action: "sendmessage";
    operation: WebsocketOperation.GetConnectionId;
}

export interface WebsocketConnectionIdResponse {
    connectionId: string;
    dateCreated: string;
}

export interface WebsocketHeartbeatCommand {
    action: "sendmessage";
    operation: WebsocketOperation.SendHeartbeat;
}

export interface WebsocketMessage {
    type: WebsocketMessageType;
    error: boolean
    message: string;
    data: Event | MetaMessage | WebsocketConnectionIdResponse | null;
}

export interface WebsocketSubscriptionRequest {
    connectionId: string;
    triggerEvent?: boolean
}

export interface WebsocketSubscriptionResponse {
    connectionId: string;
    subscriptionResource: string;
    subscriptionResourceUri: string;
    accountId: string;
}

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

export interface WrestlingOvertimePhase {
    number: number;
    type: WrestlingOvertimeType;
    half: 1 | 2 | null;
}

export interface WrestlingScoreboardTeamRequest extends ScoreboardTeamBaseRequest {
    score: number;
    matchScore: number;
    wrestler: PlayerSummaryRequest | null;
    bandColor: "red" | "blue" | "green" | null;
}

export interface WrestlingScoreboardTeamResponse extends ScoreboardTeamBaseResponse {
    score: number;
    matchScore: number;
    wrestler: PlayerSummaryResponse | null;
    bandColor: "red" | "blue" | "green" | null;
}

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

export interface WrestlingSettingsRequest extends WrestlingSettings {
}

export interface WrestlingSettingsResponse extends WrestlingSettings {
}

export type PermissionItem = {
    [uri: string]: ApiAction[];
}

export type Permissions = {
    allow: ResourcePermissions;
    deny: ResourcePermissions;
}

export type ResourcePermissions = {
    [key in ApiResource]?: PermissionItem[];
}

export {};