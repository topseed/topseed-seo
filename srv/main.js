'use strict'
const express = require('express')
const server = express()

const C = (require('./config/ServerConfig'))
global.ServerConfig = new C()

// ssr ###################### 
//server.use('/page/two', require('./scode/route/two/index'))
server.use('/page/list', require('./root/page/list/index'))

// spa ###################### 
const Decider = require('./utils/Decider')
server.use(Decider.decide)
server.use(express.static(ServerConfig.WEBROOT))

//###################### start the server
server.listen(ServerConfig.MOBILE_PORT, '0.0.0.0', function() {
	console.log('Mobile listening at http://localhost:'+ServerConfig.MOBILE_PORT)
	console.log('Press Ctrl+C to quit.')
})

//server.listen(ServerConfig.SPA_PORT, '0.0.0.0', function() {
//	console.log('SPA listening on port '+ ServerConfig.SPA_PORT)
//	console.log('Press Ctrl+C to quit.')
//})
