import React, { Component } from "react";
import Cart from "./Cart";
import Shop from "./Shop";
import "../style/App.css";
import shopItemsList from "./shopItemsList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      cartVisible: false,
      shopItemsList,
      cartItems: []
    };
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
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

    let stateArr = this.state.cartItems;
    stateArr.push(item);
    this.setState({ cartItems: stateArr });
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

  render() {
    let cartStyle = {
      height: "0",
      visibility: "hidden",
      display: "none"
    };
    if (this.state.cartVisible) {
      cartStyle = { height: "100%" };
    }
    return (
      <div className="App">
        <Cart
          cartItems={this.state.cartItems}
          toggleCart={this.toggleCart}
          removeItem={this.removeItem}
          cartStyle={cartStyle}
        />
        <Shop shopItems={this.state.shopItemsList} addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
