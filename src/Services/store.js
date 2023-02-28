import { createStore, applyMiddleware, compose } from "redux"
import promiseMiddleware from "redux-promise"
import thunk from "redux-thunk"

import {appGlobalReducers} from "./reducers"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


export const store = createStore(
  appGlobalReducers,
  {},
  // eslint-disable-next-line no-underscore-dangle
  composeEnhancers(applyMiddleware(
    thunk,
    promiseMiddleware,
  ))
)
