// actions.js
export const FETCH_ARTICLE_START = 'FETCH_ARTICLE_START';
export const FETCH_ARTICLE_SUCCESS = 'FETCH_ARTICLE_SUCCESS';
export const FETCH_ARTICLE_FAILURE = 'FETCH_ARTICLE_FAILURE';

export const fetchArticleStart = () => ({ type: FETCH_ARTICLE_START });
export const fetchArticleSuccess = (article) => ({ type: FETCH_ARTICLE_SUCCESS, payload: article });
export const fetchArticleFailure = (error) => ({ type: FETCH_ARTICLE_FAILURE, payload: error });
