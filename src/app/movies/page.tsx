import constants from '@/constants';
import { fetchGenres, fetchList } from '@/_services/DataService';
import SearchBar from '@/_components/SearchBar';
import Section from '@/_components/Section';

async function Movies() {
    const popularMovies = await fetchList(constants.ENDPOINTS.popularMovies);
    const upcomingMovies = await fetchList(constants.ENDPOINTS.upcomingMovies);
    const genres = await fetchGenres(constants.ENDPOINTS.movieGenres);

    return (
        <div>
            <SearchBar
                placeholder="Search for movies"
                filterDropdown={genres}
            />
            <Section
                title="Popular Movies"
                list={popularMovies}
                customClass="mt-5"
            />
            <Section title="Upcoming Movies" list={upcomingMovies} />
        </div>
    );
}

export default Movies;
