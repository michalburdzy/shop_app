import React, { Component } from "react";
import Cart from "./Cart";
import "../style/Navbar.scss";

class Navbar extends Component {
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
      <div className="nav">
        <div className="nav__logo">LOGO</div>
        {/* <div className="cart"> */}

        <Cart
          cartItems={this.props.cartItems}
          removeItem={this.props.removeItem}
          cartVisible={this.props.cartVisible}
          changeAmount={this.props.changeAmount}
        />
        <div className="nav__menu">
          <div className="nav__menu--price">${amount.toFixed(2)}</div>
          <div className="nav__menu--toggle">
            <button
              className="nav__menu--toggle-button"
              onClick={this.toggleCart}
            >
              {buttonText}
            </button>
          </div>
        </div>
        {/* </div> */}
      </div>
    );
  }
}

export default Navbar;
