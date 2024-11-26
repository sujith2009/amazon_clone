import {View, StatusBar} from 'react-native';
import React from 'react';
import HomeScreen from './src/screens/HomeScreen';

const App = () => {
  return (
    <View>
      <StatusBar backgroundColor="#88dae0" barStyle="dark-content" />
      <HomeScreen />
    </View>
  );
};

export default App;
