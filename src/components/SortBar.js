import React, { Component } from "react";
import "../style/SortBar.css";

class SortBar extends Component {
  render() {
    return (
      <div className="SortBar">
        <select>
          <option value="price">Price</option>
          <option value="name">Name</option>
        </select>
      </div>
    );
  }
}

export default SortBar;
