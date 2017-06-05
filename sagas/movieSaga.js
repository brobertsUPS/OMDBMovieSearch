import { call, put, takeLatest } from 'redux-saga/effects';

import { FETCH_MOVIE, MOVIE_RECEIVED, MOVIE_FETCH_FAILED, sagaActionName } from '../actions/actionTypes';
import { formatQueryParams } from '../utilities/formatQueryParams';

async function fetchMovieWithURL(url) {
  try {
    let response = await fetch(url);
    let body = await response.json();
    return body;
  } catch(err) {
    // the err response from OMDB has the Error property
    // If there is no Error property then something else went wrong
    if (err.Error) return err;
    else return {
      Error: 'Something went wrong with your request. Make sure you are connected to the internet and try again.'
    };
  }
}

function* fetchMovie({ payload }) {
    yield put({ type: FETCH_MOVIE });
    // async fetch some data
    const queryParams = formatQueryParams(Object.assign(payload, { apikey: '69d0b6bc' }));
    // Using call will allow easier testing
    // instead of mocking the fetchMovie saga, we can ensure the saga yields the correct "Effect"
    const movieResponse = yield call(fetchMovieWithURL, `https://www.omdbapi.com/?${queryParams}`);

    if (movieResponse.Error) {
      yield put({ type: MOVIE_FETCH_FAILED, payload: movieResponse });
    } else {
      yield put({ type: MOVIE_RECEIVED, payload: movieResponse });
    }
}

function* watchFetchMovie() {
    yield takeLatest(sagaActionName(FETCH_MOVIE), fetchMovie);
}

export { watchFetchMovie };
