import { createStore, combineReducers, applyMiddleware } from 'redux';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
// import { addClipReducer } from './addClipReducer';

const clipPersistConfig = {
  key: 'clip',
  storage,
  whitelist: ['clip'],
};
// ADD CLIP
const INITIAL_CLIP = {
  clip: [],
};
const addClipReducer = persistReducer(
  clipPersistConfig,
  (state = INITIAL_CLIP, action) => {
    const { payload } = action;
    // console.log('store payload', payload);
    switch (action.type) {
      case 'ADDCLIP':
        const newClip = {
          date: payload.date,
          headLine: payload.headLine,
          abstract: payload.abstract,
        };

        return {
          clip: [...state.clip, newClip],
        };

      case 'UNCLIP':
        return {
          clip: state.clip.filter(
            (clipNews) => clipNews.headLine !== payload.headLine
          ),
        };

      default:
        return state;
    }
  }
);

const store = createStore(
  combineReducers({
    addClipReducer,
    // searchReducer: persistReducer(newsPersistConfig, searchReducer),
  }),
  applyMiddleware(thunk)
);

export default store;

export const persistor = persistStore(store);
