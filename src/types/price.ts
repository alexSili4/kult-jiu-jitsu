export interface IMembership {
  name: string;
  benefits: string[];
  price: {
    amount: string;
    period: string;
  };
  isFavorite: boolean;
}

export interface IService {
  title: string | null;
  addTitle: string | null;
  services: {
    service: string;
    price: string | null;
  }[];
}
