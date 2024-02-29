// reducers/newsReducer.js

const initialState = {
  articles: [], // Initial state for articles
  loading: false,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_ARTICLES_REQUEST':
      return {
        ...state,
        loading: true,
        error: null
      };
    case 'FETCH_ARTICLES_SUCCESS':
      return {
        ...state,
        articles: action.payload, // Update articles with fetched data
        loading: false,
        error: null
      };
    case 'FETCH_ARTICLES_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
