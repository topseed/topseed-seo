'use strict'
console.log('main')

loadjs.ready(['polyfills', 'keyLibs'], {// loaded setup libs
	success: function(){

		loadjs([

			//https://www.npmjs.com/package/topseed-util
			'https://unpkg.co/topseed-util@23.6.0/BLB.js'

			], { success: function(){
				TS.signalAppReady()
			}
		})//loadjs
	}//suc
})


