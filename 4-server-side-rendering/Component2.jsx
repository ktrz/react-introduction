'use strict'

//import React from 'react'
const React = require('react')

class MyComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <p>Isn't server side rendering remarkable</p>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    )
  }

  handleClick() {
    alert()
  }
}

module.exports = MyComponent