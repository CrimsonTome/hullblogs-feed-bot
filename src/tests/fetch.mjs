#!/usr/bin/env node
"use strict";




import fetch_feed from '../lib/fetch_feed.mjs';



console.log(await fetch_feed("http://hullblogs.com/feed.xml"));