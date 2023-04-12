import { combineReducers, configureStore } from '@reduxjs/toolkit'
import addRemoveJob from '../reducers/addRemoveJob'
import findJob from '../reducers/findJob'

const jointReducer = combineReducers({
    favs: addRemoveJob,
    jobs: findJob
})

const store = configureStore({
    reducer: jointReducer,

})

export default store