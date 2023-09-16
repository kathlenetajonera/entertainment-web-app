'use client';

import { useAppSelector } from '@/_redux/hooks';
import { selectBookmarks } from '@/_redux/features/bookmark/bookmarkSlice';
import { ShowType } from '@/_components/Card/types';
import SearchBar from '@/_components/SearchBar';
import TextInput from '@/_components/TextInput';
import SectionTitle from '@/_components/Typography/SectionTitle';
import Card from '@/_components/Card';

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
            <div className="flex items-center">
                <SearchBar />
                <TextInput />
            </div>

            {bookmarkedMovies.length > 0 && (
                <div className="mt-10">
                    <SectionTitle>Bookmarked Movies</SectionTitle>

                    <div className="grid grid-cols-fluid gap-10 mt-8">
                        {bookmarkedMovies.map((item: ShowType) => (
                            <Card key={item.id} data={item} />
                        ))}
                    </div>
                </div>
            )}
            {bookmarkedSeries.length > 0 && (
                <div className="mt-10">
                    <SectionTitle>Bookmarked TV Series</SectionTitle>

                    <div className="grid grid-cols-fluid gap-10 mt-8">
                        {bookmarkedSeries.map((item: ShowType) => (
                            <Card key={item.id} data={item} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Bookmarks;
