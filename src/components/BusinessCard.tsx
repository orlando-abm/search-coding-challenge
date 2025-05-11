import type { Business } from '@/mocks/interfaces';
import { MapPin, Clock, Tag } from 'lucide-react';
import { InfoRow } from '@/components';
import { useSelectedBusiness } from '@/shared/context';
import { useCallback } from 'react';

export const BusinessCard = ({ business }: { business: Business }) => {
  const { selectBusiness, selectedBusiness } = useSelectedBusiness();
  
  const handleCardClick = useCallback(() => {
    selectBusiness(business);
  }, [business, selectBusiness]);
  
  return (
      <article 
        className={'business-card grid grid-cols-5 gap-2 p-4 border rounded-md mb-4 cursor-pointer transition-all ' + (selectedBusiness?.id === business.id ? 'border-blue-600' : 'border-gray-200')}
        onClick={handleCardClick}
      >
          <img className="col-span-2 w-full h-48 object-cover rounded-lg" src={business.image} alt={business.name}/>
          <div className="col-span-3 flex flex-col justify-center gap-2">
              <h2 className="font-bold text-lg text-center">{business.name}</h2>
              <InfoRow icon={<Tag size={18} className="shrink-0" />}>{business.type}</InfoRow>
              <InfoRow icon={<MapPin size={18} className="shrink-0" />}>{business.address}</InfoRow>
              <InfoRow icon={<Clock size={18} className="shrink-0" />}>{business.openingHours}</InfoRow>
          </div>
      </article>
  );
};
