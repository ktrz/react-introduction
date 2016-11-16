import React from "react";

export default class Article extends React.Component {
  render() {
    const { title } = this.props;
    const content = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe rem nisi accusamus error velit animi non ipsa placeat. Recusandae, suscipit, soluta quibusdam accusamus a veniam quaerat eveniet eligendi dolor consectetur.'
    return (
      <div class="col-md-4">
        <h4>{title}</h4>
        <p>{content}</p>
        <a class="btn btn-default" href="#">More Info</a>
      </div>
    );
  }
}
