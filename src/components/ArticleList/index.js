import React from 'react';
import Article from '../Article'; // Import your Article component

function ArticleList({ articles }) {
  return (
    <div>
      {articles.map((article, index) => (
        <Article
          key={index} // It's a good practice to provide a unique key
          title={article.title}
          description={article.description}
          source={article.source}
          url={article.url}
          imageUrl={article.imageUrl}
        />
      ))}
    </div>
  );
}

export default ArticleList;
