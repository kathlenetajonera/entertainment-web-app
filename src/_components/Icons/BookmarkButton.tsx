'use client';
import { useEffect, useState } from 'react';
import {
    selectBookmarks,
    setBookmarks,
} from '@/_redux/features/bookmark/bookmarkSlice';
import { useAppDispatch, useAppSelector } from '@/_redux/hooks';
import { ShowType } from '../Card/types';

type Props = {
    id: number;
    data: ShowType;
};

const BookmarkButton = ({ id, data }: Props) => {
    const dispatch = useAppDispatch();
    const bookmarks = useAppSelector(selectBookmarks);
    const [isBookmarked, setIsBookmarked] = useState(false);

    const handleBookmark = (e: any) => {
        e.preventDefault();
        dispatch(setBookmarks(data));
    };

    useEffect(() => {
        const bookmarked = bookmarks.find((item) => item.id === id);
        setIsBookmarked(Boolean(bookmarked));
    }, [bookmarks, id]);

    return (
        <div
            className={`w-8 h-8 bg-black rounded-full flex items-center justify-center opacity-60 cursor-pointer ${
                isBookmarked ? 'fill-white' : ''
            } hover:fill-white`}
            onClick={handleBookmark}
        >
            <svg
                width="12"
                height="14"
                className="stroke-white stroke-[1.5px] transition-[fill] duration-300 "
            >
                <path
                    d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
                    // stroke="#FFF"
                    // stroke-width="1.5"
                    // fill="none"
                />
            </svg>
        </div>
    );
};

export default BookmarkButton;
