import React, { Component } from "react";
import "../style/SortBar.scss";

class SortBar extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.sortShop(e.target.value);
  }

  render() {
    return (
      <div className="sortBar">
        Sort articles by &nbsp;
        <select className="sortBar__select" onChange={this.handleChange}>
          <option value="name">name</option>
          <option value="price">price</option>
        </select>
      </div>
    );
  }
}

export default SortBar;
