import React, { Component } from 'react';
import { connect } from 'react-redux';
import { cartSelector } from 'redux/cart';

class Category extends Component {
  constructor(props) {
    super(props);
    this.initialize();
  }
  // this.props.dispatch
  componentDidMount() {
    // this.props.dispatch(action())
    console.log('componentDidMount');
  }
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }
  initialize = () => {
    console.log('initialize in cons');
  };
  render() {
    return <div className="c-cart">Cart</div>;
  }
}

const mapStateToProps = state => ({
  cart: cartSelector.getCart(state)
});

export default connect(mapStateToProps)(Category);
