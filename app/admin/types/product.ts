export interface Product {
  id?: string;

  name: string;

  price: number;

  category: string;

  stock: number;

  description: string;

  image: string;

  images: string[];

  createdAt: number;
}