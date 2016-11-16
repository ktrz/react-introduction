import React from 'react';
import Header from './Header'
import Footer from './Footer'
import {Link} from 'react-router'


export default class MyComponent extends React.Component {

  constructor() {
    super();
    this.state = {
      title: 'Welcome other!'
    }
  }

  render() {
    return (
      <div>
        <Header title={this.state.title} onTitleChange={::this.handleTitleChange}/>
        <Link to="/">Back</Link>
        <button onClick={::this.onClick}>Back button</button>
        <Footer/>
      </div>
    )
  }

  handleTitleChange(title) {
    console.log(title)

    this.setState({ title });
  }

  onClick() {
    console.log(this.props)
    this.props.router.push('/')
  }

}