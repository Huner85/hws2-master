import React from 'react';
import { pureAddUserCallback } from '../HW3';
import { UserType } from '../HW3';

let initialState: UserType[] = []; // Типизируем массив пользователей

const mockSetUsers = (update: React.SetStateAction<UserType[]>): void => {
    if (typeof update === 'function') {
        // Если передана функция, вызываем её с текущим состоянием
        initialState = (update as (prevState: UserType[]) => UserType[])(initialState);
    } else {
        // Если передано значение, устанавливаем его напрямую
        initialState = update;
    }
};

beforeEach(() => {
    initialState = []; // Очищаем перед каждым тестом
});

test('name 1', () => {
    pureAddUserCallback('name', mockSetUsers, initialState); // Используем mockSetUsers
    expect(initialState.length).toBe(1); // Проверяем, что пользователь добавлен
    expect(initialState[0].name).toBe('name'); // Проверяем имя
    expect(!!initialState[0]._id).toBe(true); // Проверяем наличие _id
});

