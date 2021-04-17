import * as React from 'react';
import {LogBox} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Navigator from './src/navigation';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';
import configureStore from './src/store';
import {Provider} from 'react-redux';

// Enable Only For Production
LogBox.ignoreAllLogs(true);

const store = configureStore();
const persistor = persistStore(store);

function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Navigator />
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
}

export default App;
