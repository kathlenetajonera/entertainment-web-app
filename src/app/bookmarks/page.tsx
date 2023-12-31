'use client';

import { useAppSelector } from '@/_redux/hooks';
import { selectBookmarks } from '@/_redux/features/bookmark/bookmarkSlice';
import ClientSection from '@/_components/Section/Client';
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
                <ClientSection
                    title="Bookmarked Movies"
                    list={bookmarkedMovies}
                    customClass="mt-12 lg:mt-28 md:mt-24"
                />
            )}
            {bookmarkedSeries.length > 0 && (
                <ClientSection
                    title="Bookmarked TV Series"
                    list={bookmarkedSeries}
                    customClass="mt-12 lg:mt-28 md:mt-24"
                />
            )}
        </>
    ) : (
        <EmptyPlaceholder label="You have no bookmarks yet." />
    );
}

export default Bookmarks;
