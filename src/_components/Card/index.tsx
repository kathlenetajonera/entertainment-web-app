import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { getImagePlaceholder } from '@/_services/DataService';
import { ShowType } from './types';
import { extractData } from './functions';
import imagePlaceholder from '../../../public/images/placeholder.png';
import BookmarkButton from '@/_components/Icons/BookmarkButton';
import MovieIcon from '@/_components/Icons/MovieIcon';
import SeriesIcon from '../Icons/SeriesIcon';

type Props = {
    data: ShowType;
};

const Card = async ({ data }: Props) => {
    const {
        id,
        showTitle,
        backdrop_path,
        releaseDate,
        mediaType,
        rating,
        customConfig,
    } = extractData(data);

    const hasImage = !backdrop_path.includes('null' || 'undefined');
    const imageUrl = hasImage ? `${backdrop_path}` : imagePlaceholder;
    let base64Url;

    if (hasImage) {
        const { base64 } = await getImagePlaceholder(imageUrl as string);
        base64Url = base64;
    }

    return (
        <div key={id} className="group cursor-pointer">
            <div className="relative h-[11rem] p-4 rounded-lg flex flex-col justify-between bg-no-repeat bg-cover bg-blend-multiply bg-[rgba(0,0,0,0.1)]">
                <Image
                    src={imageUrl}
                    width={780}
                    height={439}
                    className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
                    alt={showTitle || ''}
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL={base64Url}
                />

                <div className="absolute top-0 left-0 w-full h-full rounded-lg bg-[rgba(0,0,0,0.2)] flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <FontAwesomeIcon icon={faEye} size="lg" />
                    <p className="ml-1 text-base">View</p>
                </div>

                <div className="ml-auto">
                    <BookmarkButton id={data.id} data={data} />
                </div>
            </div>
            <div className="mt-2">
                <div className="flex items-center">
                    <p className="text-xs font-extralight">{releaseDate}</p>
                    <p className="flex items-center text-xs font-extralight capitalize px-2 before:content-['•'] before:pr-2 after:content-['•'] after:pl-2">
                        <span className="mr-2">
                            {mediaType === 'movie' ? (
                                <MovieIcon customConfig={customConfig} />
                            ) : (
                                <SeriesIcon customConfig={customConfig} />
                            )}
                        </span>
                        {mediaType}
                    </p>
                    <p className="text-xs font-extralight">{rating}</p>
                </div>

                <div className="mt-1">
                    <h2 className="text-lg">{showTitle}</h2>
                </div>
            </div>
        </div>
    );
};

export default Card;
