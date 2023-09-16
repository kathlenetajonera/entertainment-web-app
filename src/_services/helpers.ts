import constants from '@/constants';

export async function networkRequest(endpoint: string) {
    try {
        const url = constants.API_URL + endpoint;
        const options = {
            headers: {
                Authorization: `Bearer ${process.env.TMDB_ACCESS_KEY}`,
                accept: 'application/json',
            },
        };

        const res = await fetch(url, options);

        if (!res.ok) {
            throw new Error('Failed to fetch data');
        }

        const data = await res.json();
        return data;
    } catch (e) {
        throw new Error('Failed to fetch data');
    }
}
