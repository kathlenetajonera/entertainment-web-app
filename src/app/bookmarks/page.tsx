'use client';

import { useAppSelector } from '@/_redux/hooks';
import { selectBookmarks } from '@/_redux/features/bookmark/bookmarkSlice';
import SearchBar from '@/_components/SearchBar';
import Section from '@/_components/Section';

function Bookmarks() {
    const bookmarks = useAppSelector(selectBookmarks);
    const bookmarkedMovies = bookmarks.filter(
        (item) => item.media_type === 'movie'
    );
    const bookmarkedSeries = bookmarks.filter(
        (item) => item.media_type === 'tv'
    );

    return (
        <div>
            <SearchBar placeholder="Search bookmarks" />

            {bookmarkedMovies.length > 0 && (
                <Section title="Bookmarked Movies" list={bookmarkedMovies} />
            )}
            {bookmarkedSeries.length > 0 && (
                <Section title="Bookmarked TV Series" list={bookmarkedSeries} />
            )}
        </div>
    );
}

export default Bookmarks;
