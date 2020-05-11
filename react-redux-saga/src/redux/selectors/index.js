import {get } from 'lodash';

export const isSearchLoading = state => get(state, 'search.isLoading');
export const results = state => get(state, 'search.results.Search');
export const result = state => get(state, 'search.result');