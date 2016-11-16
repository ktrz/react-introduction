import React from 'react';

export default class Header extends React.Component {
  render() {
    return (<div>
      <header>{this.props.title}</header>
      <input onChange={this.onTitleChange.bind(this)} value={this.props.title}/>
    </div>)
  }

  onTitleChange(e) {
    console.log(this.props);
    this.props.onTitleChange(e.currentTarget.value);
  }
}