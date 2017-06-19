'use strict'
console.log('main')

loadjs.ready(['polyfills', 'keyLibs'], {// loaded setup libs
	success: function(){
		TS.signalAppReady()
	}//suc
})


