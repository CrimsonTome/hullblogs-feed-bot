"use strict";

import os from 'os';
import path from 'path';
import fs from 'fs';

import phin from "phin";


// HACK: Make sure __dirname is defined when using es6 modules. I forget where I found this - a PR with a source URL would be great :D
const __dirname = import.meta.url.slice(7, import.meta.url.lastIndexOf("/"));

const version = JSON.parse(fs.readFileSync(path.join(__dirname, "../../package.json"))).version;


export default async function fetch_as_string(url) {
	const response = await phin({
		url,
		headers: {
			"user-agent": `hullblogs-feed-bot/${version} (Node.js/${process.version}; ${os.platform()} ${os.arch()})`
		},
		followRedirects: true,
		stream: true
	});
	
	// TODO: handle errors here
	
	return response;
}