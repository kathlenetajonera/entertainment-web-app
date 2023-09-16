import Image from 'next/image';

type Props = {
    placeholder: string;
};

const SearchBar = ({ placeholder }: Props) => {
    return (
        <div className="flex items-center sticky top-0 py-3 z-10 bg-dark">
            <div className="mr-8">
                <Image
                    src="/images/icon-search.svg"
                    alt="Search"
                    width={25}
                    height={25}
                />
            </div>

            <div className="w-full">
                <input
                    type="text"
                    placeholder={placeholder}
                    className="w-full border-none outline-none bg-transparent text-xl font-extralight"
                />
            </div>
        </div>
    );
};

export default SearchBar;
