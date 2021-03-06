import React from 'react';
import DataApi from 'dataApi';
import {data} from 'testData';
import ArticleList from 'components/ArticleList';

const api = new DataApi(data);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: api.getArticles(),
      authors: api.getAuthors()
    };
  }

  articlesAction = {
    lookupAuthor: (authorId) => this.state.authors[authorId]
  };

  render() {
    return (
      <ArticleList
        articles={this.state.articles}
        articlesAction={this.articlesAction}
      />
    );
  }
}

export default App;