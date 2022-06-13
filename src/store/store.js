import { createStore, combineReducers, applyMiddleware } from 'redux';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

// ADD CLIP
const INITIAL_CLIP = {
  clip: [],
};
const addClipReducer = persistReducer(
  {
    key: 'clip',
    storage,
    whitelist: ['clip'],
  },
  (state = INITIAL_CLIP, action) => {
    const { payload } = action;
    console.log(payload);
    switch (action.type) {
      case 'addCLIP':
        return {
          clip: [...state.clip, action.payload],
        };
      case 'UNCLIP':
        return { ...INITIAL_CLIP };

      default:
        return state;
    }
  }
);

// Search Data
const INITIAL_SEARCH_DATA = {
  docs: [],
};
const searchReducer = (state = INITIAL_SEARCH_DATA, action) => {
  switch (action.type) {
    case 'addNews':
      return {
        docs: [...state.docs, ...action.payload],
      };

    default:
      return state;
  }
};

const store = createStore(
  combineReducers({
    addClipReducer,
    searchReducer,
  }),
  applyMiddleware(thunk)
);

export default store;

export const persistor = persistStore(store);
