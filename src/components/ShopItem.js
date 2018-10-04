import React, { Component } from "react";
import "../style/ShopItem.css";
import PropTypes from "prop-types";

class ShopItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.addItem(this.props.item);
  }

  render() {
    const { image, name, price } = this.props.item;
    return (
      <div className="ShopItem">
        <div>
          <img src={image} alt="Shop article" />
        </div>
        <div>{name}</div>
        <div>${price}</div>
        <div>
          <button onClick={this.handleClick}>Add to cart</button>
        </div>
      </div>
    );
  }
}

ShopItem.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    amount: PropTypes.number
  })
};

export default ShopItem;
