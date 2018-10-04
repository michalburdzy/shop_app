import React, { Component } from "react";
import ShopItem from "./ShopItem";

class ShopList extends Component {
  render() {
    let shopItems = this.props.shopItems.map(item => {
      return (
        <ShopItem
          item={item}
          key={item.name + item.price}
          addItem={this.props.addItem}
        />
      );
    });

    return <div className="ShopList">{shopItems}</div>;
  }
}

export default ShopList;
