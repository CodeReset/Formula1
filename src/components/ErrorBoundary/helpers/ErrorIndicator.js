import React from 'react';
import {View, Text} from 'react-native';

import {styles} from '../style';

const ErrorIndicator = () => {
  return (
    <View style={styles.container}>
      <Text>404 Error!!!</Text>
    </View>
  );
};

export default ErrorIndicator;
