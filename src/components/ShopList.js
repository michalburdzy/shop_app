import React, { Component } from 'react';
import ShopItem from './ShopItem';
import '../style/ShopList.scss';
import FlipMove from 'react-flip-move';

class ShopList extends Component {
  render() {
    return (
      <FlipMove className="ShopList">
        {this.props.shopItems.map(item => {
          return (
            <ShopItem
              item={item}
              key={item.name + item.price}
              addItem={this.props.addItem}
            />
          );
        })}
      </FlipMove>
    );
  }
}

export default ShopList;
