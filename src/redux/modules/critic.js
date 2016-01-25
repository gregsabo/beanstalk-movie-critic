import Immutable from 'immutable';

const SUBMIT_MOVIE = 'beanstalk-movie-critic/critic/SUBMIT_MOVIE';

const initialState = new Immutable.Map({
  movieName: null
});

export default function reducer(stateObj = initialState, action = {}) {
  const state = new Immutable.Map(stateObj);
  switch (action.type) {
    case SUBMIT_MOVIE:
      return state.set('movieName', action.payload);
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
