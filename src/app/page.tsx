import SectionTitle from '@/_components/Typography/SectionTitle';
import SearchBar from '@/_components/SearchBar';
import TextInput from '@/_components/TextInput';
import TrendingCard from '@/_components/Card/Trending';
import Card from '@/_components/Card';

export default function Home() {
    return (
        <div>
            <div className="flex items-center">
                <SearchBar />
                <TextInput />
            </div>

            <div className="mt-10">
                <SectionTitle>Trending</SectionTitle>

                <div className="flex mt-8">
                    <TrendingCard />
                    <TrendingCard />
                </div>
            </div>

            <div className="mt-12">
                <SectionTitle>Recommended for you</SectionTitle>

                <div className="grid grid-cols-fluid gap-10 mt-8">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </div>
    );
}
