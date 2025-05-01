import React from 'react';
import 'react-native-gesture-handler';
import 'react-native-reanimated';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import store, {persistor} from './src/redux/store';

import HomeScreen from './src/screens/HomeScreen/HomeScreen';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <HomeScreen />
      </PersistGate>
    </Provider>
  );
};

export default App;
