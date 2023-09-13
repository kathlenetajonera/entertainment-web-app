export type ShowType = {
    id: number;
    title?: string;
    name?: string;
    release_date?: string;
    first_air_date?: string;
    media_type: string;
    backdrop_path: string;
    adult?: boolean;
    [x: string]: any;
};
