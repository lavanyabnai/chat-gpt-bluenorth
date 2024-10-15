'use client'
import React, { useEffect, useState } from 'react';
import {
  APIProvider,
  Map,
  useMapsLibrary,
  AdvancedMarker,
  useMap,
  Pin,
  InfoWindow
} from '@vis.gl/react-google-maps';
// import "@/app/mapStyle.css"

  const nightModeStyle = [
    { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
    { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
    { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
    {
      featureType: 'administrative.locality',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#d59563' }]
    },
    {
      featureType: 'poi',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#d59563' }]
    },
    {
      featureType: 'poi.park',
      elementType: 'geometry',
      stylers: [{ color: '#263c3f' }]
    },
    {
      featureType: 'poi.park',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#6b9a76' }]
    },
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [{ color: '#38414e' }]
    },
    {
      featureType: 'road',
      elementType: 'geometry.stroke',
      stylers: [{ color: '#212a37' }]
    },
    {
      featureType: 'road',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#9ca5b3' }]
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry',
      stylers: [{ color: '#746855' }]
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry.stroke',
      stylers: [{ color: '#1f2835' }]
    },
    {
      featureType: 'road.highway',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#f3d19c' }]
    },
    {
      featureType: 'transit',
      elementType: 'geometry',
      stylers: [{ color: '#2f3948' }]
    },
    {
      featureType: 'transit.station',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#d59563' }]
    },
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [{ color: '#17263c' }]
    },
    {
      featureType: 'water',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#515c6d' }]
    },
    {
      featureType: 'water',
      elementType: 'labels.text.stroke',
      stylers: [{ color: '#17263c' }]
    }
  ];

  
function Directions() {
  const map = useMap();
  const routesLibrary = useMapsLibrary('routes');
  const [directionsService, setDirectionsService] =
    useState<google.maps.DirectionsService>();
  const [directionsRenderer, setDirectionsRenderer] =
    useState<google.maps.DirectionsRenderer>();
  const [routes, setRoutes] = useState<google.maps.DirectionsRoute[]>([]);
  const [routeIndex] = useState(0);
  const selected = routes[routeIndex];
  const leg = selected?.legs[0];

  // Initialize directions service and renderer
  useEffect(() => {
    if (!routesLibrary || !map) return;
    setDirectionsService(new routesLibrary.DirectionsService());
    setDirectionsRenderer(new routesLibrary.DirectionsRenderer({ map }));
  }, [routesLibrary, map]);

  // Use directions service
  useEffect(() => {
    if (!directionsService || !directionsRenderer) return;

    directionsService
      .route({
        origin: 'Phoenix, United States',
        destination: 'Chicago, United States',
        travelMode: google.maps.TravelMode.WALKING,
        provideRouteAlternatives: true
      })
      .then((response) => {
        directionsRenderer.setDirections(response);
        setRoutes(response.routes);
      });

    return () => directionsRenderer.setMap(null);
  }, [directionsService, directionsRenderer]);



    // useEffect(() => {
    //   if (!directionsService || !directionsRenderer) return;

    //   directionsService
    //     .route({
    //       origin: 'Portland, United States',
    //       destination: 'Chicago, United States',
    //       travelMode: google.maps.TravelMode.WALKING,
    //       provideRouteAlternatives: true
    //     })
    //     .then((response) => {
    //       directionsRenderer.setDirections(response);
    //       setRoutes(response.routes);
    //     });

    //   return () => directionsRenderer.setMap(null);
    // }, [directionsService, directionsRenderer]);
  // Update direction route
  useEffect(() => {
    if (!directionsRenderer) return;
    directionsRenderer.setRouteIndex(routeIndex);
  }, [routeIndex, directionsRenderer]);

  if (!leg) return null;

  return (
    <div className="directions">
      <h2>{selected.summary}</h2>
      <p>
        {leg.start_address.split(',')[0]} to {leg.end_address.split(',')[0]}
      </p>
      <p>Distance: {leg.distance?.text}</p>
      <p>Duration: {leg.duration?.text}</p>
    </div>
  );
}
type Point = google.maps.LatLngLiteral & { key: string };
type props = { points: Point[] };

const Markers = ({ points }: props) => {
  return (
    <>
      {points.map((point, index) => (
        <AdvancedMarker
          key={index}
          position={point}
        >
          <Pin background={'white'} borderColor={'green'} glyphColor={'purple'} />
        </AdvancedMarker>
      ))}
    </>
  );
};
export default function App() {
  const [open, setOpen] = useState(false);
  const points = [
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
    return (
      <APIProvider
        apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}
      >
              {/* <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={13}
        options={options}
      >
        {points.map((location, index) => (
          <Marker key={index} position={location} />
        ))}
      </GoogleMap> */}
        <Map
          // style={nightModeStyle}
          //   center={center}
          zoom={5}
          defaultZoom={9}
          defaultCenter={{ lat: 43.65, lng: -79.38 }}
          mapId={process.env.NEXT_PUBLIC_GOOGLE_MAPS_ID as string}
          colorScheme={'DARK'}
          gestureHandling={'greedy'}
          fullscreenControl={false}
        >
          <Markers points={points as Point[]} />

          {open && (
            <InfoWindow
              position={{ lat: 43.16791509561481, lng: -107.71461966156865 }}
              onCloseClick={() => setOpen(false)}
            >
              <div className="info-window-content">
                <h3>Info Window Content</h3>
                <p>This is the content of the info window.</p>
              </div>
            </InfoWindow>
          )}
          <Directions />
          {/* <Directions1 />
          <Directions2 />  */}
        </Map>
      </APIProvider>
    );
}


