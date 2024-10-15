'use client';

import React from 'react';
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  LoadScript
} from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '90vh'
};

const options = {
  mapId: '98775f9ae1f3c0c5'
};

const locations = [
  { lat: 40.859088307793506, lng: -112.04815636106937 },
  { lat: 33.7362527525339, lng: -84.31473047218051 },
  { lat: 37.440575591901045, lng: -4.231433159434073 },
  { lat: 45.8420150699059, lng: -108.3588903714812 },
  { lat: 39.21477539871913, lng: -102.00229755893027 },
  { lat: 35.13728073781295, lng: -106.13969927649627 },
  { lat: 33.4659037284066, lng: -112.16504381073325 },
  { lat: 40.7271231995877, lng: -73.99949857192811 },
  { lat: 39.1013625602858, lng: -94.56283375187924 },
  { lat: 32.83896939834647, lng: -96.63347150838077 },
  { lat: 41.89942790657605, lng: -87.65381397346114 },
  { lat: 29.99483796483155, lng: -90.09725440871826 },
  { lat: 45.561233286659, lng: -122.790507595293 }
];

const center = {
  lat: 39.21477539871913,
  lng: -102.00229755893027
};

export default function Request() {
  return (
    <LoadScript
      googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={13}
        options={options}
      >
        {locations.map((location, index) => (
          <Marker key={index} position={location} />
        ))}
      </GoogleMap>
    </LoadScript>
  );
}