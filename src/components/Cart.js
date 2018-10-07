import React, { Component } from "react";
import CartItem from "./CartItem";
import "../style/Cart.scss";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

class Cart extends Component {
  render() {
    let cartBodyClass = "cart__body cart__body--hidden";
    if (this.props.cartVisible === true) {
      cartBodyClass = "cart__body cart__body--visible";
    }

    if (this.props.cartItems.length > 0) {
      return (
        <div className={cartBodyClass} style={this.props.style}>
          <ReactCSSTransitionGroup
            transitionName="fade"
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}
            transitionAppear={true}
            transitionAppearTimeout={500}
          >
            {this.props.cartItems.map(item => {
              return (
                <CartItem
                  item={item}
                  key={item.id}
                  removeItem={this.props.removeItem}
                  changeAmount={this.props.changeAmount}
                />
              );
            })}
          </ReactCSSTransitionGroup>
        </div>
      );
    } else {
      return (
        <div className={cartBodyClass.concat(" cart--empty")}>
          Your cart is empty
        </div>
      );
    }
  }
}
export default Cart;
