import React from 'react';

import Article from 'components/Article';

const ArticleList = (props) => {
  return (
    <div>
      {
        Object.values(props.articles).map((article) => {
          return (<Article
            key={article.id}
            article={article}
            action={props.articlesAction}
          />);
        })
      }
    </div>
  );
};

export default ArticleList;