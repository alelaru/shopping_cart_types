import React from 'react';
import { CartItemType } from '../../App';
import CartItem from '../cartItem/cartItem';
import { Wrapper } from './cart.styles';

interface CartProps {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
}

const Cart: React.FC<CartProps> = ({ cartItems, addToCart, removeFromCart}) => {
  return (
    <Wrapper>
      <h2>Your shopping Cart</h2>
      {cartItems.length === 0 ? <p>No items in cart.</p> : null}
      {cartItems.map(item => (
        <CartItem></CartItem>
      ))}
    </Wrapper>
    );
}

export default Cart;