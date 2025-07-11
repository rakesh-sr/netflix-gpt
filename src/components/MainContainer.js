import { useSelector } from "react-redux"
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
    const movies = useSelector((store) => store.movies?.nowPlayingMovies);

    if (!movies || movies.length === 0)
        return;

    const mainMovie = movies?.[0];

    const { original_title, overview } = mainMovie;
    return (
        <div>
            <VideoTitle title={original_title} overview={overview} />
            <VideoBackground movieId={mainMovie.id} />

        </div>
    )
}

export default MainContainer