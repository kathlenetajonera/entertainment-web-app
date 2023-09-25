'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

type Props = {
    category?: string;
    initialValue?: string | null;
    placeholder: string;
    filterDropdown?: {
        id: number;
        name: string;
    }[];
};

const SearchBar = ({
    category,
    initialValue,
    placeholder,
    filterDropdown,
}: Props) => {
    const router = useRouter();
    const [keyword, setKeyword] = useState('');

    const handleChange = (e: any) => setKeyword(e.target.value);
    const handleKeyDown = (e: any) => {
        if (e.key === 'Enter') {
            const url = category
                ? `/search?query=${keyword}&category=${category}`
                : `/search?query=${keyword}`;

            router.push(url);
        }
    };

    const handleFilter = (e: any) => {
        const { value } = e.target;
        const genreName = filterDropdown?.find(
            (item) => item.id === parseInt(value)
        )?.name;
        const url = `/search?category=${category}&genre=${genreName}&genre_id=${value}`;

        router.push(url);
    };

    useEffect(() => {
        if (initialValue) setKeyword(initialValue);
    }, [initialValue]);

    return (
        <div
            className={`bg-dark flex justify-between items-center sticky top-0 w-[calc(100%+1.9rem)] h-[3.125rem] pr-[1.9rem] z-50
            lg:relative lg:pr-0 lg:w-full lg:top-24
            md:top-16 md:mt-4
            `}
        >
            <div className="flex grow items-center">
                <div className="mr-8 md:mr-4">
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
                        value={keyword}
                        onChange={handleChange}
                        onKeyDown={handleKeyDown}
                    />
                </div>
            </div>

            {filterDropdown && (
                <select
                    className="appearance-none w-48 h-4/5 bg-dark bg-dropdown bg-no-repeat bg-[center_right_0.9rem] bg-[length:0.9rem] text-white px-4 border-[1px] border-white outline-none rounded-md md:hidden"
                    onChange={handleFilter}
                >
                    <option value="">Genres</option>
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
