import { List, Map } from 'immutable';

import { FETCH_MOVIE, MOVIE_RECEIVED, MOVIE_FETCH_FAILED } from '../actions/actionTypes';

// TODO: ImmutableJS will make this much simpler and easier to extend
export const movies = (state = {
  loading: false,
  movieFetchError: '',
  byID: Map(),
  allIDs: List()
}, action) => {
  switch (action.type) {
    case FETCH_MOVIE:
      return {
        ...state,
        loading: true,
        movieFetchError: ''
      };
    case MOVIE_RECEIVED:
      return {
        ...state,
        loading: false,
        movieFetchError: '',
        byID: state.byID.set(action.payload.imdbID, action.payload),
        allIDs: state.allIDs.push(action.payload.imdbID)
      };
    case MOVIE_FETCH_FAILED:
      return {
        ...state,
        loading: false,
        movieFetchError: action.payload.Error
      };
    default:
      return state;
  }
}
