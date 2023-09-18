import Image from 'next/image';

type Props = {
    placeholder: string;
    filterDropdown?: {
        id: number;
        name: string;
    }[];
};

const SearchBar = ({ placeholder, filterDropdown }: Props) => {
    return (
        <div className="bg-dark flex justify-between items-center sticky top-0 py-4 z-10">
            <div className="flex grow items-center ">
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

            {filterDropdown && (
                <select className="appearance-none w-48 bg-dark bg-dropdown bg-no-repeat bg-[center_right_0.9rem] bg-[length:0.9rem] text-white py-3 px-4 border-[1px] border-white outline-none rounded-md">
                    {filterDropdown.map(({ id, name }) => (
                        <option key={id} value={id}>
                            {name}
                        </option>
                    ))}
                </select>
            )}
        </div>
    );
};

export default SearchBar;
