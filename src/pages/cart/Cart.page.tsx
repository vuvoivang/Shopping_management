import React, { Component } from 'react';
import { connect } from 'react-redux';
import { cartSelector } from 'redux/cart';
import CartItem from 'components/cart/CartItem.component';

class Cart extends Component {
  productsInCart = [
    {
      id: 4,
      name: 'Watch 3',
      detail: 'Apple Watch is the ultimate device for a healthy life. Available in the ultimate device for a healthy life',
      price: 109,
      image: 'https://images.timex.com/image/upload/q_auto,f_auto/e_sharpen:120,c_fill/w_900,c_fit/Catalogs/timex-master-catalog/images/TW2P75600.png',
      quantity: 1
    },
    {
      id: 2,
      name: 'Watch 3',
      detail: 'Apple Watch is the ultimate device for a healthy life. Available in the ultimate device for a healthy life',
      price: 109,
      image: 'https://images.timex.com/image/upload/q_auto,f_auto/e_sharpen:120,c_fill/w_900,c_fit/Catalogs/timex-master-catalog/images/TW2P75600.png',
      quantity: 3
    },
    {
      id: 3,
      name: 'Watch 2',
      detail: 'Apple Watch is the ultimate device for a healthy life. ',
      price: 99,
      image: 'https://cf.shopee.vn/file/9b954a57f4a0c21922ff07dcb709f9d2',
      quantity: 2
    },
  ];
  constructor(props) {
    super(props);
    this.initialize();
  }
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
    return (
      <div className="c-cart">
        <h1 className="c-cart__header">Your Cart</h1>
        <div className="c-cart__row">
          {this.productsInCart.map(product => (
            <CartItem key={product.id} cart={product} />
          ))}
        </div>
        <div className="c-cart__action">
          <button type="button" className="c-cart__btn-checkout">
            Thanh Toán
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cart: cartSelector.getCart(state)
});

export default connect(mapStateToProps)(Cart);
