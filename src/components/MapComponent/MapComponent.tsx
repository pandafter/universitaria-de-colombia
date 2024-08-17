import { useEffect, useState } from 'react';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import { getCoordinates } from '../../services/geocodeService';
import CustomInfoWindow from '../CustomInfoWindow/CustomInfoWindow'; 

const initialCenter = {
  lat: 4.623,
  lng: -74.066
};

const addresses = [
  "Institución Universitaria de Colombia, Sede 2",
  "Institución Universitaria de Colombia, Sede 3",
  "Institución Universitaria de Colombia",
  "Cra. 7 #3020, Santa Fé, Bogotá"
];

interface Location {
  lat: number;
  lng: number;
  details: string;
}

export const MapComponent: React.FC = () => {
  const [locations, setLocations] = useState<Location[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [showInfoWindow, setShowInfoWindow] = useState(false);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY || "",
    libraries: ['places']
  });

  useEffect(() => {
    const fetchLocations = async () => {
      const locationPromises = addresses.map(async (address) => {
        const coordinates = await getCoordinates(address);
        return coordinates ? { lat: coordinates.lat, lng: coordinates.lng, details: address } : null;
      });
      const results = await Promise.all(locationPromises);
      setLocations(results.filter((location): location is Location => location !== null));
    };

    fetchLocations();
  }, []);

  const handleMarkerClick = (location: Location) => {
    setSelectedLocation(location);
    setShowInfoWindow(true); 
  };

  const handleCloseInfoWindow = () => {
    setShowInfoWindow(false);
  };

  return (
    <div style={{ width: '100%', height: '100%' }}>
      {isLoaded && (
        <GoogleMap
          mapContainerStyle={{ width: '100%', height: '100%' }}
          zoom={18}
          center={initialCenter}
          options={{
            disableDefaultUI: false,
            zoomControl: true,
            styles: [
              {
                featureType: "all",
                elementType: "all",
                stylers: [{ visibility: "on" }]
              },
              {
                featureType: "all",
                elementType: "labels",
                stylers: [{ visibility: "on" }]
              }
            ]
          }}
        >
          {locations.map((location, idx) => (
            <Marker
              key={idx}
              position={{ lat: location.lat, lng: location.lng }}
              onClick={() => handleMarkerClick(location)}
            />
          ))}

          {/* Renderiza CustomInfoWindow solo si showInfoWindow es true y selectedLocation tiene un valor */}
          {showInfoWindow && selectedLocation && (
            <CustomInfoWindow
              position={{ lat: selectedLocation.lat, lng: selectedLocation.lng }}
              onCloseClick={handleCloseInfoWindow}
            >
              <div style={{ padding: '10px', backgroundColor: 'white', borderRadius: '5px' }}>
                <h4 className='font-semibold text-lg'>
                  {selectedLocation.details}
                  {selectedLocation.details === "Cra. 7 #3020, Santa Fé, Bogotá" && (
                    <div>Sede Laboratorios</div>
                  )}
                  {selectedLocation.details === "Institución Universitaria de Colombia" && (
                    <div>Sede Verde</div>
                  )}
                </h4>
              </div>
            </CustomInfoWindow>
          )}
        </GoogleMap>
      )}
    </div>
  );
};