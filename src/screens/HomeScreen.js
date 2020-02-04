import React, { Component } from 'react';
import { Dimensions, View, Image } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as CartActions from '../store/modules/cart/actions';
import { formatPrice } from '../util/format';
import api from '../services/api';

import Product from '../components/Product';

import { Container } from './styles';
import { FlatList } from 'react-native-gesture-handler';

const { width } = Dimensions.get('window');

class HomeScreen extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('/products');
    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({ products: data });
  }

  handleAddProduct = id => {
    const { addToCartRequest } = this.props;

    addToCartRequest(id);
  };

  render() {
    const { products } = this.state;
    const { amount } = this.props;

    return (
      <Container>
        <FlatList
          horizontal
          data={products}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Product
              source={{ uri: item.image }}
              title={item.title}
              price={item.priceFormatted}
              onPress={() => this.handleAddProduct(item.id)}
              amount={amount[item.id]}
            />
          )}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount;
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
