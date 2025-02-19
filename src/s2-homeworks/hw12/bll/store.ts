import { configureStore } from "@reduxjs/toolkit";

// Создаем хранилище Redux
export const store = configureStore({
    reducer: {}, // Добавьте редюсеры сюда
});

// Типизация RootState и AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
