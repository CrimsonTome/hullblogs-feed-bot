"use strict";

import Client from "discord.js";
import FeedParser from "feedparser";
import fetch from "node-fetch"; // for fetching the feed

const client = new Client.Client({
	intents: 98819,
});
