import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppConstant } from 'constants/app.constant';
import { Cart } from 'models/cart.model';
import { Product } from 'models/product.model';

interface CartStateModel {
  cart: Cart;
}

export const initialState: CartStateModel = {
  cart: null
};

export const REDUCER_ID = AppConstant.redux.CART_STATE;

const cartSlice = createSlice({
  name: 'cart',
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      state.cart.listProduct.push({ ...action.payload, quantity: 1 });
      state.cart.totalAmount += action.payload.price;
    },
    deleteFromCart: (state, action: PayloadAction<Product>) => {
      const { id } = action.payload;
      const idxProduct = state.cart.listProduct.findIndex(p => p.id === id);
      if (idxProduct !== -1) {
        state.cart.listProduct.splice(idxProduct, 1);
        state.cart.totalAmount -= action.payload.price;
      }
    },
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
