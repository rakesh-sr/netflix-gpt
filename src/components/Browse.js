import { Header } from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {

    useNowPlayingMovies();

    return (
        <>
            <Header />
            <MainContainer />
            <SecondaryContainer />
            {/* Main Container
                - Video Background
                - Video Title
                Secondary Container
                 -Movielist * n
                    - MovieCard * n


            */}
        </>
    )
}

export default Browse