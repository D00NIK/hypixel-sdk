/* tslint:disable */
/* eslint-disable */
/**
 * Hypixel Public API
 * # Introduction This is the official Hypixel API documentation. [Hypixel Website](https://hypixel.net/) - [GitHub Repo](https://github.com/HypixelDev/PublicAPI) - [API Help Forum](https://hypixel.net/forums/api-help.111/)  All use of the API must conform to the [API policies](https://developer.hypixel.net/policies), violation of these policies may lead to applications being revoked or users banned from the API. ## Limits API keys are limited to a maximum amount of requests per 5 minute intervals. These limits will depend on the type of application that the key is assigned to.  Endpoints which require the use of an API key will also respond with headers to assist with managing the rate limit: - \'RateLimit-Limit\' - The limit of requests per minute for the provided API key. - \'RateLimit-Remaining\' - The remaining amount of requests allowed for the current minute. - \'RateLimit-Reset\' - The amount of seconds until the next minute and the reset of the API key usages.  ## GameTypes | ID | Type Name      | Database Name | Clean Name           |  |----|----------------|---------------|----------------------|  | 2  | QUAKECRAFT     | Quake         | Quake                |  | 3  | WALLS          | Walls         | Walls                |  | 4  | PAINTBALL      | Paintball     | Paintball            |  | 5  | SURVIVAL_GAMES | HungerGames   | Blitz Survival Games |  | 6  | TNTGAMES       | TNTGames      | TNT Games            |  | 7  | VAMPIREZ       | VampireZ      | VampireZ             |  | 13 | WALLS3         | Walls3        | Mega Walls           |  | 14 | ARCADE         | Arcade        | Arcade               |  | 17 | ARENA          | Arena         | Arena                |  | 20 | UHC            | UHC           | UHC Champions        |  | 21 | MCGO           | MCGO          | Cops and Crims       |  | 23 | BATTLEGROUND   | Battleground  | Warlords             |  | 24 | SUPER_SMASH    | SuperSmash    | Smash Heroes         |  | 25 | GINGERBREAD    | GingerBread   | Turbo Kart Racers    |  | 26 | HOUSING        | Housing       | Housing              |  | 51 | SKYWARS        | SkyWars       | SkyWars              |  | 52 | TRUE_COMBAT    | TrueCombat    | Crazy Walls          |  | 54 | SPEED_UHC      | SpeedUHC      | Speed UHC            |  | 55 | SKYCLASH       | SkyClash      | SkyClash             |  | 56 | LEGACY         | Legacy        | Classic Games        |  | 57 | PROTOTYPE      | Prototype     | Prototype            |  | 58 | BEDWARS        | Bedwars       | Bed Wars             |  | 59 | MURDER_MYSTERY | MurderMystery | Murder Mystery       |  | 60 | BUILD_BATTLE   | BuildBattle   | Build Battle         |  | 61 | DUELS          | Duels         | Duels                |  | 63 | SKYBLOCK       | SkyBlock      | SkyBlock             |  | 64 | PIT            | Pit           | Pit                  |  | 65 | REPLAY         | Replay        | Replay               |  | 67 | SMP            | SMP           | SMP                  |  | 68 | WOOL_GAMES     | WoolGames     | Wool Wars            |  ### Storage Games store their respective stats and data in a Player\'s `stats` collection. The game\'s specific data is held within a JSON object named after it\'s `Database Name` (seen above.) ### GameType Notes * Clean names are what is displayed to the user when referencing the name. * Database names or IDs are used when the API references a specific GameType. ## Notes  ### Date and Time Generally dates are stored as a Unix Epoch times in milliseconds. ### Response Format Responses are served in JSON format. ### UUID Parameters All uuid parameters support both dashed and undashed versions. ### SkyBlock items and inventories Items and inventory data are stored as a base64 encoded string containing gzipped nbt data. If a method is missing important information about an item or inventory, you should try checking this! >Note: the base64 string may contain a unicode escape for non-alphabetical symbols, and some programming languages may have silent defects when interpreting the string.   # Authentication  <!-- ReDoc-Inject: <security-definitions> -->
 *
 * The version of the OpenAPI document: v1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from "../runtime";
import type { SkyBlockAuctionBidsInner } from "./SkyBlockAuctionBidsInner";
import {
  SkyBlockAuctionBidsInnerFromJSON,
  SkyBlockAuctionBidsInnerFromJSONTyped,
  SkyBlockAuctionBidsInnerToJSON,
} from "./SkyBlockAuctionBidsInner";
import type { SkyBlockAuctionItemBytes } from "./SkyBlockAuctionItemBytes";
import {
  SkyBlockAuctionItemBytesFromJSON,
  SkyBlockAuctionItemBytesFromJSONTyped,
  SkyBlockAuctionItemBytesToJSON,
} from "./SkyBlockAuctionItemBytes";

/**
 *
 * @export
 * @interface SkyBlockAuction
 */
