
export interface Service {
  id: string;
  title: string;
  url: string;
  image: string;
}

export type ServiceFormData = Omit<Service, 'id'>;
