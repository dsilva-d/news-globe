// backend/functions/fetch-news.js
const axios = require('axios');

const NEWS_API_ENDPOINT = 'https://newsapi.org/v2/top-headlines';
const API_KEY = '80f7eb3b8752441fbb9010927f2ec472'; // It's best to use environment variables for secrets

exports.handler = async function (event) {
  const { countryCode } = event.queryStringParameters;
  
  try {
    const response = await axios.get(NEWS_API_ENDPOINT, {
      params: {
        country: countryCode,
        apiKey: API_KEY,
      },
    });
    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    console.error('Error fetching top articles:', error.response || error.message);
    return {
      statusCode: error.response.status || 500,
      body: JSON.stringify({
        message: 'Error fetching top articles',
        error: error.message,
      }),
    };
  }
};
