import { fetchShows } from '@/_services/DataService';
import constants from '@/constants';
import { ShowType } from '@/_components/Card/types';
import SectionTitle from '@/_components/Typography/SectionTitle';
import SearchBar from '@/_components/SearchBar';
import Section from '@/_components/Section';
import ListSlider from '@/_components/ListSlider';
import TrendingCard from '@/_components/Card/Trending';

export default async function Home() {
    const trendingList = await fetchShows(
        constants.ENDPOINTS.trendingMovies,
        constants.ENDPOINTS.trendingSeries
    );
    const recommendedList = await fetchShows(
        constants.ENDPOINTS.popularMovies,
        constants.ENDPOINTS.popularSeries
    );

    return (
        <div>
            <SearchBar placeholder="Search for movies or TV series" />

            <div className="mt-5 lg:mt-28 md:mt-24">
                <SectionTitle>Trending</SectionTitle>

                <ListSlider className="mt-8 w-[calc(100%+1.8rem)] md:w-[calc(100%+1.1rem)] md:mt-6">
                    {trendingList.map((item: ShowType) => {
                        return (
                            <div key={item.id}>
                                <TrendingCard data={item} />
                            </div>
                        );
                    })}
                </ListSlider>
            </div>

            <Section title="Recommended for you" list={recommendedList} />
        </div>
    );
}
