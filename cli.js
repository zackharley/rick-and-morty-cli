#!/usr/bin/env node
'use strict';
const meow = require('meow');
const rickAndMorty = require('rick-and-morty');
const open = require('opn');

const cli = meow(`
	Examples
	  $ rick-and-morty
	  http://i.giphy.com/l41lI4bYmcsPJX9Go.gif
	  $ rick-and-morty --all
	  http://i.giphy.com/l41lI4bYmcsPJX9Go.gif
	  http://i.giphy.com/2s0ouek7HJmWQ.gif
	  ...
	  $ rick-and-morty -p
	  // -> Opens in your browser

	Options
	  --all  Get all of the GIF URLs
	  --play, -p  Play a random GIF
`, {
	alias: {
		p: 'play'
	}
});

if (cli.flags.all && cli.flags.play) {
	console.log('Sorry, I can\'t play all of the GIFs');
} else if (cli.flags.all) {
	console.log(rickAndMorty.all.join('\n'));
} else if (cli.flags.play) {
	open(rickAndMorty.random());
} else if(!cli.flags.all && !cli.flags.play) {
	console.log(rickAndMorty.random());
} else {
	throw new Error('That is not a command. Type rick-and-morty --help to see commands.');
}
