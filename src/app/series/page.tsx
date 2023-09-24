import { fetchGenres, fetchList } from '@/_services/DataService';
import constants from '@/constants';
import SearchBar from '@/_components/SearchBar';
import Section from '@/_components/Section';

async function Series() {
    const popularSeries = await fetchList(constants.ENDPOINTS.popularSeries);
    const upcomingSeries = await fetchList(constants.ENDPOINTS.upcomingSeries);
    const genres = await fetchGenres(constants.ENDPOINTS.tvGenres);

    return (
        <div>
            <SearchBar
                category="tv"
                placeholder="Search for series"
                filterDropdown={genres}
            />
            {popularSeries.length > 0 && (
                <Section
                    title="Popular TV Shows"
                    list={popularSeries}
                    customClass="mt-5 lg:mt-28"
                />
            )}
            {upcomingSeries.length > 0 && (
                <Section title="On-The-Air TV Shows" list={upcomingSeries} />
            )}
        </div>
    );
}

export default Series;
