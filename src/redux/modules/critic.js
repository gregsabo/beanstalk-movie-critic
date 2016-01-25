const SUBMIT_MOVIE = 'beanstalk-movie-critic/critic/SUBMIT_MOVIE';

const initialState = {
  movieName: null
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    default:
      return state;
  }
}

export function submitMovie(movieName) {
  return {
    type: SUBMIT_MOVIE,
    payload: movieName
  };
}
