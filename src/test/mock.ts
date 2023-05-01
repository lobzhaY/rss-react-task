import { ICardStateMain, IMainCardItem } from '../interface/componentsInterface/cardItemInterface';

export const mockValueSearch: ICardStateMain = {
  id: '123',
  urls: { thumb: 'url' },
  user: { name: 'Alex' },
  likes: 100,
  description: 'Desc',
  alt_description: 'Alt Desc',
};

export const mockValueItem: IMainCardItem = {
  alt_description: 'lorem',
  created_at: '20.01.1995',
  description: 'description',
  downloads: 42,
  height: 23,
  likes: 88,
  location: {
    name: 'Mont Saint-Rigaud, Monsols, France',
    city: 'Minsk',
    country: 'Bel',
    position: {
      latitude: 123,
      longitude: 456,
    },
  },
  urls: {
    regular: 'url',
  },
  user: {
    bio: 'biography',
    name: 'Alex Volkanovsky',
    portfolio_url: 'portfolio_url',
    profile_image: {
      small: 'small',
      medium: 'medium',
      large: 'large',
    },
    total_collections: 3,
    total_likes: 99,
    total_photos: 1,
  },
  views: 103,
  width: 596,
};
