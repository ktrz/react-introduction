'use strict'

//import React from 'react'
const React = require('react')

class MyComponent extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>Our Awesome React App!</title>
          <link rel='stylesheet' href="/style.css"/>
        </head>
        <body>
          <div>
            <h1>Hello World!</h1>
            <p>Isn't server side rendering remarkable</p>
            <button onClick={this.handleClick}>Click me!</button>
          </div>
          <script src='/bundle.js'/>
        </body>
      </html>
    )
  }

  handleClick(){
    alert()
  }
}

module.exports = MyComponent