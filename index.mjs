"use strict";

import Client from "discord.js"; // for sending discord messages
import FeedMe from'feedme'; // for parsing the feed
import http from 'http'; // for fetching the feed
import dotenv from "dotenv";
dotenv.config(); //for secret management

const client = new Client.Client({
	intents: 98819,
}); //setup discord client with right permissions

client.once('ready', () => {
	console.log('Ready!');
}); //confirmation when client is ready

client.login(process.env.DISCORD_TOKEN); //login using discord token from env variable






http.get('http://crimsontome.com/feed/feed.xml', (res) => {
  if (res.statusCode != 200) {
    console.error(new Error(`status code ${res.statusCode}`));
    return;
  }
  let parser = new FeedMe(true);
  parser.on('title', (title) => {
    console.log('title of feed is', title);
  });
  parser.on('item', (item) => {
    console.log();
	// send a discord message cotaining these

    console.log('Post:', item.title);
	console.log("Link: ", item.id);

	const channel = client.channels.cache.get('1018513941841858620');
	channel.send('Post:', item.title);
	channel.send("Link: ", item.id); 

    // console.log(item.description);
  });
  res.pipe(parser);
	//parser.on('finish', () => {
	//console.log(parser.done());
	//});
});

