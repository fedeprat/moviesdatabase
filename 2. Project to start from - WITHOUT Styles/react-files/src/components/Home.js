
//config
import {POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL} from '../config';
//Image
import NoImage from '../images/no_image.jpg';
//components
import HeroImage from './HeroImage'
//hook
import { useHomeFetch } from '../hooks/useHomeFecth';
import Grid from './Grid'
import Thumb from './Thumb'
import Spinner from './Spinner'

const Home = () => {
    const {state, loading, error} = useHomeFetch()
    console.log(state.results)
    return (<>
    {state.results[0] ? 
    <HeroImage
        image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
        title={state.results[0].original_title}
        text={state.results[0].overview}
        
        /> : 'null' }
        <Grid header= 'Popular Movies'>
            {state.results.map(({id, poster_path}) => (
                <Thumb 
                key={id}
                 clickable
                 image={
                     poster_path
                     ? IMAGE_BASE_URL + POSTER_SIZE + poster_path
                     : NoImage
                 }
                 movieId={id} 
                 />
            ))}
        </Grid>
        <Spinner/>
        </>)
};

export default Home;
 