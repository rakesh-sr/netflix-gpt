import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";

import { TMDB_API_OPTIONS } from '../utils/constants';
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
   
    const getMovieVideos = async (movieId) => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, TMDB_API_OPTIONS);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            const filterData = data?.results?.filter((video) => video.type === "Trailer");
            const trailer = filterData.length > 0 ? filterData[0] : data?.results[0];
            dispatch(addTrailerVideo(trailer));
        } catch (error) {
            console.error("Failed to fetch movie videos:", error);
        }
    }

    useEffect(() => {
        if (movieId) {
            getMovieVideos(movieId);
        }
    }, [movieId]);
}

export default useMovieTrailer;