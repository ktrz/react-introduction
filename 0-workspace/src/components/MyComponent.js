import React from 'react';
import Header from './Header'
import Footer from './Footer'
import {Link} from 'react-router'


export default class MyComponent extends React.Component {

  constructor() {
    super();
    this.state = {
      title: 'Welcome!'
    }
  }

  render() {
    return (
      <div>
        <Header title={this.state.title} onTitleChange={::this.handleTitleChange}/>
        <Link to="other">Go to Other</Link>
        <Footer/>
      </div>
    )
  }

  handleTitleChange(title) {
    console.log(title)

    this.setState({ title });
  }

}