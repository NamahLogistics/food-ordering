export type MenuItem = {
  id: string;
  name: string;
  price: number;
  veg: boolean;
  image: string;
};

export type Address = {
  lat: number;
  lng: number;
  text: string;
};

export type Order = {
  id: string;
  items: MenuItem[];
  total: number;
  address: Address;
  phone: string;
  paid: boolean;
  createdAt: number;
};
