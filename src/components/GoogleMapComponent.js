import React from 'react';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';

const GoogleMapComponent = ({ latitude, longitude }) => {
  const mapContainerStyle = {
    width: '100%',
    height: '100%',
  };

  const center = {
    lat: latitude,
    lng: longitude,
  };

  return (
    <LoadScript googleMapsApiKey="YOURAPIKEY">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={15}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
