import { get } from 'lodash';
import {
  SEARCH_MOVIE_START,
  SEARCH_MOVIE_ERROR,
  SEARCH_MOVIE_COMPLETE,
  SEARCH_MOVIE_BY_ID_COMPLETE,
  SEARCH_MOVIE_BY_ID_ERROR,
  SEARCH_MOVIE_BY_ID_START
} from '../../consts/actionTypes';

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case SEARCH_MOVIE_START:
      return { ...state, isLoading: true };
    case SEARCH_MOVIE_ERROR:
      return { ...state, isLoading: false, movies: null };
    case SEARCH_MOVIE_COMPLETE:
      return { ...state, isLoading: false, results: action.results.data };
      case SEARCH_MOVIE_BY_ID_START:
        return { ...state, isLoading: true, result: null };
      case SEARCH_MOVIE_BY_ID_ERROR:
        return { ...state, isLoading: false, result: null };
      case SEARCH_MOVIE_BY_ID_COMPLETE:
        return { ...state, isLoading: false, result: action.movie.data };
    default:
      return { ...state };
  }
}