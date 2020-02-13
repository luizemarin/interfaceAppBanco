import styled from 'styled-components';
import {Animated} from 'react-native';

export const Container = styled(Animated.View)`
  height: 100px;
  margin-top: 20px;
`;

export const TabContainer = styled.ScrollView.attrs({
  horizontal: true,
  showHorizontalScrollIndicator: false,
  contentContainerStyle: {paddingLeft: 10, paddingRight: 20},
})``;

export const TabItem = styled.View`
  width: 100px;
  height: 100px;
  border-radius: 3px;
  margin-left: 10px;
  padding: 10px;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.2);
`;

export const TabText = styled.Text`
  font-size: 13px;
  color: #fff;
`;
