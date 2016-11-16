'use strict'

const React = require('react')

class MyComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World Awesome!</h1>
        <p>Isn't server side rendering remarkable</p>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    )
  }

  handleClick() {
    alert('It works!')
  }
}

module.exports = MyComponent