// GoogleMapComponent.jsx
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: 'auto', // Adjust the height as needed
};

const center = {
  lat: 37.7749, // Replace with the desired latitude
  lng: -122.4194, // Replace with the desired longitude
};

const GoogleMapComponent = () => {
  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
