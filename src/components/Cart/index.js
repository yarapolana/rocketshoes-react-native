import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  ProductImage,
  ProductInfo,
  ProductDescription,
  ProductTitle,
  ProductPrice,
  ProductAmountInputArea,
  ProductAmount,
  ProductSubtotal,
  ProductFooter,
  Button,
} from './styles';

import shoe from '../../assets/images/shoe1.jpg';

const Cart = props => {
  return (
    <Container>
      <ProductInfo>
        <ProductImage
          source={props.source}
          resizeMode="contain"
          style={{ width: 80, height: 80 }}
        />
        <ProductDescription>
          <ProductTitle>{props.title}</ProductTitle>
          <ProductPrice>{props.price}</ProductPrice>
        </ProductDescription>
        <Button onPress={props.onPressDelete}>
          <Icon name="delete-forever" size={24} color="#eb524c" />
        </Button>
      </ProductInfo>
      <ProductFooter>
        <Button onPress={props.onPressDecrement}>
          <Icon name="remove-circle-outline" size={24} color="#eb524c" />
        </Button>
        <ProductAmountInputArea>
          <ProductAmount>{props.amount}</ProductAmount>
        </ProductAmountInputArea>
        <Button onPress={props.onPressIncrement}>
          <Icon name="add-circle-outline" size={24} color="#eb524c" />
        </Button>
        <ProductSubtotal>{props.subtotal}</ProductSubtotal>
      </ProductFooter>
    </Container>
  );
};

export default Cart;
