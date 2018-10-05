import React, { Component } from "react";
import Navbar from "./Navbar";
import Shop from "./Shop";
import "../style/App.scss";
import shopItemsList from "../helpers/shopItemsList";
// import { toggleCart, addItem, removeItem } from '../helpers/App'

class App extends Component {
  constructor() {
    super();
    this.state = {
      cartVisible: false,
      shopItemsList,
      cartItems: [],
      sortShopBy: "name"
    };
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.sortShop = this.sortShop.bind(this);
    this.changeAmount = this.changeAmount.bind(this);
  }

  toggleCart = () => {
    if (this.state.cartVisible) {
      this.setState({ cartVisible: false });
    } else {
      this.setState({ cartVisible: true });
    }
  };

  addItem(item) {
    // look in state.cartItems if there is already such item
    let alreadyInCart = this.state.cartItems.find(cartItem => {
      return cartItem.id === item.id;
    });
    if (alreadyInCart) {
      let alreadyInCartIndex = this.state.cartItems.indexOf(alreadyInCart);
      let cartItems = this.state.cartItems;
      cartItems[alreadyInCartIndex].amount++;
      this.setState({ cartItems, cartVisible: true });
    } else {
      let stateArr = this.state.cartItems;
      stateArr.push(item);
      this.setState({ cartItems: stateArr, cartVisible: true });
    }
  }

  removeItem(id) {
    let stateArr = this.state.cartItems;
    let newState = stateArr.filter(el => {
      return el.id !== id;
    });
    this.setState({
      cartItems: newState
    });
  }

  changeAmount(item, amount) {
    const cartItems = this.state.cartItems;
    const foundIndex = cartItems.indexOf(item);
    cartItems[foundIndex].amount = amount;
    this.setState({
      cartItems
    });
  }

  sortShopItems() {
    let sortBy = this.state.sortShopBy;
    let shopArr = this.state.shopItemsList;
    shopArr.sort((a, b) => (a[sortBy] > b[sortBy] ? 1 : 0));
    this.setState({
      shopItemsList: shopArr
    });
  }

  sortShop(sortBy) {
    this.setState(
      {
        sortShopBy: sortBy
      },
      () => {
        this.sortShopItems();
      }
    );
  }

  componentDidMount() {
    this.sortShopItems();
  }

  render() {
    return (
      <div className="App">
        <Navbar
          cartItems={this.state.cartItems}
          toggleCart={this.toggleCart}
          cartVisible={this.state.cartVisible}
          removeItem={this.removeItem}
          changeAmount={this.changeAmount}
        />
        <Shop
          shopItems={this.state.shopItemsList}
          addItem={this.addItem}
          sortShop={this.sortShop}
        />
      </div>
    );
  }
}

export default App;
