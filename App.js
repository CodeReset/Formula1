import React from 'react';
import {Provider} from 'react-redux';

import {NavigationContainer} from '@react-navigation/native';

import ErrorBoundary from './src/components/ErrorBoundary';
import store from './src/store/store';

import {navigationRef} from './src/navigator/helpers/rootNavigation';
import Navigator from './src/navigator';

const App = () => {
  return (
    <Provider store={store}>
      <ErrorBoundary>
        <NavigationContainer ref={navigationRef}>
          <Navigator />
        </NavigationContainer>
      </ErrorBoundary>
    </Provider>
  );
};
export default App;
