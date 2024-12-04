import  { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../assets/counterSlice'
export const store = configureStore({
    reducer: {
        counter: counterReducer
    }
})