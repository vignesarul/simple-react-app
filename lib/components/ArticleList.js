import React from 'react';

import Article from './Article';

const ArticleList = (props) => {
  return (
    <div>
      {
        Object.values(props.articles).map((article) => {
          return (<Article
            key={article.id}
            article={article}
            action={props.action}
          />);
        })
      }
    </div>
  );
};

export default ArticleList;