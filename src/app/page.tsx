import { fetchShows } from '@/_services/DataService';
import constants from '@/constants';
import { ShowType } from '@/_components/Card/types';
import SectionTitle from '@/_components/Typography/SectionTitle';
import SearchBar from '@/_components/SearchBar';
import TextInput from '@/_components/TextInput';
import ListSlider from '@/_components/ListSlider';
import TrendingCard from '@/_components/Card/Trending';
import Card from '@/_components/Card';

export default async function Home() {
    const trendingList = await fetchShows(
        constants.ENDPOINTS.trendingMovies,
        constants.ENDPOINTS.trendingSeries
    );
    const recommendedList = await fetchShows(
        constants.ENDPOINTS.topRatedMovies,
        constants.ENDPOINTS.topRatedSeries
    );

    return (
        <div>
            <div className="flex items-center">
                <SearchBar />
                <TextInput />
            </div>

            <div className="mt-10">
                <SectionTitle>Trending</SectionTitle>

                <ListSlider className="mt-8 w-[calc(100%+2rem)]">
                    {trendingList.map((item: ShowType) => {
                        return (
                            <div key={item.id}>
                                <TrendingCard data={item} />
                            </div>
                        );
                    })}
                </ListSlider>
            </div>

            <div className="mt-12">
                <SectionTitle>Recommended for you</SectionTitle>

                <div className="grid grid-cols-fluid gap-10 mt-8">
                    {recommendedList.map((item: ShowType) => {
                        return <Card key={item.id} data={item} />;
                    })}
                </div>
            </div>
        </div>
    );
}
