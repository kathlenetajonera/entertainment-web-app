import { configureStore } from '@reduxjs/toolkit';
import bookmark from './features/bookmark/bookmarkSlice';

export const store = configureStore({
    reducer: {
        bookmark,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
