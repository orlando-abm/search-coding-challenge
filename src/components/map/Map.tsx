import { useCallback, useRef, useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow, MarkerClusterer } from '@react-google-maps/api';
import type { Business } from '@Mocks/interfaces';
import { InfoWindowDetails } from '@/components/infoRow/InfoWindowDetails';
import { containerStyle } from '@Shared/constants';
import { useSelectedBusiness } from '@Shared/context';

interface MapProps {
  businesses?: Business[];
  center?: { lat: number; lng: number };
  zoom?: number;
}

export const Map = ({ businesses = [], center, zoom = 13 }: MapProps) => {
  const { selectedBusiness, selectBusiness, clearSelectedBusiness } = useSelectedBusiness();
  const mapRef = useRef<google.maps.Map | null>(null);
  const [selectedZoom, setSelectedZoom] = useState(zoom);

  const defaultCenter = center || 
    (businesses.length > 0
      ? businesses[0].coordinates
      : { lat: -33.4489, lng: -70.6693 });
 
  const mapCenter = selectedBusiness?.coordinates || defaultCenter;
  
  useEffect(() => {
    if (selectedBusiness && mapRef.current) {
      mapRef.current.setZoom(17);
      setSelectedZoom(17);
    } else if (!selectedBusiness) {
      setSelectedZoom(zoom);
    }
  }, [selectedBusiness, zoom]);

  const handleMarkerClick = useCallback((business: Business) => {
    selectBusiness(business);
  }, [selectBusiness]);

  return (
      <div className="relative w-full h-full">
          <LoadScript googleMapsApiKey={import.meta.env.GOOGLE_MAPS_KEY}>
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={mapCenter}
                zoom={selectedZoom}
                onLoad={(map) => {
                  mapRef.current = map;
                }}
                options={{
                  zoomControl: true,
                  mapTypeControl: false,
                  streetViewControl: false,
                  fullscreenControl: true,
                  zoomControlOptions: {
                    position: window.google?.maps?.ControlPosition?.RIGHT_BOTTOM || 11
                  },
                  fullscreenControlOptions: {
                    position: window.google?.maps?.ControlPosition?.LEFT_BOTTOM || 6
                  }
                }}
        >
                  <MarkerClusterer
                    averageCenter
                    enableRetinaIcons
                    gridSize={60}
                    zoomOnClick
                    minimumClusterSize={2}
                    options={{
                      styles: [
                        {
                          textColor: 'white',
                          url: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m1.png',
                          height: 90,
                          width: 90,
                          textSize: 20,
                          fontWeight: 'bold'
                        }
                      ]
                    }}
          >
                      {(clusterer) => (
                          <div>
                              {businesses.map((business) => (
                                  <Marker
                                    key={business.id}
                                    position={business.coordinates}
                                    onClick={() => handleMarkerClick(business)}
                                    clusterer={clusterer}
                        />
                              ))}
                          </div>
                      )}
                  </MarkerClusterer>

                  {selectedBusiness && (
                  <InfoWindow
                    position={selectedBusiness.coordinates}
                    onCloseClick={clearSelectedBusiness}
            >
                      <InfoWindowDetails business={selectedBusiness} />
                  </InfoWindow>
                  )}
              </GoogleMap>
          </LoadScript>
      </div>
  );
};

export default Map;
