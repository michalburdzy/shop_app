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
        <div className="shopItem__side shopItem__side--front">
          <img
            className="shopItem__image shopItem__image--front"
            src={image}
            alt="Shop article"
          />
          <div>
            <h2 className="shopItem__title">{name}</h2>
            <p className="shopItem__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              iaculis sapien a euismod eleifend.
            </p>
          </div>
        </div>
        <div className="shopItem__side shopItem__side--back">
          <img
            className="shopItem__image shopItem__image--back"
            src={image}
            alt="Shop article"
          />
          <div className="shopItem__price">${price}</div>
          {/* <div className="shopItem__button shopItem__button--container"> */}
          <button
            className="shopItem__button shopItem__button--button"
            onClick={this.handleClick}
          >
            add to cart
          </button>
          {/* </div> */}
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
