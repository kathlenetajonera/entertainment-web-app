export default {
    API_URL: 'https://api.themoviedb.org/3/',
    ENDPOINTS: {
        configuration: 'configuration',
        search: 'search/multi?query=',
        searchMovies: 'search/movie?query=',
        searchSeries: 'search/tv?query=',

        movieGenres: 'genre/movie/list',
        trendingMovies: 'trending/movie/day',
        popularMovies: 'movie/popular',
        nowPlayingMovies: 'movie/now_playing',
        upcomingMovies: 'movie/upcoming',

        tvGenres: 'genre/tv/list',
        trendingSeries: 'trending/tv/day',
        popularSeries: 'tv/popular',
        airingTodaySeries: 'tv/airing_today',
        upcomingSeries: 'tv/on_the_air',
    },
};