export interface SkyBlockAuction {
  /**
   *
   * @type {string}
   * @memberof SkyBlockAuction
   */
  id?: string;
  /**
   *
   * @type {string}
   * @memberof SkyBlockAuction
   */
  uuid?: string;
  /**
   *
   * @type {string}
   * @memberof SkyBlockAuction
   */
  auctioneer?: string;
  /**
   *
   * @type {string}
   * @memberof SkyBlockAuction
   */
  profileId?: string;
  /**
   *
   * @type {Array<string>}
   * @memberof SkyBlockAuction
   */
  coop?: Array<string>;
  /**
   *
   * @type {number}
   * @memberof SkyBlockAuction
   */
  start?: number;
  /**
   *
   * @type {number}
   * @memberof SkyBlockAuction
   */
  end?: number;
  /**
   *
   * @type {string}
   * @memberof SkyBlockAuction
   */
  itemName?: string;
  /**
   *
   * @type {string}
   * @memberof SkyBlockAuction
   */
  itemLore?: string;
  /**
   *
   * @type {string}
   * @memberof SkyBlockAuction
   */
  extra?: string;
  /**
   *
   * @type {string}
   * @memberof SkyBlockAuction
   */
  category?: string;
  /**
   *
   * @type {string}
   * @memberof SkyBlockAuction
   */
  tier?: string;
  /**
   *
   * @type {number}
   * @memberof SkyBlockAuction
   */
  startingBid?: number;
  /**
   *
   * @type {SkyBlockAuctionItemBytes}
   * @memberof SkyBlockAuction
   */
  itemBytes?: SkyBlockAuctionItemBytes;
  /**
   *
   * @type {boolean}
   * @memberof SkyBlockAuction
   */
  claimed?: boolean;
  /**
   *
   * @type {Array}
   * @memberof SkyBlockAuction
   */
  claimedBidders?: Array<string>;
  /**
   *
   * @type {number}
   * @memberof SkyBlockAuction
   */
  highestBidAmount?: number;
  /**
   *
   * @type {Array<SkyBlockAuctionBidsInner>}
   * @memberof SkyBlockAuction
   */
  bids?: Array<SkyBlockAuctionBidsInner>;
}

/**
 * Check if a given object implements the SkyBlockAuction interface.
 */
export function instanceOfSkyBlockAuction(value: object): boolean {
  let isInstance = true;

  return isInstance;
}

export function SkyBlockAuctionFromJSON(json: any): SkyBlockAuction {
  return SkyBlockAuctionFromJSONTyped(json, false);
}

export function SkyBlockAuctionFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): SkyBlockAuction {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: !exists(json, "_id") ? undefined : json["_id"],
    uuid: !exists(json, "uuid") ? undefined : json["uuid"],
    auctioneer: !exists(json, "auctioneer") ? undefined : json["auctioneer"],
    profileId: !exists(json, "profile_id") ? undefined : json["profile_id"],
    coop: !exists(json, "coop") ? undefined : json["coop"],
    start: !exists(json, "start") ? undefined : json["start"],
    end: !exists(json, "end") ? undefined : json["end"],
    itemName: !exists(json, "item_name") ? undefined : json["item_name"],
    itemLore: !exists(json, "item_lore") ? undefined : json["item_lore"],
    extra: !exists(json, "extra") ? undefined : json["extra"],
    category: !exists(json, "category") ? undefined : json["category"],
    tier: !exists(json, "tier") ? undefined : json["tier"],
    startingBid: !exists(json, "starting_bid")
      ? undefined
      : json["starting_bid"],
    itemBytes: !exists(json, "item_bytes")
      ? undefined
      : SkyBlockAuctionItemBytesFromJSON(json["item_bytes"]),
    claimed: !exists(json, "claimed") ? undefined : json["claimed"],
    claimedBidders: !exists(json, "claimed_bidders")
      ? undefined
      : json["claimed_bidders"],
    highestBidAmount: !exists(json, "highest_bid_amount")
      ? undefined
      : json["highest_bid_amount"],
    bids: !exists(json, "bids")
      ? undefined
      : (json["bids"] as Array<any>).map(SkyBlockAuctionBidsInnerFromJSON),
  };
}

export function SkyBlockAuctionToJSON(value?: SkyBlockAuction | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    _id: value.id,
    uuid: value.uuid,
    auctioneer: value.auctioneer,
    profile_id: value.profileId,
    coop: value.coop,
    start: value.start,
    end: value.end,
    item_name: value.itemName,
    item_lore: value.itemLore,
    extra: value.extra,
    category: value.category,
    tier: value.tier,
    starting_bid: value.startingBid,
    item_bytes: SkyBlockAuctionItemBytesToJSON(value.itemBytes),
    claimed: value.claimed,
    claimed_bidders: value.claimedBidders,
    highest_bid_amount: value.highestBidAmount,
    bids:
      value.bids === undefined
        ? undefined
        : (value.bids as Array<any>).map(SkyBlockAuctionBidsInnerToJSON),
  };
}