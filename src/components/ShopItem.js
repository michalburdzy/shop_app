import React, { Component } from "react";
import "../style/ShopItem.scss";
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
      <div className="shopItem">
        <div className="shopItem__side--front">
          <div className="shopItem__image--front">
            <img src={image} alt="Shop article" />
          </div>
          <div>
            <h2 className="shopItem__title">{name}</h2>
          </div>
          <div>${price}</div>
        </div>
        <div className="shopItem__side--back">
          <img
            className="shopItem__image--back"
            src={image}
            alt="Shop article"
          />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            iaculis sapien a euismod eleifend.
          </p>
          <div>
            <button className="shopItem__button" onClick={this.handleClick}>
              add to cart
            </button>
          </div>
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
