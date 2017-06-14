var dot = require('jstransformer')(require('jstransformer-dot'))

dot.render('Hello, {{=it.name}}!' { name: 'World'}).body
//=> 'Hello, World!'