import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 44px 20px 20px;
  background: #141419;
`;
export const LogoButton = styled.TouchableOpacity``;
export const Logo = styled.Image``;

export const Badge = styled.View`
  background: #eb524c;
  border-radius: 8px;
  width: 14px;
  height: 14px;
  position: absolute;
  top: -6px;
  right: -6px;
  justify-content: center;
  text-align: center;
`;

export const BadgeText = styled.Text`
  font-size: 10px;
  color: white;
  text-align: center;
`;

export const Button = styled.TouchableOpacity``;
