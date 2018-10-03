import React, { Component } from "react";
import "../style/ShopItem.css";

class ShopItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.addItem(this.props.item);
  }

  render() {
    return (
      <div className="ShopItem">
        <div>
          <img src={this.props.item.image} alt="Shop article" />
        </div>
        <div>{this.props.item.name}</div>
        <div>{this.props.item.price}</div>
        <div>
          <button onClick={this.handleClick}>Add to cart</button>
        </div>
      </div>
    );
  }
}

export default ShopItem;
