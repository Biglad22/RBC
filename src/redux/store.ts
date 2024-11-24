import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './usersSlice';
import rolesReducer from './roleSlice';
export const store = configureStore({
    reducer: {
        users: usersReducer,
        roles: rolesReducer
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
