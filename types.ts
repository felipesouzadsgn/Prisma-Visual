export enum ProductCategory {
  ALL = 'Todos',
  DECOR = 'Decoração',
  STICKERS = 'Adesivos',
  PHOTO = 'Foto Produtos',
  DIGITAL = 'Digital & IA'
}

export interface Product {
  id: string;
  name: string;
  description: string;
  category: ProductCategory;
  imageUrl: string;
  minQuantity?: number;
}

export interface AIGeneratedIdea {
  slogan: string;
  description: string;
  colorPalette: string;
  typography: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatarUrl?: string;
}