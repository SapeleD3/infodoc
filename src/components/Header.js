import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Icon, Text} from 'native-base';
import {CommonActions} from '@react-navigation/routers';

const Header = ({name, navigation}) => {
  return (
    <View style={styles.container}>
      <Button
        transparent
        iconLeft
        onPress={() => navigation.dispatch(CommonActions.goBack(null))}>
        <Icon name="arrow-back" style={styles.btn} />
      </Button>
      <Text style={styles.title}>{name}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
  },
  title: {
    fontWeight: 'bold',
    fontFamily: 'SFProText-bold',
    fontSize: 25,
    margin: 2,
    marginLeft: 15,
    letterSpacing: 0.5,
    color: '#4d5eae',
    textAlign: 'center',
  },
  btn: {
    color: '#4d5eae',
  },
});
