import { fetchTrendingShows } from '@/_services/DataService';
import SectionTitle from '@/_components/Typography/SectionTitle';
import SearchBar from '@/_components/SearchBar';
import TextInput from '@/_components/TextInput';
import TrendingCard from '@/_components/Card/Trending';
import Card from '@/_components/Card';

export default async function Home() {
    const trendingList = await fetchTrendingShows();

    return (
        <div>
            <div className="flex items-center">
                <SearchBar />
                <TextInput />
            </div>

            <div className="mt-10">
                <SectionTitle>Trending</SectionTitle>

                <div className="flex mt-8">
                    {trendingList.map((item) => {
                        return <TrendingCard data={item} />;
                    })}
                </div>
            </div>

            <div className="mt-12">
                <SectionTitle>Recommended for you</SectionTitle>

                <div className="grid grid-cols-fluid gap-10 mt-8">
                    {trendingList.map((item) => {
                        return <Card data={item} />;
                    })}
                </div>
            </div>
        </div>
    );
}
