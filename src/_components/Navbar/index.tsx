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
        <div className="fixed top-8 left-8 bottom-8 flex flex-col items-center justify-between bg-navbar w-24 py-8 rounded-3xl">
            <div className="flex flex-col items-center">
                <Link href="#">
                    <Logo />
                </Link>

                <div className="mt-[70px]">
                    {NAV_ICONS.map(({ key, href, icon }) => (
                        <Link key={key} href={href} className="block mb-10">
                            {icon}
                        </Link>
                    ))}
                </div>
            </div>

            <div className="border-2 border-white rounded-full">
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
