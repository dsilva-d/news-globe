const axios = require('axios');

const TRANSLATE_API_ENDPOINT = 'https://libretranslate.de/translate';

exports.handler = async function (event) {
  const { text, targetLang = 'en' } = JSON.parse(event.body);

  try {
    const response = await axios.post(TRANSLATE_API_ENDPOINT, {
      q: text,
      source: 'auto', // You can also pass a specific source language if preferred
      target: targetLang,
      format: 'text'
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ translatedText: response.data.translatedText }),
    };
  } catch (error) {
    console.error('Error translating text:', error.response || error.message);
    return {
      statusCode: error.response ? error.response.status : 500,
      body: JSON.stringify({
        message: 'Error translating text',
        error: error.message,
      }),
    };
  }
};
