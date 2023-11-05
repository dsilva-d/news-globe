import axios from 'axios';

const NEWS_API_ENDPOINT = 'https://newsapi.org/v2/top-headlines';
const API_KEY = '80f7eb3b8752441fbb9010927f2ec472'; // Replace with your NewsAPI key

const fetchTopArticlesByCountry = async (countryCode) => {
  try {
    const response = await axios.get(`${NEWS_API_ENDPOINT}`, {
      params: {
        country: countryCode,
        apiKey: API_KEY,
      },
    });
    return response.data.articles;
  } catch (error) {
    console.error('Error fetching top articles:', error.response || error.message);
    throw error;
  }
};

export { fetchTopArticlesByCountry };
