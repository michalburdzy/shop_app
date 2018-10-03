import React, { Component } from "react";
import CartItem from "./CartItem";
import "../style/CartList.css";

class CartList extends Component {
  render() {
    let cartItems = "Loading..";
    if (this.props.cartItems.length > 0) {
      cartItems = this.props.cartItems.map(item => {
        return (
          <CartItem
            item={item}
            key={item.id}
            removeItem={this.props.removeItem}
          />
        );
      });
    } else {
      cartItems = <div>Your cart is empty</div>;
    }
    return (
      <div className="CartList" style={this.props.style}>
        {cartItems}
      </div>
    );
  }
}
export default CartList;
