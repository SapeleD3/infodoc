import React from 'react';
import {StyleSheet} from 'react-native';
import Containers from '../../components/Container';
import Button from '../../components/Button';
import CustomInput from '../../components/Input';
import {Container, Content} from 'native-base';
import {Box} from '../../components/theme';
import Header from '../../components/Header';

export default function Login({navigation}) {
  return (
    <Container>
      <Header name="Login" navigation={navigation} />
      <Content>
        <Box marginTop="xl" backgroundColor="white" flex={1} padding="l">
          <CustomInput placeholder="Enter email" />
          <CustomInput placeholder="Enter password" />
          <Button
            onPress={() => navigation.navigate('Login')}
            variant="primary"
            color="primary"
            label="Log In"
          />
          <Button
            onPress={() => navigation.navigate('Register')}
            variant="transparent"
            label="Create a new account"
          />
          <Button
            onPress={() => {}}
            variant="transparent2"
            label="Forgot password?"
          />
        </Box>
      </Content>
    </Container>
  );
}
