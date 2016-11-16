import React from 'react';
import Title from './Title';

export default class Header extends React.Component {
  render() {
    const {title} = this.props;
    return (
      <div>
        <Title title={title}/>
        <input onChange={::this.handleChange} value={title}/>
      </div>
    )
  }

  handleChange(e) {
    const title = e.target.value;
    this.props.changeTitle(title)
  }
}