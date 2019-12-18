/**
 *
 * @format
 * @flow
 */

import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import './config/ReactotronConfig';

import { Container } from './styles';
import Routes from './routes';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" />
      <Container>
        <Routes />
      </Container>
    </Provider>
  );
}

export default App;
