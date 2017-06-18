'use strict'
console.log('main')

loadjs.ready(['polyfills', 'keyLibs'], {// loaded setup libs
	success: function(){

		loadjs([



			], { success: function(){
				TS.signalAppReady()
			}
		})//loadjs
	}//suc
})


