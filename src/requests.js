const APIKEY = "936837bd690ccce8efe7a55b0a846505";
    const requests={
        fetchTrending:`https://api.themoviedb.org/3/trending/all/day?api_key=${APIKEY}`,
        fetchNetflixOriginals:`https://api.themoviedb.org/3/discover/movie?api_key=936837bd690ccce8efe7a55b0a846505&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=27&with_watch_monetization_types=flatrate`,
        fetchTopRated:`https://api.themoviedb.org/3/movie/top_rated?api_key=${APIKEY}&language=en-US&page=1`,
        fetchActionMovies:`https://api.themoviedb.org/3/discover/movie?api_key=936837bd690ccce8efe7a55b0a846505&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28&with_watch_monetization_types=flatrate`,
        fetchComedyMovies:`https://api.themoviedb.org/3/discover/movie?api_key=936837bd690ccce8efe7a55b0a846505&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=35&with_watch_monetization_types=flatrate`,
        fetchHorrorMovies:`https://api.themoviedb.org/3/discover/movie?api_key=936837bd690ccce8efe7a55b0a846505&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=27&with_watch_monetization_types=flatrate`,
        fetchRomanceMovies:`https://api.themoviedb.org/3/discover/movie?api_key=936837bd690ccce8efe7a55b0a846505&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10749&with_watch_monetization_types=flatrate`,
        fetchDocumentaries:`https://api.themoviedb.org/3/discover/movie?api_key=936837bd690ccce8efe7a55b0a846505&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=99&with_watch_monetization_types=flatrate`,
    };
    export default requests;
