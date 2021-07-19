import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux'

import City from './components/City'
import Weather from './components/Weather'
import { store } from './store/index'

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
          <Screen name='Home' component={Weather} />
          <Screen name='City' component={City} />
        </Navigator>
      </NavigationContainer>
    </Provider>

  )
}