import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import thunk, { ThunkMiddleware } from 'redux-thunk';

import { rootReducer } from './rootReducer';

const middlewares = [thunk, logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));