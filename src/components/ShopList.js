import React, { Component } from "react";
import ShopItem from "./ShopItem";
import "../style/ShopList.scss";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

class ShopList extends Component {
  render() {
    return (
      <ReactCSSTransitionGroup
        className="ShopList"
        transitionName="fade"
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={true}
        transitionLeave={true}
      >
        {this.props.shopItems.map(item => {
          return (
            <ShopItem
              item={item}
              key={item.name + item.price}
              addItem={this.props.addItem}
            />
          );
        })}
      </ReactCSSTransitionGroup>
    );
  }
}

export default ShopList;
