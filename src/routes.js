import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import Header from './components/Header';

import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';

const Routes = createAppContainer(
  createStackNavigator(
    {
      HOME: {
        screen: HomeScreen,
      },
      CART: {
        screen: CartScreen,
      },
    },
    {
      initialRouteName: 'HOME',
      defaultNavigationOptions: navigation => ({
        header: <Header {...navigation} />,
      }),
      mode: 'card',
    }
  )
);

export default Routes;
