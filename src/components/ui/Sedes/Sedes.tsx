import { GoogleMap, Marker, InfoWindow, useLoadScript } from '@react-google-maps/api';
import { useState, useEffect, useCallback } from 'react';

const mapContainerStyle = {
  height: "70vh",
  width: "100%"
};

const initialCenter = {
  lat: 4.623,
  lng: -74.065
};

const sedeAddresses = [
  "Institución Universitaria de Colombia, Sede 2",
  "Institución Universitaria de Colombia, Sede 3",
  "Cra. 7 #35-85, Bogotá",
  "Cra. 7 #35-58, Teusaquillo, Bogotá"
];

export const Sedes = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [sedeLocations, setSedeLocations] = useState<{ lat: number; lng: number; details: string }[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<{ lat: number; lng: number; details: string } | null>(null);
  const [mapBounds, setMapBounds] = useState<google.maps.LatLngBounds | null>(null);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY || "",
    libraries: ["places"]
  });

  useEffect(() => {
    async function fetchCoordinates() {
      const geocodePromises = sedeAddresses.map(async (address) => {
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}`
        );
        const data = await response.json();
        const location = data.results[0]?.geometry?.location;
        const details = data.results[0]?.formatted_address || 'Detalles no disponibles';
        if (location) {
          return {
            lat: location.lat,
            lng: location.lng,
            details
          };
        }
        return null;
      });

      const locations = await Promise.all(geocodePromises);
      const validLocations = locations.filter((coords) => coords !== null) as { lat: number; lng: number; details: string }[];
      setSedeLocations(validLocations);

      if (validLocations.length > 0) {
        const bounds = new google.maps.LatLngBounds();
        validLocations.forEach(({ lat, lng }) => bounds.extend(new google.maps.LatLng(lat, lng)));
        setMapBounds(bounds);
      }
    }

    fetchCoordinates();
  }, []);

  const onLoad = useCallback((map: google.maps.Map) => {
    if (mapBounds) {
      map.fitBounds(mapBounds);
    } else {
      map.setCenter(initialCenter);
    }
  }, [mapBounds]);

  return (
    <div className="relative flex justify-center items-center h-[100vh] bg-gray-100 w-full">
      <div
        className="relative overflow-visible -top-10 flex items-center justify-center w-[50vw] h-[300px] bg-white text-black drop-shadow-lg text-2xl font-semibold rounded-full cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Nuestras Sedes

        {isHovered && isLoaded && (
          <div className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-90 flex justify-center items-center">
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              zoom={19}
              center={initialCenter}
              onLoad={onLoad}
              options={{
                disableDefaultUI: true,
                zoomControl: true,
                streetViewControl: false,
                mapTypeControl: false,
                fullscreenControl: false,
                styles: [
                  {
                    featureType: "all",
                    elementType: "all",
                    stylers: [
                      {
                        visibility: "on"
                      }
                    ]
                  },
                  // Otros estilos personalizados pueden ir aquí
                ],
                mapId: 'bc5a8ea86abcdbf4' // Aplica el ID de mapa aquí
              }}
            >
              {sedeLocations.map((location, idx) => (
                <Marker
                  key={idx}
                  position={{ lat: location.lat, lng: location.lng }}
                  onClick={() => setSelectedLocation(location)}
                />
              ))}

              {selectedLocation && (
                <InfoWindow
                  position={{ lat: selectedLocation.lat, lng: selectedLocation.lng }}
                  onCloseClick={() => setSelectedLocation(null)}
                >
                  <div>
                    <h4>{selectedLocation.details}</h4>
                  </div>
                </InfoWindow>
              )}
            </GoogleMap>
          </div>
        )}
      </div>
    </div>
  );
};
