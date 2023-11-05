import axios from 'axios';

const fetchTopArticlesByCountry = async (countryCode) => {
    try {
      const response = await axios.get('/.netlify/functions/fetch-news', {
        params: { countryCode },
      });
      return response.data.articles;
    } catch (error) {
      console.error('Error fetching top articles:', error.response || error.message);
      throw error;
    }
  };
  

export { fetchTopArticlesByCountry };
