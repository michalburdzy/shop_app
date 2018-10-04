import React, { Component } from "react";
import PropTypes from "prop-types";

class CartItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.changeAmount(this.props.item, e.target.value);
  }

  handleClick() {
    this.props.removeItem(this.props.item.id);
  }
  render() {
    const { image, name, price, amount } = this.props.item;
    return (
      <div className="CartItem">
        <img src={image} alt="cart item" />
        <h3>{name}</h3>
        <p>${price}</p>

        <input
          type="number"
          min="0"
          onChange={this.handleChange}
          value={amount}
        />
        <button onClick={this.handleClick}>Remove from cart</button>
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
