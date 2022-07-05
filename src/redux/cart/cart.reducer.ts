import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppConstant } from 'constants/app.constant';
import { Cart, ProductInCart } from 'models/cart.model';
import { Product } from 'models/product.model';

interface CartStateModel {
  cart: Cart;
}

export const initialState: CartStateModel = {
  cart: {
    listProduct: [] as ProductInCart[],
    totalAmount: 0
  }
};

export const REDUCER_ID = AppConstant.redux.CART_STATE;

const cartSlice = createSlice({
  name: 'cart',
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const { id } = action.payload;
      const idxProduct = state.cart.listProduct.findIndex(item => item.id === id);
      if (idxProduct === -1) {
        state.cart.listProduct.push({ ...action.payload, quantity: 1 });
        state.cart.totalAmount += action.payload.price;
      } else {
        // if exist, increase quantity
        state.cart.listProduct[idxProduct].quantity += 1;
        state.cart.totalAmount += action.payload.price;
      }
    },
    deleteFromCart: (state, action: PayloadAction<Product>) => {
      const { id } = action.payload;
      const idxProduct = state.cart.listProduct.findIndex(p => p.id === id);
      if (idxProduct !== -1) {
        state.cart.listProduct.splice(idxProduct, 1);
        state.cart.totalAmount -= action.payload.price;
      }
    },
    increaseNumber: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const idxProduct = state.cart.listProduct.findIndex(item => item.id === id);
      if (idxProduct !== -1) {
        state.cart.totalAmount += state.cart.listProduct[idxProduct].price;
        state.cart.listProduct[idxProduct].quantity += 1;
      }
    },
    decreaseNumber: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const idxProduct = state.cart.listProduct.findIndex(item => item.id === id);
      if (idxProduct !== -1) {
        state.cart.totalAmount -= state.cart.listProduct[idxProduct].price;
        state.cart.listProduct[idxProduct].quantity -= 1;
      }
    },
    checkout: () => ({ ...initialState }),
    restoreCart(state, action: PayloadAction<CartStateModel>) {
      return {
        ...state,
        ...action.payload
      };
    }
  },
  initialState
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
