import React, { Component } from "react";
import "../style/CartItem.scss";
import PropTypes from "prop-types";

class CartItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    let amount = parseInt(e.target.value);
    if (isNaN(amount)) {
      amount = 0;
    }
    if (amount[0] === 0) {
      amount = amount.slice(1);
    }
    this.props.changeAmount(this.props.item, amount);
  }

  handleClick() {
    this.props.removeItem(this.props.item.id);
  }
  render() {
    const { image, name, price, amount } = this.props.item;
    return (
      <div className="cartItem">
        <div className="cartItem__container">
          <img className="cartItem__image" src={image} alt="cart item" />
          <h3 className="cartItem__name">{name}</h3>
        </div>
        <div className="cartItem__container">
          <p className="cartItem__price">${price}</p>
          <input
            // pattern="\d{3}"
            maxLength="3"
            className="cartItem__amount"
            type="number"
            min="0"
            max="999"
            onChange={this.handleChange}
            value={amount}
          />
          <button className="cartItem__remove" onClick={this.handleClick}>
            Remove from cart
          </button>
        </div>
      </div>
    );
  }
}

CartItem.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    amount: PropTypes.number
  })
};

export default CartItem;
