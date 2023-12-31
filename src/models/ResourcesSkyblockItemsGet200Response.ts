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

import { exists, mapValues } from '../runtime';
import type { SkyBlockItem } from './SkyBlockItem';
import {
    SkyBlockItemFromJSON,
    SkyBlockItemFromJSONTyped,
    SkyBlockItemToJSON,
} from './SkyBlockItem';

/**
 * 
 * @export
 * @interface ResourcesSkyblockItemsGet200Response
 */
export interface ResourcesSkyblockItemsGet200Response {
    /**
     * 
     * @type {boolean}
     * @memberof ResourcesSkyblockItemsGet200Response
     */
    success?: boolean;
    /**
     * 
     * @type {number}
     * @memberof ResourcesSkyblockItemsGet200Response
     */
    lastUpdated?: number;
    /**
     * 
     * @type {Array<SkyBlockItem>}
     * @memberof ResourcesSkyblockItemsGet200Response
     */
    items?: Array<SkyBlockItem>;
}

/**
 * Check if a given object implements the ResourcesSkyblockItemsGet200Response interface.
 */
export function instanceOfResourcesSkyblockItemsGet200Response(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ResourcesSkyblockItemsGet200ResponseFromJSON(json: any): ResourcesSkyblockItemsGet200Response {
    return ResourcesSkyblockItemsGet200ResponseFromJSONTyped(json, false);
}

export function ResourcesSkyblockItemsGet200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResourcesSkyblockItemsGet200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'success': !exists(json, 'success') ? undefined : json['success'],
        'lastUpdated': !exists(json, 'lastUpdated') ? undefined : json['lastUpdated'],
        'items': !exists(json, 'items') ? undefined : ((json['items'] as Array<any>).map(SkyBlockItemFromJSON)),
    };
}

export function ResourcesSkyblockItemsGet200ResponseToJSON(value?: ResourcesSkyblockItemsGet200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'success': value.success,
        'lastUpdated': value.lastUpdated,
        'items': value.items === undefined ? undefined : ((value.items as Array<any>).map(SkyBlockItemToJSON)),
    };
}

