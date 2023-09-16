import { fetchList } from '@/_services/DataService';
import constants from '@/constants';
import SearchBar from '@/_components/SearchBar';
import Section from '@/_components/Section';

async function Series() {
    const popularSeries = await fetchList(constants.ENDPOINTS.popularSeries);
    const airingToday = await fetchList(constants.ENDPOINTS.airingTodaySeries);
    const upcomingSeries = await fetchList(constants.ENDPOINTS.upcomingSeries);

    return (
        <div>
            <SearchBar placeholder="Search for series" />
            <Section title="Popular" list={popularSeries} />
            <Section title="Airing Today" list={airingToday} />
            <Section title="On The Air" list={upcomingSeries} />
        </div>
    );
}

export default Series;
