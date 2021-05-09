import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {useTheme} from '@shopify/restyle';
import {Container, Content, Input, Item} from 'native-base';
import {Text} from './theme';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#fff',
    color: 'black',
    borderRadius: 5,
    padding: 5,
    paddingLeft: 10,
    fontFamily: 'SFProText-Regular',
    fontSize: 18,
    marginBottom: 25,
  },
  label: {
    textAlign: 'center',
    fontFamily: 'SFProText-Regular',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
const CustomInput = ({placeholder}) => {
  const theme = useTheme();
  const [text, setText] = React.useState('');

  return (
    <Item regular style={styles.container}>
      <Input placeholder={placeholder} />
    </Item>
  );
};

export default CustomInput;
