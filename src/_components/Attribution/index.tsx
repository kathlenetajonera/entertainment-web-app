import Image from 'next/image';
import logo from '../../../public/images/tmdb.svg';

const Attribution = () => {
    return (
        <>
            <div className="mt-20 p-8 border-y border-inactive">
                <Image
                    src={logo}
                    alt="The Movie Database"
                    width={250}
                    height={20}
                    className="mx-auto"
                />
                <p className="mt-3 text-white text-sm text-center">
                    This product uses the TMDB API but is not endorsed or
                    certified by TMDB.
                </p>
            </div>

            <p className="mt-4 text-white text-sm text-center">
                Challenge by{' '}
                <a
                    href="https://www.frontendmentor.io?ref=challenge"
                    target="_blank"
                    className="underline"
                >
                    Frontend Mentor
                </a>
                . Coded by{' '}
                <a
                    href="https://github.com/kathlenetajonera"
                    className="underline"
                    target="_blank"
                >
                    Kathlene&nbsp;Tajonera
                </a>
                .
            </p>
        </>
    );
};

export default Attribution;
