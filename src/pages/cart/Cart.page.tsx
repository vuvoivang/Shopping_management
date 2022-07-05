import React, { Component } from 'react';
import { connect } from 'react-redux';
import { cartActions, cartSelector } from 'redux/cart';
import CartItem from 'components/cart/CartItem.component';
import { ProductInCart } from 'models/cart.model';
import { displayToastify } from 'utilities/toastify/toastify.utility';

type CartProps = {
  cart: { listProduct: ProductInCart[]; totalAmount: number };
  handleCheckout: () => void;
};
class Cart extends Component<CartProps> {
  constructor(props) {
    super(props);
    console.log('constructor');
  }
  componentDidMount() {
    console.log('componentDidMount');
  }
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }
  render() {
    return (
      <div className="c-cart">
        {this.props.cart.listProduct.length > 0 ? (
          <>
            <h1 className="c-cart__header">Your Cart</h1>
            <div className="c-cart__row">
              {this.props.cart.listProduct.map(product => (
                <CartItem key={product.id} cartItem={product} />
              ))}
            </div>
            <div className="c-cart__footer">
              <div className="c-cart__total-amount">
                Tổng tiền thanh toán: <span className="c-cart__total-amount--highlighted">{`${this.props.cart.totalAmount}.000 Đ`}</span>
              </div>
              <button type="button" className="c-cart__btn-checkout" onClick={this.props.handleCheckout}>
                Check out
              </button>
            </div>
          </>
        ) : (
          <h1 className="c-cart__header">Your cart is empty</h1>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cart: cartSelector.getCart(state)
});
const mapDispatchToProps = dispatch => ({
  handleCheckout: () => {
    displayToastify('Check out successfully, please track the shipping process !!', 'success', { position: 'top-center' });
    dispatch(cartActions.checkout());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
