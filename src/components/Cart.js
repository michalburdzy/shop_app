import React, { Component } from "react";
import CartList from "./CartList";

class Cart extends Component {
  toggleCart = () => {
    this.props.toggleCart();
  };
  render() {
    let amount = 0;
    this.props.cartItems.map(item => {
      return (amount += item.price * item.amount);
    });

    let buttonText = "Show Cart";
    if (this.props.cartVisible) {
      buttonText = "Hide Cart";
    }

    return (
      <div className="cart">
        <div>
          <button onClick={this.toggleCart}>{buttonText}</button>
        </div>
        <CartList
          cartItems={this.props.cartItems}
          removeItem={this.props.removeItem}
          style={this.props.cartStyle}
          changeAmount={this.props.changeAmount}
        />
        <div>${amount.toFixed(2)}</div>
      </div>
    );
  }
}

export default Cart;
