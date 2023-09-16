'use client';

import { useEffect, useState } from 'react';
import { useAppSelector } from '@/_redux/hooks';
import { selectBookmarks } from '@/_redux/features/bookmark/bookmarkSlice';
import { ShowType } from '../types';
import { extractData } from '../functions';
import BookmarkButton from '@/_components/Icons/BookmarkButton';
import MovieIcon from '@/_components/Icons/MovieIcon';
import SeriesIcon from '@/_components/Icons/SeriesIcon';

type Props = {
    data: ShowType;
};

const TrendingCard = ({ data }: Props) => {
    const bookmarks = useAppSelector(selectBookmarks);
    const [isBookmarked, setIsBookmarked] = useState(false);

    const {
        id,
        showTitle,
        backdrop_path,
        releaseDate,
        mediaType,
        rating,
        customConfig,
    } = extractData(data);

    useEffect(() => {
        const bookmarked = bookmarks.find((item) => item.id === data.id);
        setIsBookmarked(Boolean(bookmarked));
    }, [bookmarks]);

    return (
        <div
            key={id}
            className={`w-[28rem] h-[14rem] p-6 mr-10 rounded-lg flex flex-col justify-between bg-no-repeat bg-cover bg-blend-multiply bg-[rgba(0,0,0,0.1)] shrink-0`}
            style={{ backgroundImage: `url('${backdrop_path}')` }}
        >
            <div className="ml-auto">
                <BookmarkButton isBookmarked={isBookmarked} data={data} />
            </div>

            <div>
                <div className="flex items-center">
                    <p className="text-sm font-extralight">{releaseDate}</p>
                    <p className="flex items-center text-sm font-extralight capitalize px-2 before:content-['•'] before:pr-2 after:content-['•'] after:pl-2">
                        <span className="mr-2">
                            {mediaType === 'movie' ? (
                                <MovieIcon customConfig={customConfig} />
                            ) : (
                                <SeriesIcon customConfig={customConfig} />
                            )}
                        </span>
                        {mediaType}
                    </p>
                    <p className="text-sm font-extralight">{rating}</p>
                </div>

                <div className="mt-1">
                    <h2 className="text-xl">{showTitle}</h2>
                </div>
            </div>
        </div>
    );
};

export default TrendingCard;
