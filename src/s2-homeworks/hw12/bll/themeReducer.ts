// src/s2-homeworks/hw12/bll/themeReducer.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type ThemeStateType = {
    themeId: number
}

const initialState: ThemeStateType = {
    themeId: 1,
}

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        changeThemeId: (state, action: PayloadAction<number>) => {
            state.themeId = action.payload
        },
    },
})

export const themeReducer = themeSlice.reducer
export const { changeThemeId } = themeSlice.actions
