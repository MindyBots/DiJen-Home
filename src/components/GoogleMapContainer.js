import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const GoogleMapContainer = () => {

  const location = { lat: 37.7749, lng: -122.4194 };

  const mapStyles = {
    height: '200px',
    width: '100%',
  };

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyDVylYvyVbOI__1VqNk6S2Q9ShARXpoY6c"
    >
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={15}
        center={location}
      >
        <Marker position={location} />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapContainer;
