# Disclaimer

This package isn't in any mean actively supported and shouldn't be use in distribution. Instead you should fetch the api yourself or use [hypixel.ts](https://github.com/hypixelts/hypixel.ts). This package is meant to be purely used for testing. Continue at your own risk.

The reason for *weird* naming and code is the way how [OpenAPI Generator](https://github.com/OpenAPITools/openapi-generator) works. This all was generated from Hypixel's OpenAPI Specification (See the begginning of [docs](https://api.hypixel.net))

# Usage

Install from npm with:
```bash
npm i hypixel-sdk
```
\
Import `Configuration` and desired API (e.g. `PlayerDataApi`):
```js
import { Configuration, PlayerDataApi } from "hypixel-sdk";
```
\
Create a new `Configuration` and API Object. (Remember to provide your own api key)
```js
const config = new Configuration({
  apiKey: process.env.HYPIXEL_API_KEY,
});

const playerApi = new PlayerDataApi(config);
```
\
Use an API just how is it described in [docs](https://api.hypixel.net) e.g. get player data.
```js
const user = await playerApi
  .playerGet({
    uuid: "e8fe65bf-3b27-458d-839b-6d29e1457261",
  })
  .catch((err) => console.log(err));

console.log(user);
```

#
