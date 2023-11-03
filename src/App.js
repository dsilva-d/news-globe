import React, { useState } from 'react';
import WorldMap from './components/WorldMap'; // Adjust the import path as needed

function App() {
  const [selectedCountry, setSelectedCountry] = useState('');

  const handleCountrySelect = (isoCode) => {
    console.log('Selected country changed to:', isoCode);
    setSelectedCountry(isoCode);
  };
  

  const onSelectCountry = (isoCode) => {
    setSelectedCountry(isoCode);
  };
  

  return (
    <div id="map" style={{ width: '100%', height: '100vh' }}>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/leaflet.css"
      />
      <WorldMap
        onSelectCountry={handleCountrySelect} selectedCountry={selectedCountry} 
      />
    </div>
  );
}

export default App;
