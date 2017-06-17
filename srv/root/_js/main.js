'use strict'
console.log('main')

loadjs.ready(['polyfills', 'keyLibs'], {// loaded setup libs
	success: function(){
		console.log('main')

		TS.signalAppReady()

	}//suc
})

