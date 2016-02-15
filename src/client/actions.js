import { createAction } from 'redux-actions';

export const REQUEST_SUGGESTS = 'REQUEST_SUGGESTS';
export const SUCCESS_SUGGESTS = 'SUCCESS_SUGGESTS';
export const FAILURE_SUGGESTS = 'FAILURE_SUGGESTS';

export const requestSuggests = createAction(REQUEST_SUGGESTS);

export const SET_SUGGESTS = 'SET_SUGGESTS';
export const CLEAR_SUGGESTS = 'CLEAR_SUGGESTS';

export const setSuggests = createAction(SET_SUGGESTS);
export const clearSuggests = createAction(CLEAR_SUGGESTS);

export const SET_KEYWORD = 'SET_KEYWORD';
export const CLEAR_KEYWORD = 'CLEAR_KEYWORD';

export const setKeyword = createAction(SET_KEYWORD);
export const clearKeyword = createAction(CLEAR_KEYWORD);
