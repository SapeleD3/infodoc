import React from 'react';
import {Image, Dimensions, StyleSheet, StatusBar} from 'react-native';

import theme, {Box} from './theme';

const assets = [require('./assets/patterns/asset3.jpg')];
const {width} = Dimensions.get('window');
const aspectRatio = 640 / 680;
const height = width * aspectRatio;

export default function Container({children}) {
  return (
    <Box flex={1} backgroundColor="login">
      <StatusBar barStyle="light-content" />
      <Box backgroundColor="white">
        <Box overflow="hidden" height={height * 0.7}>
          <Image
            source={assets[0]}
            style={{
              width,
              height,
              borderBottomLeftRadius: theme.borderRadii.xl,
            }}
          />
        </Box>
      </Box>
      <Box flex={1} overflow="hidden">
        <Image
          source={assets[0]}
          style={{
            ...StyleSheet.absoluteFillObject,
            width,
            height,
            top: -height * 0.61,
          }}
        />
        <Box
          borderTopRightRadius="xl"
          borderTopLeftRadius={0}
          backgroundColor="white"
          flex={1}>
          {children}
        </Box>
      </Box>
    </Box>
  );
}
