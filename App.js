import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';
import {UnAuthenticationNavigator} from './src/UnAuthScreens';
import {AuthenticationNavigator} from './src/AuthScreens';
import {StyleProvider, Root} from 'native-base';
import {ThemeProvider} from '@shopify/restyle';
import theme from './src/components/theme';

export default function App() {
  const [isLoggedIn, setLoggedIn] = React.useState(false);

  React.useEffect(() => {
    setLoggedIn(true);
  }, []);
  return (
    <Root>
      <NavigationContainer>
        <StyleProvider style={getTheme(material)}>
          <ThemeProvider theme={theme}>
            {isLoggedIn ? (
              <>
                <AuthenticationNavigator />
              </>
            ) : (
              <>
                <UnAuthenticationNavigator />
              </>
            )}
          </ThemeProvider>
        </StyleProvider>
      </NavigationContainer>
    </Root>
  );
}
