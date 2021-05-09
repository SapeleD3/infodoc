import {createTheme, createText, createBox} from '@shopify/restyle';

const theme = createTheme({
  colors: {
    primary: '#4d5eae',
    title: '#0C0D34',
    body: 'rgba(12, 13, 52, 0.7)',
    white: 'white',
    grey: 'rgba(12,13,52,0.05)',
    lightGrey: '#F4F0EF',
    login: '#8CE2F9',
    black: 'black',
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  borderRadii: {
    s: 4,
    m: 10,
    l: 25,
    xl: 75,
  },
  textVariants: {
    hero: {
      fontSize: 50,
      lineHeight: 55,
      fontFamily: 'SFProText-Bold',
      color: 'white',
      textAlign: 'center',
    },
    title1: {
      fontSize: 28,
      fontFamily: 'SFProText-Semibold',
      color: 'title',
    },
    title2: {
      fontSize: 24,
      lineHeight: 30,
      fontFamily: 'SFProText-Semibold',
      color: 'title',
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
      fontFamily: 'SFProText-Regular',
      color: 'body',
    },
    button: {
      fontSize: 15,
      fontFamily: 'SFProText-Semibold',
      color: 'text',
    },
  },
});

export const Text = createText();
export const Box = createBox();
export default theme;
