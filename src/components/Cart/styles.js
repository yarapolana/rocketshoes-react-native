import styled from 'styled-components';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const Container = styled.View`
  width: ${width - 60};
  padding: 10px 0;
`;

export const ProductInfo = styled.View`
  flex-direction: row;
  justify-content: center;
`;

export const ProductImage = styled.Image`
  max-width: 80px;
  height: 80px;
  align-self: center;
`;

export const ProductDescription = styled.View`
  flex-shrink: 0.3;
  padding-horizontal: 10px;
`;

export const ProductTitle = styled.Text`
  font-size: 14px;
  color: #333;
  margin: 5px 0;
  max-width: 200px;
`;

export const ProductPrice = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const ProductAmountContainer = styled.Text`
  align-self: center;
`;

export const ProductAmountInputArea = styled.View`
  justify-content: center;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 0 12px;
  margin: 0 5px;
`;

export const ProductAmount = styled.TextInput`
  font-size: 14px;
  text-align: left;
  padding: 5px 10px 5px 0;
`;
export const ProductSubtotal = styled.Text`
  font-size: 16px;
  font-weight: bold;
  flex-grow: 1;
  text-align: right;
`;

export const ProductFooter = styled.View`
  flex-direction: row;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
  background: #eee;
  border-radius: 4px;
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
