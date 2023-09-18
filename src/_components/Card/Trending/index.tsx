'use client';

import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
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
            className={`relative w-[28rem] h-[14rem] p-6 mr-10 rounded-lg flex flex-col justify-between bg-no-repeat bg-cover bg-blend-multiply bg-[rgba(0,0,0,0.1)] shrink-0 cursor-pointer`}
            style={{
                backgroundImage: backdrop_path.includes('null' || 'undefined')
                    ? `url('/images/placeholder.png')`
                    : `url('${backdrop_path}')`,
            }}
        >
            <div className="absolute top-0 left-0 w-full h-full rounded-lg bg-[rgba(0,0,0,0.2)] flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                <FontAwesomeIcon icon={faEye} size="lg" />
                <p className="ml-1 text-base">View</p>
            </div>

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
