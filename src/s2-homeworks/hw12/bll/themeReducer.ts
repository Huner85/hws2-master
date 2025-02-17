// themeReducer.ts
type ThemeStateType = {
    themeId: number;
};

const initState: ThemeStateType = {
    themeId: 1,
};

type ChangeThemeActionType = {
    type: 'SET_THEME_ID';
    id: number;
};

export const themeReducer = (state = initState, action: ChangeThemeActionType): ThemeStateType => {
    switch (action.type) {
        case 'SET_THEME_ID':
            return { ...state, themeId: action.id };
        default:
            return state;
    }
};

export const changeThemeId = (id: number): ChangeThemeActionType => ({ type: 'SET_THEME_ID', id });
