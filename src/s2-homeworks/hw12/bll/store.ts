// src/s1-main/store.ts

import { configureStore } from '@reduxjs/toolkit'
import { themeReducer } from '../bll/themeReducer'

export const store = configureStore({
    reducer: {
        theme: themeReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

