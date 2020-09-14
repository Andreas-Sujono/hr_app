import { createStore, applyMiddleware, combineReducers } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist'
import { createBlacklistFilter } from 'redux-persist-transform-filter';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import auth from 'reducers/auth';

const middlewares = [thunk];
const history = createBrowserHistory();

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['auth'],
  transforms: [
    createBlacklistFilter('auth', ['isLoading'])
  ]
}

const rootReducer = combineReducers({
  router: connectRouter(history),
  auth,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

let store = createStore(
    persistedReducer,
    applyMiddleware(
      ...middlewares, 
      routerMiddleware(history),
    )
);


let persistor = persistStore(store)

export default store
export {history, persistor}
