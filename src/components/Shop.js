import React, { Component } from "react";
import ShopList from "./ShopList";
import SortBar from "./SortBar";
import "../style/Shop.scss";

class Shop extends Component {
  render() {
    return (
      <div className="shop">
        <SortBar sortShop={this.props.sortShop} />
        <ShopList
          shopItems={this.props.shopItems}
          addItem={this.props.addItem}
        />
      </div>
    );
  }
}
export default Shop;
