import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as CartActions from '../store/modules/cart/actions';
import { formatPrice } from '../util/format';

import Cart from '../components/Cart';

import {
  Container,
  CartButton,
  CartButtonText,
  CartTotal,
  CartTotalPrice,
  CartContainer,
} from './cartStyles';

function CartScreen({ cart, total, removeFromCart, updateAmountRequest }) {
  function increment(product) {
    updateAmountRequest(product.id, product.amount + 1);
  }

  function decrement(product) {
    updateAmountRequest(product.id, product.amount - 1);
  }

  return (
    <Container>
      <CartContainer>
        {cart.map(product => (
          <Cart
            key={product.id}
            source={{ uri: product.image }}
            title={product.title}
            price={product.priceFormatted}
            onPressDecrement={() => decrement(product)}
            onPressIncrement={() => increment(product)}
            amount={product.amount}
            onPressDelete={() => removeFromCart(product.id)}
            subtotal={product.subtotal}
          />
        ))}
        <CartTotal>TOTAL</CartTotal>
        <CartTotalPrice>{total}</CartTotalPrice>
        <CartButton>
          <CartButtonText>PROCEED TO CHECKOUT</CartButtonText>
        </CartButton>
      </CartContainer>
    </Container>
  );
}

const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    subtotal: formatPrice(product.price * product.amount),
  })),
  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  ),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartScreen);
