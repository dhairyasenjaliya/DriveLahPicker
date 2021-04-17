import {createStore, combineReducers} from 'redux';
import dateTimeReducer from './dateTime';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const rootReducer = combineReducers({
  dateTimeReducer: dateTimeReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const configureStore = () => {
  return createStore(persistedReducer);
};

export default configureStore;
