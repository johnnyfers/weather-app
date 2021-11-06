import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux'

import City from './src/screens/City'
import Weather from './src/screens/Weather'
import Home from './src/screens/Home/index'
import { store } from './src/store/index'

const { Navigator, Screen } = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigator
          headerMode="none"
          screenOptions={{
            cardStyle: {
              backgroundColor: 'transparent',
            }
          }}
        >
          <Screen name="Home" component={Home} />
          <Screen name='Weather' component={Weather} />
          <Screen name='City' component={City} />
        </Navigator>
      </NavigationContainer>
    </Provider>
  )
}