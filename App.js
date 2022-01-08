import React from 'react';
import { Provider } from 'react-redux';
import { extendTheme, NativeBaseProvider } from 'native-base';
import { createStackNavigator } from '@react-navigation/stack';
import MainContainer from './components/navigation/MainContainer';
import store from './store';
import { LogBox } from 'react-native';

LogBox.disableYellowBox = true;

const theme = extendTheme({
  components: {
    Input: {
      defaultProps: {
        _focus: {
          style: {
            borderColor: '#f43f5e',
          },
        },
      },
    },
  },
});

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <Provider store={store}>
        <MainContainer />
      </Provider>
    </NativeBaseProvider>
  );
}
