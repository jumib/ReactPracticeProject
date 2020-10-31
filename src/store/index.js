import {createStore} from 'redux'
import todoReducer from './todoReducer'
//import authReducer from './authReducer'
//import chartReducer from './chartReducer'
//import dashboardReducer from './dashboardReducer'
//import itemReducer from './itemReducer'
//import orderReducer from './orderReducer'


const store = createStore(todoReducer)

export default store