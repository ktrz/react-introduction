'use strict'

require('babel-register')({
    presets: ['react']
})
const express = require('express')
const React = require('React')
const ReactDomServer = require('react-dom/server')
const Component = require('./Component2.jsx')
let app = express()

app.use(express.static('public'))
app.get('/', function(request, response) {
  var html = `
      <html>
        <head>
          <title>Our Awesome React App!</title>
          <link rel='stylesheet' href="/style.css">
        </head>
        <body>
          <div id="root">
           ${ReactDomServer.renderToString(React.createElement(Component))}
          </div>
          <script src='/bundle.js'></script>
        </body>
      </html>
    `
    response.send(html)
})

const PORT = 3000
app.listen(PORT, function () {
    console.log('http://localhost:', PORT)
})
