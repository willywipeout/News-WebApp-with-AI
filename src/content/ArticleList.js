// src/components/ArticleList.js

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchArticles } from '../store/actions/newsActions';

const ArticleList = ({ articles, loading, error, fetchArticles }) => {
  useEffect(() => {
    fetchArticles();
  }, [fetchArticles]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Articles</h2>
      <ul>
        {articles.map(article => (
          <li key={article.articleId}>
            <h3>{article.title}</h3>
            <p>{article.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = state => ({
  articles: state.news.articles,
  loading: state.news.loading,
  error: state.news.error,
});

export default connect(mapStateToProps, { fetchArticles })(ArticleList);
