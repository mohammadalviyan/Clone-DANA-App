import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import { logger } from 'redux-logger';
import reducers from './Reducers';

export const store = createStore(reducers, applyMiddleware(logger));
export const persistor = persistStore(store);