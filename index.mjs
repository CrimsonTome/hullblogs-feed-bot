"use strict";

import Client from "discord.js";
import FeedParser from "feedparser";
import Fetch from "node-fetch"; // for fetching the feed


import dotenv from "dotenv";
dotenv.config();

const client = new Client.Client({
	intents: 98819,
});

client.once('ready', () => {
	console.log('Ready!');
});

client.login(process.env.DISCORD_TOKEN);
