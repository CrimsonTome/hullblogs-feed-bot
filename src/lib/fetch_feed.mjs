"use strict";

import { once } from 'events';

import FeedMe from 'feedme'; // for parsing the feed

import fetch_as_stream from "./fetch_as_stream.mjs";


function do_parse(stream) {
	return new Promise((resolve, reject) => {
		let feed = {
			title: null,
			items: []
		};
		let parser = new FeedMe(true);
		parser.on('title', (title) => {
			console.log('title of feed is', title);
			feed.title = title;
		});

		parser.on('item', (item) => {
			// send a discord message containing these
			console.log('Post:', item.title);
			console.log("Link: ", item.id);
			item.real_link = item.link.href ?? item.id;
			// console.log(item);
			// console.log(item.description);
			feed.items.push(item);
		});
		stream.pipe(parser);
		
		once(parser, "end").then(() => {
			resolve(feed);
		});
	});
}

export default async function (url) {
	const response = await fetch_as_stream(url);
	
	return await do_parse(response);
}