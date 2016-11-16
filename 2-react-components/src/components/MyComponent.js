import React from 'react';
import Footer from './Footer'
import Header from './Header'

export default class MyComponent extends React.Component {
  constructor() {
    super()
    this.state = {
      title: 'Welcome!'
    }
  }

  render() {
    return (
      <div>
        <Header title={this.state.title} changeTitle={::this.changeTitle}/>
        <Footer/>
      </div>
    )
  }

  changeTitle(title) {
    this.setState({title})
  }
}