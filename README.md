# hullblogs-feed-bot
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-3-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

> Discord.js bot that notifies when a new post appears on hullblogs.com 

## System requirements

 - NodeJS
 - Docker (optional)

## Development

 - clone the repo with `git clone https://github.com/CrimsonTome/hullblogs-feed-bot` or `gh repo clone crimsontome/hullblogs-feed-bot`
 - `cd` into the repo folder
 - make your changes to the code / files (you will need a file called .env containing `DISCORD_TOKEN = YOUR-TOKEN-HERE`)
 - run `npm i` to install all packages
 - run `npm run start` or `node .` / `node src/index.mjs` (if you are in the repo root)

## Building and running

### Node

 - `npm i && npm run start`

### Docker

(dockerfile adapted from [KieranRobson/Clarence-Bot](https://github.com/KieranRobson/Clarence-Bot))

 - `sudo docker build -t feed-bot .`
 - 'sudo docker run --name=feed-bot'

## Dockerfile

```dockerfile
FROM node:16.14

RUN mkdir -p /usr/hullblogs-feed-bot/src
WORKDIR /usr/hullblogs-feed-bot/src

COPY package.json /usr/hullblogs-feed-bot/src
RUN npm install

COPY . /usr/hullblogs-feed-bot/src

CMD ["node", "src/index.mjs"]
```

## Contributing

 - fork the repo via github browser or using `gh repo fork crimsontome/hullblogs-feed-bot`
 - make your changes (make sure everything runs correctly or your PR will be declined until fixes are made)
 - commit your changes with:
   - `git add .`
   - `git commit -m "a suitable commit message"`
 - push your changes with `git push`
 - open a pull request via github browser or with `gh pr create` and follow the prompts
   
## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center"><a href="https://github.com/KieranRobson"><img src="https://avatars.githubusercontent.com/u/32241933?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Kieran</b></sub></a><br /><a href="https://github.com/CrimsonTome/hullblogs-feed-bot/commits?author=KieranRobson" title="Code">💻</a></td>
      <td align="center"><a href="https://links.crimsontome.com"><img src="https://avatars.githubusercontent.com/u/64846840?v=4?s=100" width="100px;" alt=""/><br /><sub><b>CTome</b></sub></a><br /><a href="https://github.com/CrimsonTome/hullblogs-feed-bot/commits?author=CrimsonTome" title="Code">💻</a> <a href="https://github.com/CrimsonTome/hullblogs-feed-bot/commits?author=CrimsonTome" title="Documentation">📖</a></td>
      <td align="center"><a href="https://starbeamrainbowlabs.com/"><img src="https://avatars.githubusercontent.com/u/9929737?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Starbeamrainbowlabs</b></sub></a><br /><a href="https://github.com/CrimsonTome/hullblogs-feed-bot/commits?author=sbrl" title="Code">💻</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->



## License

hullblogs-feed-bot is licensed under the Apache 2.0. The full license text is included in the [LICENSE](LICENSE) file in this repository. Tldr legal have a [great summary](https://tldrlegal.com/license/apache-license-2.0-(apache-2.0)) of the license if you're interested.

