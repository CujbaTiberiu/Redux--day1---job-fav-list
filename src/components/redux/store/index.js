import { combineReducers, configureStore } from '@reduxjs/toolkit'
import addRemoveJobReducer from '../reducers/addRemoveJob'
import findJobReducer from '../reducers/findJob'

const jointReducer = combineReducers({
    addremoveFavs: addRemoveJobReducer,
    jobs: findJobReducer
})

const store = configureStore({
    reducer: jointReducer,

})

export default store