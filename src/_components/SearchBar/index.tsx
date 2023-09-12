import Image from 'next/image';

const SearchBar = () => {
    return (
        <div className="mr-8">
            <Image
                src="/images/icon-search.svg"
                alt="Search"
                width={25}
                height={25}
            />
        </div>
    );
};

export default SearchBar;
