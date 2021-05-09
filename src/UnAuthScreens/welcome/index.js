import React from 'react';
import {Image, StyleSheet} from 'react-native';
import theme, {Box, Text} from '../../components/theme';
import Button from '../../components/Button';

const picture = {
  src: require('../assets/welcome.jpg'),
  width: 4160,
  height: 6240,
};

export default function Welcome({navigation}) {
  return (
    <Box flex={1} backgroundColor="white">
      <Box
        flex={1}
        borderBottomRightRadius="xl"
        backgroundColor="white"
        alignItems="center"
        justifyContent="flex-end">
        <Image
          source={picture.src}
          style={{
            ...StyleSheet.absoluteFillObject,
            width: undefined,
            height: undefined,
            borderBottomRightRadius: theme.borderRadii.xl,
          }}
        />
      </Box>
      <Box flex={1} borderTopLeftRadius="xl">
        <Box
          backgroundColor="white"
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}>
          <Box
            backgroundColor="white"
            borderTopLeftRadius="xl"
            flex={1}
            justifyContent="space-evenly"
            alignItems="center"
            padding="xl">
            <Text variant="title2" textAlign="center" marginBottom="l">
              Welcome
            </Text>
            <Text variant="body" textAlign="center" marginBottom="m">
              Login to your account below or signup for amazing expierience
            </Text>
            <Button
              onPress={() => navigation.navigate('Login')}
              variant="primary"
              label="Have an account? Login"
            />
            <Button
              onPress={() => navigation.navigate('Register')}
              label="Join Us. its Free"
            />
            <Button
              onPress={() => {}}
              variant="transparent2"
              label="Forgot password ?"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
