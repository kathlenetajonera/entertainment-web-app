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

    const moviesUrl =
        movieEndpoint + '?language=en-US&with_original_language=en&region=PH';
    const seriesUrl =
        seriesEndpoint + '?language=en-US&with_original_language=en&region=PH';
    const { results: resMovies } = await networkRequest(moviesUrl);
    const { results: resSeries } = await networkRequest(seriesUrl);

    const movies = resMovies.map((item: ShowType) => ({
        ...item,
        media_type: 'movie',
    }));
    const series = resSeries.map((item: ShowType) => ({
        ...item,
        media_type: 'tv',
    }));

    if (movies || series) {
        const shows = movies?.concat(series);
        const sortedList = shows.sort(
            (a: ShowType, b: ShowType) => b.vote_average - a.vote_average
        );
        const slicedList = sortedList.slice(0, 20);
        const data = slicedList.map((item: ShowType) => ({
            ...item,
            backdrop_path: `${imageUrlTemplate}${item.backdrop_path}`,
        }));

        return data;
    }

    return [];
}

export async function fetchList(endpoint: string) {
    const configRes = await networkRequest(constants.ENDPOINTS.configuration);
    let imageUrlTemplate = 'https://image.tmdb.org/t/p/w780';

    if (configRes?.images) {
        const { secure_base_url, backdrop_sizes } = configRes.images;
        imageUrlTemplate = `${secure_base_url}${backdrop_sizes[1]}`;
    }

    const url =
        endpoint +
        '?language=en-US&with_original_language=en&region=PH&include_adult=false';
    const res = await networkRequest(url);

    if (res?.results) {
        const data = res.results.map((item: ShowType) => ({
            ...item,
            backdrop_path: `${imageUrlTemplate}${
                item.backdrop_path || item.poster_path
            }`,
            media_type: endpoint.includes('movie') ? 'movie' : 'tv',
        }));

        return data;
    }

    return [];
}

export async function fetchGenres(endpoint: string) {
    const url = endpoint + '?language=en-US';
    const res = await networkRequest(url);

    if (res?.genres) {
        return res?.genres;
    }

    return [];
}

export async function fetchSearchResults(
    keyword: string,
    category: string,
    genreId?: string
) {
    const configRes = await networkRequest(constants.ENDPOINTS.configuration);
    let imageUrlTemplate = 'https://image.tmdb.org/t/p/w780';

    if (configRes?.images) {
        const { secure_base_url, backdrop_sizes } = configRes.images;
        imageUrlTemplate = `${secure_base_url}${backdrop_sizes[1]}`;
    }

    const endpoints = {
        multiSearch: constants.ENDPOINTS.search + keyword,
        movieGenre: constants.ENDPOINTS.fetchMoviesByGenre + genreId,
        movieSearch: constants.ENDPOINTS.searchMovies + keyword,
        tvGenre: constants.ENDPOINTS.fetchSeriesByGenre + genreId,
        tvSearch: constants.ENDPOINTS.searchSeries + keyword,
    };

    let endpoint = endpoints.multiSearch;

    if (category === 'movie') {
        endpoint = genreId ? endpoints.movieGenre : endpoints.movieSearch;
    } else if (category === 'tv') {
        endpoint = genreId ? endpoints.tvGenre : endpoints.tvSearch;
    }

    const url =
        endpoint +
        '&language=en-US&with_original_language=en&region=PH&include_adult=false';
    console.log(url);

    const res = await networkRequest(url);

    if (res?.results) {
        const data = res.results
            .filter((item: ShowType) => item.media_type !== 'person')
            .map((item: ShowType) => ({
                ...item,
                backdrop_path: `${imageUrlTemplate}${
                    item.backdrop_path || item.poster_path
                }`,
                media_type: item.media_type || category,
            }));

        return data;
    }

    return [];
}
