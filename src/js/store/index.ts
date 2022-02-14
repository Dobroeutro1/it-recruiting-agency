import { applyMiddleware, createStore } from "redux"

import { actionFn } from "./utils"

import reducers from './reducers'

export const store = applyMiddleware(actionFn)(createStore)(reducers)
export * from './actions'
export * as containers from './containers'
