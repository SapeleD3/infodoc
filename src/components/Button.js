import * as React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {useTheme} from '@shopify/restyle';
import {Text} from './theme';

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  label: {
    textAlign: 'center',
    fontFamily: 'SFProText-Regular',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

const Button = ({label, variant, onPress}) => {
  const theme = useTheme();
  const color =
    variant === 'primary'
      ? theme.colors.white
      : variant === 'transparent'
      ? theme.colors.primary
      : variant === 'transparent2'
      ? theme.colors.body
      : variant === 'login'
      ? theme.colors.white
      : theme.colors.body;
  const backgroundColor =
    variant === 'primary'
      ? theme.colors.primary
      : variant === 'transparent'
      ? 'transparent'
      : variant === 'transparent2'
      ? 'transparent'
      : variant === 'login'
      ? theme.colors.login
      : theme.colors.grey;
  return (
    <RectButton style={[styles.container, {backgroundColor}]} {...{onPress}}>
      <SafeAreaView accessible>
        <Text type="headline" style={[styles.label, {color}]}>
          {label}
        </Text>
      </SafeAreaView>
    </RectButton>
  );
};

export default Button;
