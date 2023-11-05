import React, { useState, useEffect } from 'react';
import Link from '@mui/material/Link'; // Correct the import
import { fetchTopArticlesByCountry } from './newsService'; // Assuming this is the correct path
import getCountryCode from './countryCode';
import './index.css';

const InfoBox = ({ position, selectedCountry, onClose }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const loadArticles = async () => {
      try {
        const fetchedArticles = await fetchTopArticlesByCountry(getCountryCode(selectedCountry));
        setArticles(fetchedArticles.slice(0,3));
      } catch (error) {
        // Handle the error accordingly
        setArticles([{title: 'Sorry', description: 'Unfortunately, this country isn\'t covered'}]);
        console.error(error);
      }
    };

    if (selectedCountry) {
      loadArticles();
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
            <p>{article.description || article.summary}</p> {/* description is used by NewsAPI */}
          </div>
        ))}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default InfoBox;
