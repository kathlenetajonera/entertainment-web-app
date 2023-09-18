import { fetchSearchResults } from '@/_services/DataService';
import SearchBar from '@/_components/SearchBar';
import Section from '@/_components/Section';

type Props = {
    searchParams: { [key: string]: string };
};

async function Search({ searchParams }: Props) {
    const keyword = searchParams?.query;
    const category = searchParams?.category;
    const results = await fetchSearchResults(keyword || '', category || '');

    return (
        <div>
            <SearchBar
                initialValue={keyword}
                placeholder="Search for movies or TV series"
            />

            {results.length > 0 && (
                <Section
                    title={`Found ${results.length} results for ${keyword}`}
                    list={results}
                />
            )}
        </div>
    );
}

export default Search;
