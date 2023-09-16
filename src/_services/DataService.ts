import { ShowType } from '@/_components/Card/types';
import { networkRequest } from './helpers';
import constants from '@/constants';

export async function fetchShows(
    movieEndpoint: string,
    seriesEndpoint: string
) {
    const configRes = await networkRequest(constants.ENDPOINTS.configuration);
    let imageUrlTemplate = 'https://image.tmdb.org/t/p/w780';

    if (configRes?.images) {
        const { secure_base_url, backdrop_sizes } = configRes.images;
        imageUrlTemplate = `${secure_base_url}${backdrop_sizes[1]}`;
    }

    const { results: resMovies } = (await networkRequest(movieEndpoint)) || [];
    const { results: resSeries } = (await networkRequest(seriesEndpoint)) || [];

    const movies = resMovies.map((item: ShowType) => ({
        ...item,
        media_type: 'movie',
    }));
    const series = resSeries.map((item: ShowType) => ({
        ...item,
        media_type: 'tv',
    }));

    if (movies || series) {
        const shows = movies
            ?.concat(series)
            ?.filter((item: ShowType) => item.original_language === 'en');
        const sortedList = shows.sort(
            (a: ShowType, b: ShowType) => b.popularity - a.popularity
        );
        const slicedList = sortedList.slice(0, 19);
        const data = slicedList.map((item: ShowType) => ({
            ...item,
            backdrop_path: `${imageUrlTemplate}${item.backdrop_path}`,
        }));

        return data;
    }

    return [];
}
