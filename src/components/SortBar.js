import React, { Component } from "react";
import "../style/SortBar.css";

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
      <div className="SortBar">
        <select onChange={this.handleChange}>
          <option value="name">Name</option>
          <option value="price">Price</option>
        </select>
      </div>
    );
  }
}

export default SortBar;
