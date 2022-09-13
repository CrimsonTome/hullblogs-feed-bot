FROM node:stable

RUN mkdir -p /usr/hullblogs-feed-bot/src
WORKDIR /usr/hullblogs-feed-bot/src

COPY package.json /usr/hullblogs-feed-bot/src
RUN npm install

COPY . /usr/hullblogs-feed-bot/src

CMD ["node", "src/index.js"]
