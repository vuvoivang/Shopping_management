import { productList } from 'assets/dummy-data/product.data';
import { Product } from 'models/product.model';
import React, { Component } from 'react';
import MapItem from './MapItem.component';

interface State {
  products: Product[];
}
class Map extends Component {
  state = { products: productList };
  componentDidMount() {
    console.log('componentDidMount');
  }
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  handleRemoveItem = index => {
    this.setState((prevState: State) => ({ products: prevState.products.filter((p, i) => i !== index) }));
  };
  render() {
    return (
      <div className="map">
        <h1 className="map__header">Your Cart</h1>
        <p className="map__desc u-font-weight--mid-bold">Delete a random item and you will find something interesting </p>
        <div className="map__row">
          {this.state.products.map((product, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <MapItem key={index} product={product} handleRemoveItem={this.handleRemoveItem} index={index} />
          ))}
        </div>
      </div>
    );
  }
}

export default Map;
