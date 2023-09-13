import { ShowType } from './types';

export function extractData(data: ShowType) {
    const {
        id,
        title,
        name,
        release_date,
        first_air_date,
        media_type,
        backdrop_path,
        adult,
    } = data;

    const showTitle = title || name;
    const releaseDate = release_date
        ? release_date.split('-')[0]
        : first_air_date?.split('-')[0];
    const mediaType = media_type === 'tv' ? 'TV Series' : media_type;
    const rating = adult ? '18+' : 'PG';

    const customConfig = {
        width: 12,
        height: 12,
    };

    return {
        id,
        showTitle,
        backdrop_path,
        releaseDate,
        mediaType,
        rating,
        customConfig,
    };
}
