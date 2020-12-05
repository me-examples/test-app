import { combineReducers, createStore } from 'redux';
import { defaultReducer } from './defaultReducer';

const reducers = combineReducers({
 defaultReducer
});

export default function configureStore() {
 return createStore(
  reducers
 );
}