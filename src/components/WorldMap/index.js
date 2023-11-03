import React, { useState} from 'react';
import { MapContainer, TileLayer, GeoJSON, Marker, useMapEvents } from 'react-leaflet';
import countries from 'geojson-world-map';


  
  const WorldMap = ({ onSelectCountry, selectedCountry }) => {
  
    const defaultStyle = {
        fillColor: 'transparent', // Set to 'transparent' or use any color with low opacity
        weight: 0.5, // You can adjust the border weight to be less visible if desired
        color: '#666', // Border color, set this to 'transparent' if you want no borders
        fillOpacity: 0, // Set to 0 for full transparency
      };
      
      const highlightStyle = {
        fillColor: 'yellow',
        weight: 2,
        color: '#666',
        fillOpacity: 1,
      };
    
      // Define the style function
      const style = (feature) => {
        if (selectedCountry && feature.properties.iso_a2 === selectedCountry) {
          return highlightStyle; // Your highlighted style as defined
        }
        return defaultStyle; // Now will render unselected countries as transparent
      };
      
      
      const onEachFeature = (feature, layer) => {
        layer.on({
          click: () => {
            onSelectCountry(feature.properties.iso_a2);
          },
        });
      };
      

    function LocationMarker({ onSelectCountry }) {
        const [position, setPosition] = useState(null);
        useMapEvents({
        click(e) {
            setPosition(e.latlng);
            // You would need a way to resolve e.latlng to a country code here
            onSelectCountry("United States");
        },
        });
  
    return position === null ? null : (
      <Marker position={position}>
        {/* Your marker representation */}
      </Marker>
    );
  }
  

  return (
    <MapContainer center={[20, 0]} zoom={2} style={{ height: '100%', width: '100%' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <LocationMarker onSelectCountry={onSelectCountry} />
        <GeoJSON
        key={selectedCountry}
        data={countries}
        onEachFeature={onEachFeature}
        style={style}
        />

  </MapContainer>
  );
};

export default WorldMap;
