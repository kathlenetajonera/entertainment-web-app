'use client';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../Icons/Logo';
import HomeIcon from '../Icons/HomeIcon';
import MovieIcon from '../Icons/MovieIcon';
import SeriesIcon from '../Icons/SeriesIcon';
import BookmarkIcon from '../Icons/BookmarkIcon';

const NAV_ICONS = [
    {
        key: 'home',
        href: '/',
        icon: <HomeIcon href="/" />,
    },
    {
        key: 'movies',
        href: 'movies',
        icon: <MovieIcon href="/movies" />,
    },
    {
        key: 'series',
        href: 'series',
        icon: <SeriesIcon href="/series" />,
    },
    {
        key: 'bookmark',
        href: 'bookmarks',
        icon: <BookmarkIcon href="/bookmarks" />,
    },
];

const Navbar = () => {
    return (
        <div
            className={`fixed top-8 left-8 bottom-8 flex flex-col items-center justify-between bg-navbar w-24 py-8 rounded-3xl z-[100]
                lg:w-[calc(100%-4rem)] lg:h-20 lg:items-start lg:justify-center lg:px-5 lg:rounded-xl lg:top-6
            `}
        >
            <div className="flex flex-col items-center lg:flex-row lg:w-[70%] lg:items-center lg:justify-between">
                <Link href="#">
                    <Logo />
                </Link>

                <div className="mt-[70px] lg:flex lg:items-center lg:mt-0">
                    {NAV_ICONS.map(({ key, href, icon }) => (
                        <Link
                            key={key}
                            href={href}
                            className="block mb-10 lg:mb-0 lg:mr-10"
                        >
                            {icon}
                        </Link>
                    ))}
                </div>
            </div>

            <div className="border-2 border-white rounded-full lg:absolute lg:right-5">
                <Image
                    src="/images/image-avatar.png"
                    alt="home"
                    width={40}
                    height={40}
                />
            </div>
        </div>
    );
};

export default Navbar;
