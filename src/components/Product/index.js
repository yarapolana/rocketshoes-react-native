import React from 'react';

import {
  Container,
  ProductImage,
  ProductTitle,
  ProductPrice,
  Button,
  ButtonText,
  ButtonCounter,
  ButtonIcon,
} from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';

const Product = props => {
  return (
    <Container>
      <ProductImage
        source={props.source}
        resizeMode="contain"
        style={{ width: 200, height: 200 }}
      />
      <ProductTitle>{props.title}</ProductTitle>
      <ProductPrice>{props.price}</ProductPrice>

      <Button onPress={props.onPress}>
        <ButtonIcon>
          <Icon name="add-shopping-cart" size={16} color="#FFF" />
          <ButtonCounter>{props.amount}</ButtonCounter>
        </ButtonIcon>

        <ButtonText>ADD TO CART</ButtonText>
      </Button>
    </Container>
  );
};

export default Product;
