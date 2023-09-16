import { ShowType } from '@/_components/Card/types';
import { RootState } from '@/_redux/store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type BookmarkState = {
    bookmarks: ShowType[];
};

const initialState: BookmarkState = {
    bookmarks: [],
};

export const bookmarkSlice = createSlice({
    name: 'bookmark',
    initialState,
    reducers: {
        setBookmarks: (state, action: PayloadAction<any>) => {
            const selectedItem = action.payload;
            const isExisting = state.bookmarks.find(
                (item) => item.id === selectedItem.id
            );

            if (isExisting) {
                const filtered = state.bookmarks.filter(
                    (item) => item.id !== selectedItem.id
                );

                state.bookmarks = filtered;
            } else {
                state.bookmarks.push(action.payload);
            }
        },
    },
});

export const selectBookmarks = (state: RootState) => state.bookmark.bookmarks;

export const { setBookmarks } = bookmarkSlice.actions;
export default bookmarkSlice.reducer;
