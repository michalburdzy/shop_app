import React, { Component } from 'react';
import CartItem from './CartItem';
import '../style/Cart.scss';
import FlipMove from 'react-flip-move';

class Cart extends Component {
  render() {
    let cartBodyClass = 'cart__body cart__body--hidden';
    if (this.props.cartVisible === true) {
      cartBodyClass = 'cart__body cart__body--visible';
    }

    if (this.props.cartItems.length > 0) {
      return (
        <div className={cartBodyClass} style={this.props.style}>
          <FlipMove>
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
          </FlipMove>
        </div>
      );
    } else {
      return (
        <div className={cartBodyClass.concat(' cart--empty')}>
          Your cart is empty
        </div>
      );
    }
  }
}
export default Cart;
