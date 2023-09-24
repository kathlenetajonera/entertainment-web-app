import { fetchSearchResults } from '@/_services/DataService';
import SearchBar from '@/_components/SearchBar';
import Section from '@/_components/Section';
import EmptyPlaceholder from '@/_components/EmptyPlaceholder';

type Props = {
    searchParams: { [key: string]: string };
};

async function Search({ searchParams }: Props) {
    const keyword = searchParams?.query;
    const category = searchParams?.category;
    const genre = searchParams?.genre_id;
    const genreName = searchParams?.genre;
    const results = await fetchSearchResults(
        keyword || '',
        category || '',
        genre || ''
    );

    const title = keyword
        ? `Found ${results.length} results for ${keyword}`
        : `${genreName} ${category === 'tv' ? 'TV Shows' : 'Movies'}`;

    return (
        <div>
            <SearchBar
                initialValue={keyword}
                placeholder="Search for movies or TV series"
            />

            {results.length > 0 ? (
                <Section
                    title={title}
                    list={results}
                    customClass="mt-5 lg:mt-28"
                />
            ) : (
                <EmptyPlaceholder label={`No search results for: ${keyword}`} />
            )}
        </div>
    );
}

export default Search;
