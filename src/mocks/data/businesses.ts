import type { Business } from '@mocks/interfaces';

export const businesses: Business[] = [
  {
    id: '1',
    name: 'Café Wonderful',
    type: 'Café',
    address: 'Av. Providencia 2124, Providencia, Santiago',
    coordinates: { lat: -33.4241, lng: -70.6097 },
    openingHours: 'Lun-Vie: 8:00-20:00, Sáb-Dom: 9:00-18:00',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=500&q=60'
  },
  {
    id: '2',
    name: 'Starbucks Costanera Center',
    type: 'Café',
    address: 'Av. Andrés Bello 2425, Providencia, Santiago',
    coordinates: { lat: -33.4183, lng: -70.6067 },
    openingHours: 'Lun-Dom: 8:00-22:00',
    image: 'https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?auto=format&fit=crop&w=500&q=60'
  },
  {
    id: '3',
    name: 'Café Don Latte',
    type: 'Café',
    address: 'Av. Italia 1234, Ñuñoa, Santiago',
    coordinates: { lat: -33.4551, lng: -70.6199 },
    openingHours: 'Lun-Dom: 7:30-20:00',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=500&q=60'
  },
  {
    id: '4',
    name: 'Café Altura',
    type: 'Café',
    address: 'Av. El Bosque Norte 0123, Las Condes, Santiago',
    coordinates: { lat: -33.4111, lng: -70.5981 },
    openingHours: 'Lun-Sáb: 8:00-21:00',
    image: 'https://images.unsplash.com/photo-1495774856032-8b90bbb32b32?auto=format&fit=crop&w=500&q=60'
  },
  {
    id: '5',
    name: 'Café Literario Balmaceda',
    type: 'Café',
    address: 'Parque Balmaceda, Providencia, Santiago',
    coordinates: { lat: -33.4322, lng: -70.6255 },
    openingHours: 'Lun-Vie: 9:00-18:00',
    image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=500&q=60'
  },

  {
    id: '6',
    name: 'Restaurante Borde Río',
    type: 'Restaurante',
    address: 'Av. Vitacura 6255, Vitacura, Santiago',
    coordinates: { lat: -33.3867, lng: -70.5752 },
    openingHours: 'Lun-Dom: 12:00-23:00',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=500&q=60'
  },
  {
    id: '7',
    name: 'La Mesa Chilena',
    type: 'Restaurante',
    address: 'Merced 345, Santiago Centro',
    coordinates: { lat: -33.4379, lng: -70.6407 },
    openingHours: 'Lun-Dom: 13:00-22:00',
    image: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=500&q=60'
  },
  {
    id: '8',
    name: 'Patio Bellavista Grill',
    type: 'Restaurante',
    address: 'Constitución 30, Providencia, Santiago',
    coordinates: { lat: -33.4354, lng: -70.6412 },
    openingHours: 'Lun-Dom: 12:00-23:00',
    image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=500&q=60'
  },
  {
    id: '9',
    name: 'Donde El Chelo',
    type: 'Restaurante',
    address: 'Av. Macul 3500, Macul, Santiago',
    coordinates: { lat: -33.4922, lng: -70.6034 },
    openingHours: 'Lun-Sáb: 12:00-22:00',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=500&q=60'
  },

  {
    id: '10',
    name: 'Jumbo Las Condes',
    type: 'Supermercado',
    address: 'Av. Kennedy 9001, Las Condes, Santiago',
    coordinates: { lat: -33.4019, lng: -70.5682 },
    openingHours: 'Lun-Sáb: 9:00-21:00, Dom: 10:00-20:00',
    image: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=500&q=60'
  },
  {
    id: '11',
    name: 'Lider Express Ñuñoa',
    type: 'Supermercado',
    address: 'Av. Irarrázaval 1820, Ñuñoa, Santiago',
    coordinates: { lat: -33.4563, lng: -70.6201 },
    openingHours: 'Lun-Dom: 8:30-22:00',
    image: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=500&q=60'
  },
  {
    id: '12',
    name: 'Supermercado El Ahorro',
    type: 'Supermercado',
    address: 'Calle Monjitas 514, Santiago Centro',
    coordinates: { lat: -33.4375, lng: -70.6463 },
    openingHours: 'Lun-Dom: 9:00-21:30',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=500&q=60'
  },

  {
    id: '13',
    name: 'Falabella Parque Arauco',
    type: 'Tienda',
    address: 'Av. Presidente Kennedy 5413, Las Condes, Santiago',
    coordinates: { lat: -33.4029, lng: -70.5792 },
    openingHours: 'Lun-Sáb: 10:00-21:00, Dom: 11:00-20:00',
    image: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=500&q=60'
  },
  {
    id: '14',
    name: 'Tienda Urbana',
    type: 'Tienda',
    address: 'Av. Los Leones 1400, Providencia, Santiago',
    coordinates: { lat: -33.4235, lng: -70.6081 },
    openingHours: 'Lun-Sáb: 10:00-20:00',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=500&q=60'
  },
  {
    id: '15',
    name: 'Tienda Estilo Vivo',
    type: 'Tienda',
    address: 'Av. Manuel Montt 1001, Providencia, Santiago',
    coordinates: { lat: -33.4332, lng: -70.6175 },
    openingHours: 'Lun-Sáb: 11:00-20:00',
    image: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=500&q=60'
  },

  {
    id: '16',
    name: 'Farmacia Ahumada',
    type: 'Farmacia',
    address: 'Av. Apoquindo 3472, Las Condes, Santiago',
    coordinates: { lat: -33.4170, lng: -70.5986 },
    openingHours: 'Lun-Vie: 9:00-20:00, Sáb: 10:00-14:00',
    image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=500&q=60'
  },
  {
    id: '17',
    name: 'Farmacia Central Ñuñoa',
    type: 'Farmacia',
    address: 'Irarrázaval 2350, Ñuñoa, Santiago',
    coordinates: { lat: -33.4567, lng: -70.6095 },
    openingHours: 'Lun-Sáb: 9:00-20:30, Dom: 10:00-18:00',
    image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=500&q=60'
  },

  {
    id: '18',
    name: 'Librería Prosa',
    type: 'Librería',
    address: 'Av. Providencia 1234, Providencia, Santiago',
    coordinates: { lat: -33.4265, lng: -70.6167 },
    openingHours: 'Lun-Sáb: 10:00-19:00',
    image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=500&q=60'
  },
  {
    id: '19',
    name: 'Librería Universitaria',
    type: 'Librería',
    address: 'José Victorino Lastarria 70, Santiago Centro',
    coordinates: { lat: -33.4401, lng: -70.6401 },
    openingHours: 'Lun-Vie: 9:00-18:00',
    image: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=500&q=60'
  },

  {
    id: '20',
    name: 'Panadería Dulce Masa',
    type: 'Panadería',
    address: 'Calle San Diego 1020, Santiago Centro',
    coordinates: { lat: -33.4512, lng: -70.6493 },
    openingHours: 'Lun-Sáb: 7:00-19:30',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=500&q=60'
  },
  {
    id: '21',
    name: 'La Panera de Ñuñoa',
    type: 'Panadería',
    address: 'Irarrázaval 2855, Ñuñoa, Santiago',
    coordinates: { lat: -33.4578, lng: -70.6041 },
    openingHours: 'Lun-Dom: 8:00-20:00',
    image: 'https://images.unsplash.com/photo-1517433367423-c7e5b0f35086?auto=format&fit=crop&w=500&q=60'
  }
];
