import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem } from '../features/cart/cartSlice';

const CartView = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Shopping Cart {cartItems}</h1>
      <button onClick={()=>dispatch(addItem())}>Add Item to Cart</button>
      <button onClick={()=>dispatch(removeItem())}>Clear Cart</button>
    </div>
  );
}

export default CartView;
