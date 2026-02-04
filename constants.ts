import { Product, ProductCategory, Testimonial } from './types';

export const WHATSAPP_NUMBER = "5511999999999"; // Replace with actual number
export const INSTAGRAM_HANDLE = "@prismavisual.art";

export const CATEGORY_SLUGS: Record<string, ProductCategory> = {
  'decoracao': ProductCategory.DECOR,
  'adesivos': ProductCategory.STICKERS,
  'foto-produtos': ProductCategory.PHOTO,
  'digital': ProductCategory.DIGITAL
};

export const SLUG_TO_NAME: Record<string, string> = {
  'decoracao': 'Decoração & Quadros',
  'adesivos': 'Adesivos & Papel de Parede',
  'foto-produtos': 'Foto Produtos & Álbuns',
  'digital': 'Serviços Digitais & IA'
};

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Quadros em Canvas Premium',
    description: 'Transforme suas fotos ou artes em obras de arte com textura de tela de pintura e chassi de madeira.',
    category: ProductCategory.DECOR,
    imageUrl: 'https://picsum.photos/400/300?random=10'
  },
  {
    id: '2',
    name: 'Restauração de Fotos Antigas',
    description: 'Recuperamos memórias. Removemos riscos, manchas e colorimos fotos preto e branco digitalmente.',
    category: ProductCategory.DIGITAL,
    imageUrl: 'https://picsum.photos/400/300?random=11'
  },
  {
    id: '3',
    name: 'Ensaio Fotográfico IA',
    description: 'Tenha fotos profissionais de perfil (Headshots) sem sair de casa usando Inteligência Artificial.',
    category: ProductCategory.DIGITAL,
    imageUrl: 'https://picsum.photos/400/300?random=12'
  },
  {
    id: '4',
    name: 'Kits de Quadros Decorativos',
    description: 'Composições harmônicas com moldura e vidro para sala, quarto ou escritório.',
    category: ProductCategory.DECOR,
    imageUrl: 'https://picsum.photos/400/300?random=13'
  },
  {
    id: '5',
    name: 'Adesivos de Parede',
    description: 'Personalize ambientes inteiros. Papel de parede autocolante, lavável e fácil de aplicar.',
    category: ProductCategory.STICKERS,
    imageUrl: 'https://picsum.photos/400/300?random=14'
  },
  {
    id: '6',
    name: 'Revistas e Fotolivros',
    description: 'Eternize momentos especiais (casamentos, viagens, bebês) em álbuns de alta qualidade.',
    category: ProductCategory.PHOTO,
    imageUrl: 'https://picsum.photos/400/300?random=15'
  },
  {
    id: '7',
    name: 'Adesivos para Vitrine e Vidros',
    description: 'Sinalização, promoção ou decoração com vinil jateado, recortado ou impresso.',
    category: ProductCategory.STICKERS,
    imageUrl: 'https://picsum.photos/400/300?random=16'
  },
  {
    id: '8',
    name: 'Foto Produtos Personalizados',
    description: 'Canecas, azulejos, almofadas e camisetas com sua arte ou foto favorita.',
    category: ProductCategory.PHOTO,
    imageUrl: 'https://picsum.photos/400/300?random=17'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Ana Silva',
    role: 'Arquiteta',
    content: 'A qualidade dos quadros em canvas superou minhas expectativas. O acabamento é impecável e a entrega foi super rápida. Com certeza farei mais pedidos para meus projetos.',
    avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026024d'
  },
  {
    id: '2',
    name: 'Carlos Oliveira',
    role: 'Empresário',
    content: 'Fizemos toda a sinalização e cardápios com a Prisma. O atendimento pelo WhatsApp foi muito ágil e a equipe de design captou exatamente a essência da nossa marca.',
    avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026704d'
  },
  {
    id: '3',
    name: 'Mariana Santos',
    role: 'Fotógrafa',
    content: 'Recomendo muito o serviço de fotolivros. A impressão tem uma fidelidade de cores incrível, o que é essencial para o meu trabalho. Meus clientes amaram!',
    avatarUrl: 'https://i.pravatar.cc/150?u=a04258114e29026302d'
  }
];