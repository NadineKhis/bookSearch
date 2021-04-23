import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import booksSlice from "../features/booksSlice";
// import showBooks from '../reducers/showBooks';

export const rootStore = configureStore({
    reducer: {
        books: booksSlice,
    },
});

export type AppDispatch = typeof rootStore.dispatch;
export type RootState = ReturnType<typeof rootStore.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    RootState,
    unknown,
    Action<string>>;
