import React, { useState, useEffect } from 'react';
import Link from '@mui/material/Link';
import { fetchTopArticlesByCountry } from './newsService';
import getCountryCode from './countryCode';
import './index.css';

const InfoBox = ({ position, selectedCountry, onClose }) => {
  const [articles, setArticles] = useState([]);

  const translateText = async (text) => {
    try {
      const response = await fetch('/.netlify/functions/translate-text', {
        method: 'POST',
        body: JSON.stringify({ text }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      return data.translatedText;
    }  catch (error) {
      console.error('Error translating text:', error);
      throw error; // Throw the error to see it in the calling function
    }
  };

  useEffect(() => {
    const translateArticle = async (article) => {
      const translatedTitle = await translateText(article.title);
      const translatedDescription = await translateText(article.description || article.summary);
      return { ...article, title: translatedTitle, description: translatedDescription };
    };

    const loadAndTranslateArticles = async () => {
      try {
        const fetchedArticles = await fetchTopArticlesByCountry(getCountryCode(selectedCountry));
        const translatedArticles = await Promise.all(fetchedArticles.slice(0,3).map(translateArticle));
        setArticles(translatedArticles);
      } catch (error) {
        setArticles([{title: 'Sorry', description: 'Unfortunately, this country isn\'t covered'}]);
        console.error(error);
      }
    };

    if (selectedCountry) {
      loadAndTranslateArticles();
    }
  }, [selectedCountry]);

  return (
    <div
      style={{
        position: 'absolute',
        top: position.top,
        left: position.left,
        zIndex: 1000,
      }}
      className="info-box"
    >
      <div className="info-box-content">
        <h2>What's going on in {selectedCountry}:</h2>
        {articles.map((article, index) => (
          <div key={index}>
            <h3>
              <Link href={article.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                {article.title}
              </Link>
            </h3>
            <p>{article.description}</p>
          </div>
        ))}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default InfoBox;
