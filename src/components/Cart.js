import React, { Component } from "react";
import CartItem from "./CartItem";
import "../style/Cart.scss";

class Cart extends Component {
  render() {
    let cartBodyClass = "cart__body cart__body--hidden";
    if (this.props.cartVisible === true) {
      cartBodyClass = "cart__body cart__body--visible";
    }

    let cartItems = "Loading..";
    if (this.props.cartItems.length > 0) {
      cartItems = this.props.cartItems.map(item => {
        return (
          <CartItem
            item={item}
            key={item.id}
            removeItem={this.props.removeItem}
            changeAmount={this.props.changeAmount}
          />
        );
      });
    } else {
      cartItems = <div>Your cart is empty</div>;
    }
    return (
      <div className={cartBodyClass} style={this.props.style}>
        {cartItems}
      </div>
    );
  }
}
export default Cart;
