import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import store, {persistor} from './src/redux/store';
import Toast from 'react-native-toast-message';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <HomeScreen />
        <Toast />
      </PersistGate>
    </Provider>
  );
};

export default App;
