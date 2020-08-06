import React from 'react';
import {Provider} from 'react-redux';

import {NavigationContainer} from '@react-navigation/native';

import ErrorBaundary from './src/components/ErrorBaundary';
import store from './src/store/store';

import {navigationRef} from './src/navigator/helpers/rootNavigation';
import Navigator from './src/navigator';

const App = () => {
  return (
    <Provider store={store}>
      <ErrorBaundary>
        <NavigationContainer ref={navigationRef}>
          <Navigator />
        </NavigationContainer>
      </ErrorBaundary>
    </Provider>
  );
};
export default App;
