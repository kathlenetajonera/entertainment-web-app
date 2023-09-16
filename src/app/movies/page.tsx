import constants from '@/constants';
import { fetchList } from '@/_services/DataService';
import SearchBar from '@/_components/SearchBar';
import Section from '@/_components/Section';

async function Movies() {
    const popularMovies = await fetchList(constants.ENDPOINTS.popularMovies);
    const nowPlayingMovies = await fetchList(
        constants.ENDPOINTS.nowPlayingMovies
    );
    const upcomingMovies = await fetchList(constants.ENDPOINTS.upcomingMovies);

    return (
        <div>
            <SearchBar placeholder="Search for movies" />
            <Section title="Popular" list={popularMovies} />
            <Section title="Now Playing" list={nowPlayingMovies} />
            <Section title="Upcoming" list={upcomingMovies} />
        </div>
    );
}

export default Movies;
