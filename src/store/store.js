import { createStore, combineReducers } from 'redux';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';
import storage from 'redux-persist/lib/storage';
const INITIAL_CLIP = {
  id: 0,
  date: 0,
  headLine: '',
  abstract: '',
};
const addClipReducer = persistReducer(
  {
    key: 'clip',
    storage,
    whitelist: ['addClipReducer'],
  },
  (state = INITIAL_CLIP, action) => {
    console.log(action.payload);
    switch (action.type) {
      case 'CLIP':
        console.log(state);
        return {
          ...state,
          ...action.playoad,
        };
      case 'UNCLIP':
        return;
      default:
        return state;
    }
  }
);

const store = createStore(
  combineReducers({
    addClipReducer,
  })
);

export default store;

export const persistor = persistStore(store);
