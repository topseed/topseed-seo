'use strict'
const express = require('express')
const server = express()

const C = (require('./config/ServerConfig'))
global.ServerConfig = new C()
//###################### 
server.use(express.static(ServerConfig.WEBROOT))


server.use('/ren', require('./scode/route/two'))

//###################### start the server
server.listen(ServerConfig.MOBILE_PORT, '0.0.0.0', function() {
	console.log('Mobile listening at http://localhost:'+ServerConfig.MOBILE_PORT)
	console.log('Press Ctrl+C to quit.')
})
