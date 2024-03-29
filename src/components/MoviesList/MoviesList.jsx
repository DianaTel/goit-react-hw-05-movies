import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { LiStyle, UlStyle, WrapCardStyle } from './MoviesList.styled';

const MoviesList = ({ films }) => {
  const location = useLocation();

  return (
    <UlStyle>
      {films.map(({ id, title, overview, poster_path }) => (
        <Link to={`/movies/${id}`} state={{ from: location }}>
          <LiStyle key={id}>
            <img
              src={
                poster_path
                  ? `http://image.tmdb.org/t/p/w154${poster_path}`
                  : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7zCvwPJgOIZhZJDgdd0Q7Qsfrjqo5JXf-5g&usqp=CAU'
              }
              alt={title}
              width="154"
              height="231"
            />
            <WrapCardStyle>
              <h3>{title}</h3>
              <p>{overview}</p>
            </WrapCardStyle>
          </LiStyle>
        </Link>
      ))}
    </UlStyle>
  );
};

MoviesList.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.node.isRequired).isRequired
  ).isRequired,
};

export default MoviesList;