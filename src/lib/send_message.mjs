#!/usr/bin/env node

import  {Client}  from 'discord.js'; // for sending discord messages

import dotenv from 'dotenv';
dotenv.config(); //for secret management

import do_parse from './fetch_feed.mjs';
import fetch_feed from './fetch_feed.mjs';
const client = new Client({
	intents: 98819,
});

client.login(process.env.DISCORD_TOKEN); //login using discord token from env variable

await new Promise((resolve, reject) => {
    client.once("ready", resolve);
    client.once("error", reject);
});


let message = await do_parse("http://hullblogs.com/feed.xml")
console.log(message);
const channel = client.channels.cache.get('1018513941841858620');    
//channel.send(message);
//,"\nLink: ",(do_parse.item.id)