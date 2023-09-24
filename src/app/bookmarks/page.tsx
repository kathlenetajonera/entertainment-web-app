'use client';

import { useAppSelector } from '@/_redux/hooks';
import { selectBookmarks } from '@/_redux/features/bookmark/bookmarkSlice';
import Section from '@/_components/Section';
import EmptyPlaceholder from '@/_components/EmptyPlaceholder';

function Bookmarks() {
    const bookmarks = useAppSelector(selectBookmarks);
    const bookmarkedMovies = bookmarks.filter(
        (item) => item.media_type === 'movie'
    );
    const bookmarkedSeries = bookmarks.filter(
        (item) => item.media_type === 'tv'
    );

    return bookmarkedMovies.length > 0 || bookmarkedSeries.length > 0 ? (
        <>
            {bookmarkedMovies.length > 0 && (
                <Section title="Bookmarked Movies" list={bookmarkedMovies} />
            )}
            {bookmarkedSeries.length > 0 && (
                <Section title="Bookmarked TV Series" list={bookmarkedSeries} />
            )}
        </>
    ) : (
        <EmptyPlaceholder label="You have no bookmarks yet." />
    );
}

export default Bookmarks;
