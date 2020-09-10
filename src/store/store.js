import reducer from './../reducer/reducer';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage/session';
import rootSaga from '../sagas';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['githubReducer'],
};

const persistedReducer = persistReducer(persistConfig, reducer);
const sagaMiddleware = createSagaMiddleware();
export const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? compose(
        applyMiddleware(sagaMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__({ trace: true })
      )
    : applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
