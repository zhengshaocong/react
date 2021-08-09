import {createStore, applyMiddleware, combineReducers} from 'redux'
import user from './reducers/user'
import thunk from 'redux-thunk'
const allReducer = combineReducers({
  user
})
export default createStore(allReducer, applyMiddleware(thunk))
