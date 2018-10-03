import React, { Component } from "react";
import "../style/CartItem.css";

class CartItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // console.log(this.props);
    this.props.removeItem(this.props.item.id);
  }
  render() {
    return (
      <div className="CartItem">
        <img src={this.props.item.image} alt="cart item" />
        <h3>{this.props.item.name}</h3>
        <p>{this.props.item.price}</p>
        <button onClick={this.handleClick}>Remove from cart</button>
      </div>
    );
  }
}

export default CartItem;
