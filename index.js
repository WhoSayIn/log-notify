#!/usr/bin/env node

const Tail = require('tail').Tail;
const notifier = require('node-notifier');

var args = process.argv.slice(2);
filePath = args[0] || "/Users/huseyinkeles/Sites/otel/var/log/dev.log";
includes = args[1] || "CRITICAL";

const tail = new Tail(filePath);

tail.on("line", function(data) {
    if (data.includes(includes)) {
	notifier.notify(
	    {
		message: data,
		sound: true
	    }
        )
    }
});

tail.on("error", function(error) {
    console.log('ERROR: ', error);
});
