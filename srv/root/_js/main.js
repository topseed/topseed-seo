'use strict'
console.log('main')

Promise.all([
	TS.load('//cdn.jsdelivr.net/dot.js/1.1.1/doT.min.js')
	//, TS.load('//cdn.rawgit.com/topseed/topseed-turbo/master/webComps/tw0-1.0.js').then(function(){TW.init()}) //Support for Standard Web Components
	//, TS.load('//rawgit.com/topseed/topseed-turbo/master/release/topseed-turbo-latest.js')
	, TS.load('/_js/BLX.js')
	, TS.load('/_js/BDS.js')
])
.then(TS.signalAppReady)

