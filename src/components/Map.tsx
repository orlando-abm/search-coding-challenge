import { useCallback } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import type { Business } from '@/mocks/interfaces/business.interface';
import { InfoWindowDetails } from '@/components/InfoWindowDetails';
import { containerStyle } from '@/shared/constants/map';
import { useSelectedBusiness } from '@/shared/context';

interface MapProps {
  businesses?: Business[];
  center?: { lat: number; lng: number };
  zoom?: number;
}

export const Map = ({ businesses = [], center, zoom = 13 }: MapProps) => {
  const { selectedBusiness, selectBusiness, clearSelectedBusiness } = useSelectedBusiness();
  
  const defaultCenter = center || 
    (businesses.length > 0 
      ? businesses[0].coordinates 
      : { lat: -33.4489, lng: -70.6693 });
  
  const handleMarkerClick = useCallback((business: Business) => {
    selectBusiness(business);
  }, [selectBusiness]);

  return (
      <div className="relative w-full h-full">
          <LoadScript googleMapsApiKey={import.meta.env.GOOGLE_MAPS_KEY}>
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={defaultCenter}
                zoom={zoom}
              >
                  {businesses.map((business) => (
                      <div key={business.id}>
                          <Marker
                            position={business.coordinates}
                            onClick={() => handleMarkerClick(business)}
                          />
                          {selectedBusiness?.id === business.id && (
                              <InfoWindow
                                position={business.coordinates}
                                onCloseClick={clearSelectedBusiness}
                              >
                                  <InfoWindowDetails business={business} />
                              </InfoWindow>
                          )}
                      </div>
                  ))}
              </GoogleMap>
          </LoadScript>
      </div>
  );
};

export default Map;
