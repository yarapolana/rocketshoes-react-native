import React from 'react';
import { connect } from 'react-redux';

import { Container, Badge, Button, Logo, LogoButton } from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import logo from '../../assets/images/Logo.png';

function Header({ cartSize, navigation }) {
  return (
    <Container>
      <LogoButton onPress={() => navigation.navigate('HOME')}>
        <Logo source={logo} />
      </LogoButton>

      <Button onPress={() => navigation.navigate('CART')}>
        <Icon name="shopping-basket" size={24} color="#FFF" />
        {cartSize ? <Badge>{cartSize}</Badge> : null}
      </Button>
    </Container>
  );
}

export default connect(state => ({
  cartSize: state.cart.length,
}))(Header);
