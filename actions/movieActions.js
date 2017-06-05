import { FETCH_MOVIE, MOVIE_RECEIVED, MOVIE_FETCH_FAILED } from './actionTypes';

const action = (_type, _payload = {}) => ({ type: _type, payload: _payload });
const sagaAction = (type, payload = {}) => action(`SAGA_${type}`, payload);

export const fetchMovie = (movieSearchParams) => sagaAction(FETCH_MOVIE, movieSearchParams);
