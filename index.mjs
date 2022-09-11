"use strict";

import Client from "discord.js"; // for sending discord messages
import FeedParser from "feedparser"; // for parsing feeds
import Fetch from "node-fetch"; // for fetching the feed


import dotenv from "dotenv";
dotenv.config(); //for secret management

const client = new Client.Client({
	intents: 98819,
}); //setup discord client with right permissions

client.once('ready', () => {
	console.log('Ready!');
}); //confirmation when client is ready

client.login(process.env.DISCORD_TOKEN); //login using discord token from env variable
