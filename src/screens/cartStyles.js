import styled from 'styled-components';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const Container = styled.View`
  background: #191920;
  flex: 1;
`;

export const CartContainer = styled.View`
  max-width: ${width};
  background: #fff;
  padding: 20px 10px 10px;
  margin: 20px;
  border-radius: 10px;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  align-self: center;
`;

export const CartButton = styled.TouchableOpacity`
  background: #eb524c;
  border: 0;
  width: 100%;
  border-radius: 10px;
  margin-top: auto;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const CartButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  flex: 1;
  text-align: center;
  padding: 12px;
`;

export const CartTotal = styled.Text`
  font-size: 16;
  font-weight: bold;
  color: #999;
  align-items: center;
  padding: 30px 0 10px;
`;

export const CartTotalPrice = styled.Text`
  font-size: 30;
  font-weight: bold;
  letter-spacing: -1.6px;
  padding-bottom: 30px;
`;
