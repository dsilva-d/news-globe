export default function getCountryCode(countryName) {
    const countryCodes = {
      "Argentina": 'ar',
      "Australia": 'au',
      "Austria": 'at',
      "Belgium": 'be',
      "Brazil": 'br',
      "Bulgaria": 'bg',
      "Canada": 'ca',
      "China": 'cn',
      "Colombia": 'co',
      "Cuba": 'cu',
      "Czech Republic": 'cz',
      "Egypt": 'eg',
      "France": 'fr',
      "Germany": 'de',
      "Greece": 'gr',
      "Hong Kong": 'hk',
      "Hungary": 'hu',
      "India": 'in',
      "Indonesia": 'id',
      "Ireland": 'ie',
      "Israel": 'il',
      "Italy": 'it',
      "Japan": 'jp',
      "Latvia": 'lv',
      "Lithuania": 'lt',
      "Malaysia": 'my',
      "Mexico": 'mx',
      "Morocco": 'ma',
      "Netherlands": 'nl',
      "New Zealand": 'nz',
      "Nigeria": 'ng',
      "Norway": 'no',
      "Philippines": 'ph',
      "Poland": 'pl',
      "Portugal": 'pt',
      "Romania": 'ro',
      "Russia": 'ru',
      "Saudi Arabia": 'sa',
      "Serbia": 'rs',
      "Singapore": 'sg',
      "Slovakia": 'sk',
      "Slovenia": 'si',
      "South Africa": 'za',
      "South Korea": 'kr',
      "Sweden": 'se',
      "Switzerland": 'ch',
      "Taiwan": 'tw',
      "Thailand": 'th',
      "Turkey": 'tr',
      "UAE": 'ae',
      "Ukraine": 'ua',
      "United Kingdom": 'gb',
      "United States": 'us',
      "Venezuela": 've',
    };
  
    // Normalize input to handle different capitalizations
    const normalizedCountryName = countryName.toLowerCase();
    
    // Find the country code by iterating over the countryCodes object
    const countryCode = Object.keys(countryCodes).find(country => country.toLowerCase() === normalizedCountryName);
  
    return countryCode ? countryCodes[countryCode] : null;
  }
  
  
  