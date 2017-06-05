import { fork } from 'redux-saga/effects';

import { watchFetchMovie } from './movieSaga';

export default function* bootstrapSaga() {
    yield [
        fork(watchFetchMovie)
    ];
}
