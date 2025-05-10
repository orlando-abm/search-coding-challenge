export interface Business {
    id: string;
    name: string;
    type: string;
    address: string;
    coordinates: {
      lat: number;
      lng: number;
    };
    openingHours: string;
    image: string;
}
