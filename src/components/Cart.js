import React, { Component } from "react";
import CartList from "./CartList";
import "../style/Cart.css";

class Cart extends Component {
  toggleCart = () => {
    this.props.toggleCart();
  };
  render() {
    const cartSum = this.props.cartItems.reduce((prev, current) => {
      return parseFloat(prev) + parseFloat(current.price);
    }, 0);
    return (
      <div className="cart">
        <div>
          <button onClick={this.toggleCart}>Show/Hide</button>
        </div>
        <CartList
          cartItems={this.props.cartItems}
          removeItem={this.props.removeItem}
          style={this.props.cartStyle}
        />
        <div>{cartSum}</div>
      </div>
    );
  }
}

export default Cart;
