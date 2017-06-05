import { FETCH_MOVIE, MOVIE_RECEIVED, MOVIE_FETCH_FAILED } from '../actions/actionTypes';
// TODO: ImmutableJS will make this much simpler and easier to extend
export const movies = (state = {
  loading: false,
  movieFetchError: '',
  byID: {},
  allIDs: []
}, action) => {
  switch (action.type) {
    case FETCH_MOVIE:
      return {
        ...state,
        loading: true,
        movieFetchError: ''
      };
    case MOVIE_RECEIVED:
      const byIDCopy = Object.assign({}, state.byID);
      byIDCopy[action.payload.imdbID] = action.payload;
      const allIDsCopy = state.allIDs.slice(0);
      allIDsCopy.push(action.payload.imdbID);
      return {
        ...state,
        loading: false,
        movieFetchError: '',
        byID: byIDCopy,
        allIDs: allIDsCopy
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
