// actions/newsActions.js

export const getArticle = () => {
  return async (dispatch, getState) => {
    try {
      // Make asynchronous call to fetch articles from server
      const response = await fetch('http://localhost:8000/articles');

      if (!response.ok) {
        throw new Error('Failed to fetch articles');
      }
      const data = await response.json();

      console.log('Fetched articles:', data.articles); // Log fetched articles data
      
      // Dispatch action to store fetched articles in Redux state
      dispatch({ type: 'FETCH_ARTICLES_SUCCESS', payload: data.articles });
    } catch (error) {
      console.error('Error fetching articles:', error);
      dispatch({ type: 'FETCH_ARTICLES_FAILURE', payload: error.message });
    }
  };
};
