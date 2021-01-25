import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import thunk, { ThunkMiddleware } from 'redux-thunk';

import { rootReducer } from './rootReducer';

const middlewares = process.env.LOGGER==='true'?[thunk, logger]:[thunk];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
