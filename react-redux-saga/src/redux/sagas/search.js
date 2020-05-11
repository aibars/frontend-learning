import { put, call, takeLatest } from 'redux-saga/effects';
import {
  SEARCH_MOVIE_START,
  SEARCH_MOVIE_ERROR,
  SEARCH_MOVIE_COMPLETE,
  SEARCH_MOVIE_BY_ID_COMPLETE,
  SEARCH_MOVIE_BY_ID_ERROR,
  SEARCH_MOVIE_BY_ID_START
} from '../../consts/actionTypes';

import { apiCall } from '../api';

export function* searchMovie({ payload }) {
  try {
    const results = yield call(apiCall, `&s=${payload.movieName}`, null, null, 'GET');
    yield put({ type: SEARCH_MOVIE_COMPLETE, results });
  }
  catch (e) {
    yield put({ type: SEARCH_MOVIE_ERROR, e });
  }
}

export function* searchMovieById({ payload }) {
  try {
    const movie = yield call(apiCall, `&i=${payload.movieId}`, null, null, 'GET');
    yield put({ type: SEARCH_MOVIE_BY_ID_COMPLETE, movie })
  }
  catch (e) {
    yield put({ type: SEARCH_MOVIE_BY_ID_ERROR, e });
  }
}

export default function* search() {
  yield takeLatest(SEARCH_MOVIE_START, searchMovie);
  yield takeLatest(SEARCH_MOVIE_BY_ID_START, searchMovieById);
}