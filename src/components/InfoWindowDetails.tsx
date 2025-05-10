import type { Business } from '@/mocks/interfaces';

export const InfoWindowDetails = ({ business }: { business: Business }) => {
  return (
      <div>
          <img className="w-full h-24 object-cover rounded-lg mb-2" src={business.image} alt={business.name}/>
          <h3 className="font-bold">{business.name}</h3>
          <p>{business.address}</p>
      </div>
  );
};
