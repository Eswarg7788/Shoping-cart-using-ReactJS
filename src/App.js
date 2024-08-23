import React, { useReducer } from 'react';
import ProductList from './ProductList';
import Cart from './Cart';
import './App.css';
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const UPDATE_QUANTITY = 'UPDATE_QUANTITY';
const initialState = {
  cart: []
};
const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const existingItemIndex = state.cart.findIndex(item => item.id === action.payload.id);
      if (existingItemIndex >= 0) {
        const newCart = [...state.cart];
        newCart[existingItemIndex].quantity += 1;
        return { cart: newCart };
      }
      return { cart: [...state.cart, { ...action.payload, quantity: 1 }] };

    case REMOVE_FROM_CART:
      return { cart: state.cart.filter(item => item.id !== action.payload) };

    case UPDATE_QUANTITY:
      return {
        cart: state.cart.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        )
      };

    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (product) => {
    dispatch({ type: ADD_TO_CART, payload: product });
  };

  const removeFromCart = (productId) => {
    dispatch({ type: REMOVE_FROM_CART, payload: productId });
  };

  const updateQuantity = (productId, quantity) => {
    dispatch({ type: UPDATE_QUANTITY, payload: { id: productId, quantity } });
  };

  return (
    <div className="App">
      <h1 className='name'>ESWAR SHOP</h1>
      <ProductList addToCart={addToCart} />
      <Cart cart={state.cart} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />
    </div>
  );
};

export default App;
