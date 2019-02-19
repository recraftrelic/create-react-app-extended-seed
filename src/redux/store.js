import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import reducers from './reducers'

const reducer = combineReducers(reducers)
const store = createStore(
    reducer,
    applyMiddleware(thunk, logger)
)

export default store
