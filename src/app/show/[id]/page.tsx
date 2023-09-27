import Image from 'next/image';
import Link from 'next/link';
import {
    faFacebook,
    faInstagram,
    faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fetchShow, getImagePlaceholder } from '@/_services/DataService';
import { convertTime } from '@/_utils/functions';
import { ShowType } from '@/_components/Card/types';
import imagePlaceholder from '../../../../public/images/placeholder.png';
import Card from '@/_components/Card';

type Props = {
    params: { [key: string]: string };
    searchParams: { [key: string]: string };
};

async function ShowPage({ params, searchParams }: Props) {
    const id = params?.id;
    const category = searchParams?.category?.toLowerCase();

    const data = await fetchShow(id, category);
    const {
        title,
        name,
        release_date,
        runtime,
        popularity,
        backdrop_path,
        overview,
        genres,
    } = data;

    const hasImage = !backdrop_path?.includes('null' || 'undefined');
    const imageUrl = hasImage ? `${backdrop_path}` : imagePlaceholder;
    let base64Url;

    if (hasImage) {
        const { base64 } = await getImagePlaceholder(imageUrl as string);
        base64Url = base64;
    }

    const { cast, crew } = data.credits;
    const director = crew.find((c: ShowType) => c.job === 'Director')?.name;
    const producers = crew
        .filter((c: ShowType) => c.job === 'Executive Producer')
        .map((c: ShowType) => c.name)
        .join(', ');
    const casts = cast.map((c: ShowType) => c.name).join(', ');
    const credits = [
        {
            label: 'Director',
            value: director,
        },
        {
            label: 'Executive Producer',
            value: producers,
        },
        {
            label: 'Stars',
            value: casts,
        },
    ];
    const sharingIcons = [faFacebook, faTwitter, faInstagram];

    return (
        <div className="max-w-[1536px] mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-1 lg:mt-28">
                <Image
                    src={imageUrl}
                    alt={title || name}
                    width={350}
                    height={525}
                    className="mx-auto h-full object-cover"
                    placeholder="blur"
                    blurDataURL={base64Url}
                />
                <div className="pt-6">
                    <div className="flex justify-between">
                        <h2 className="text-2xl">{title || name}</h2>

                        {popularity && (
                            <div className="flex items-center">
                                <FontAwesomeIcon icon={faStar} />
                                <p className="ml-2">{popularity}</p>
                            </div>
                        )}
                    </div>
                    {(release_date || runtime) && (
                        <div className="mt-2 flex items-center">
                            {release_date && (
                                <p className="text-sm font-extralight pr-2 after:content-['•'] after:pl-2">
                                    {release_date.split('-')[0]}
                                </p>
                            )}
                            {runtime && (
                                <p className="text-sm font-extralight">
                                    {convertTime(runtime)}
                                </p>
                            )}
                        </div>
                    )}
                    <div className="mt-3 flex items-center">
                        {genres.map(({ id, name }: any) => (
                            <Link
                                href={`/search?category=${category}&genre=${name}&genre_id=${id}`}
                                className="py-1 px-3 border-[1px] border-white rounded-full text-sm mr-2 hover:bg-[rgba(255,255,255,0.1)] transition duration-300 cursor-pointer"
                            >
                                {name}
                            </Link>
                        ))}
                    </div>
                    <div className="mt-8">
                        <p className="font-extralight">{overview}</p>
                        <div className="my-8">
                            {credits.map(({ label, value }) => {
                                if (value) {
                                    return (
                                        <p className="py-1">
                                            {label}:{' '}
                                            <span className="font-extralight">
                                                {value}
                                            </span>
                                        </p>
                                    );
                                }
                            })}
                        </div>
                        <p>Share this via:</p>
                        <div className="mt-2">
                            {sharingIcons.map((icon, index) => (
                                <FontAwesomeIcon
                                    key={index}
                                    icon={icon}
                                    size="xl"
                                    className="mr-4 cursor-pointer hover:opacity-80 transition-opacity"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {data?.similar && data?.similar.length > 0 && (
                <div className="mt-12">
                    <h3 className="text-xl">More like this</h3>

                    <div className="grid grid-cols-4 gap-10 mt-6 lg:grid-cols-2 md:grid-cols-1 md:gap-6">
                        {data.similar.map((data: ShowType) => (
                            <Card data={data} hideBookmark />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default ShowPage;
