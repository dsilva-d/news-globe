import React, { useState, useRef } from 'react';
import { MapContainer, TileLayer, useMapEvents, GeoJSON } from 'react-leaflet';
import countries from 'geojson-world-map';
import InfoBox from '../InfoBox'
import './index.css'; // Make sure to have this CSS file in the same directory

const WorldMap = ({ onSelectCountry, selectedCountry, articles }) => {
    const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
    const [showModal, setShowModal] = useState(false);

    const mapRef = useRef(null);

    const defaultStyle = {
        fillColor: 'transparent',
        weight: 0.5,
        color: '#666',
        fillOpacity: 0,
    };

    const highlightStyle = {
        fillColor: 'yellow',
        weight: 2,
        color: '#666',
        fillOpacity: 0.5,
    };

    const style = (feature) => {
        if (selectedCountry && feature.properties.name === selectedCountry) {
            return highlightStyle;
        }
        return defaultStyle;
    };

    const onEachFeature = (feature, layer) => {
        layer.on({
            click: (e) => {
                onSelectCountry(feature.properties.name);
                const map = mapRef.current;
                if (map != null) {
                    const point = map.latLngToContainerPoint(e.latlng);
                    const containerPos = map.containerPointToLayerPoint(point);
                    const { x, y } = containerPos.round();
                    setModalPosition({ top: y, left: x });
                    setShowModal(true);
                }
            },
        });
    };

    const LocationMarker = () => {
        useMapEvents({
            click(e) {
                const map = mapRef.current;
                if (map != null) {
                    // Logic to determine the country name and articles
                    // This is where you would call onSelectCountry and set articles
                }
            },
        });

        return null; // No need to return an actual Marker unless you want to show the click location
    };

    return (
        <>
            <MapContainer center={[20, 0]} zoom={2} style={{ height: '100%', width: '100%', position: 'relative' }} ref={mapRef}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" noWrap={true} />
                <LocationMarker />
                <GeoJSON
                    key={selectedCountry}
                    data={countries}
                    onEachFeature={onEachFeature}
                    style={style}
                />
            </MapContainer>
            {showModal && (
                <InfoBox
                    position={modalPosition}
                    articles={articles || []}
                    selectedCountry={selectedCountry}
                    onClose={() => setShowModal(false)}
                />
            )}
        </>
    );
};

export default WorldMap;
