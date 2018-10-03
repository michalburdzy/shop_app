import React, { Component } from "react";
import ShopItem from "./ShopItem";

class ShopList extends Component {
  render() {
    return (
      <div>
        <ShopItem />
        <ShopItem />
        <ShopItem />
        <ShopItem />
      </div>
    );
  }
}

export default ShopList;
