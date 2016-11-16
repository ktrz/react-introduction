'use strict'

require('babel-register')({
    presets: ['react']
})
const express = require('express')
const React = require('React')
const ReactDomServer = require('react-dom/server')
const Component = require('./Component.jsx')
let app = express()

app.use(express.static('public'))
app.get('/', function(request, response) {
    var html = ReactDomServer.renderToString(React.createElement(Component))
    response.send(html)
})

const PORT = 3000
app.listen(PORT, function () {
    console.log('http://localhost:', PORT)
})
