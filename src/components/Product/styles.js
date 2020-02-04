import styled from 'styled-components';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const Container = styled.View`
  width: ${width - 80};
  max-width: 400px;
  min-height: 380px;
  background: #fff;
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  align-self: flex-start;
`;

export const ProductImage = styled.Image`
  max-width: 200px;
  height: 200px;
  align-self: center;
`;

export const ProductTitle = styled.Text`
  font-size: 16px;
  line-height: 20px;
  color: #333;
  margin-top: 5px;
`;

export const ProductPrice = styled.Text`
  font-size: 21px;
  font-weight: bold;
  margin: 5px 0 20px;
`;

export const Button = styled.TouchableOpacity`
  background: #eb524c;
  width: 100%;
  border-radius: 10px;
  margin-top: auto;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  flex: 1;
  text-align: center;
`;

export const ButtonIcon = styled.View`
  padding: 12px;
  flex-direction: row;
  background: rgba(0, 0, 0, 0.1);
  align-items: center;
`;

export const ButtonCounter = styled.Text`
  color: #fff;
  font-size: 12px;
  padding-left: 5px;
`;
