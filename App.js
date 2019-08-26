/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {View, Text} from 'react-native';
import Component1 from './app/components/Component1/Component1';

const App = () => {
  return (
    <View>
      <Component1 message="World" />
    </View>
  );
};

export default App;
