import Loader from 'components/Loader/Loader';
import { LiStyle, UlStyle } from 'components/MoviesList/MoviesList.styled';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast, onFetchError } from 'services/api';

const endPoint = '/movie';

const Cast = () => {
  const { movieId } = useParams();
  const [loading, setLoading] = useState(true);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    if (!movieId) {
      return;
    }

    fetchMovieCast(endPoint, movieId)
      .then(data => {
        setCast(data.cast);
      })
      .catch(onFetchError)
      .finally(() => setLoading(false));
  }, [movieId]);

  return (
    <>
      <h3>Cast:</h3>
      {loading && <Loader />}
      {cast.length !== 0 ? (
        <UlStyle>
          {cast.map(({ id, name, character, profile_path }) => (
            <LiStyle key={id}>
              <b>{name}</b>
              <p>Character: {character}</p>
              <img
                src={
                  profile_path
                    ? `http://image.tmdb.org/t/p/w185${profile_path}`
                    : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7zCvwPJgOIZhZJDgdd0Q7Qsfrjqo5JXf-5g&usqp=CAU'
                }
                alt={name}
                width="100"
                height="150"
              />
            </LiStyle>
          ))}
        </UlStyle>
      ) : (
        <p>Sorry! We don't have any information about cast</p>
      )}
    </>
  );
};

export default Cast;
