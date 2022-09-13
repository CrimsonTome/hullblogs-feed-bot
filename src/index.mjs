"use strict";

import  {Client}  from 'discord.js'; // for sending discord messages
import FeedMe from 'feedme'; // for parsing the feed

import dotenv from 'dotenv';
dotenv.config(); //for secret management
import wget from 'wget';

const client = new Client({
	intents: 98819,
});

client.login(process.env.DISCORD_TOKEN); //login using discord token from env variable

await new Promise((resolve, reject) => {
    client.once("ready", resolve);
    client.once("error", reject);
});

// http.get('https://raw.githubusercontent.com/FreesideHull/hullblogs.com/main/feeds.json', (res) => {
//   if (res.statusCode != 200) {
//     console.error(new Error(`status code ${res.statusCode}`));
//     return;
//   }

var src = 'https://hullblogs.com/feed.xml';
var output = '/tmp/data.json';
var options = {
    proxy: 'https://host:port'
};
var download = wget.download(src, output);
download.on('error', function(err) {
    console.log(err);
});
download.on('end', function(output) {
    console.log(output);
});
// download.on('progress', function(progress) {
//     // code to show progress bar
// });

  let parser = new FeedMe(true);
  parser.on('item', (item) => {
    // send a discord message containing these
    console.log('Post:', item.title);
    console.log("Link: ", item.id);

    const channel = client.channels.cache.get('1018513941841858620');    
    channel.send(`Post: ${item.title}\r\nLink: ${item.id}
    `);

    // console.log(item.description);
  });
   //wget.pipe(parser);
	//parser.on('finish', () => {
	//console.log(parser.done());
	//});
