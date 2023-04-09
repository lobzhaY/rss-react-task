import { Dispatch, SetStateAction } from 'react';

export type CardItemPropsType = {
  imageUrl: string;
  description: string;
  likes: number;
  setActive: Dispatch<SetStateAction<boolean>>;
  setIdCard: Dispatch<SetStateAction<string>>;
  elemId: string;
};

export type FormCardItemPropsType = {
  description: string;
  delivery: string;
  price: string;
  discount: string;
  person: string;
  file: string;
  material: string[];
};

interface ICardsUrls {
  [key: string]: string;
}

interface ICardsUser {
  name: string;
  [key: string]: unknown;
}

export interface ICardStateMain {
  alt_description: string;
  id: string;
  urls: ICardsUrls;
  user: ICardsUser;
  [key: string]: unknown;
  likes: number;
  description: string;
}

export interface IMainCardItem {
  alt_description: string;
  created_at: string;
  description: string;
  downloads: number;
  height: number;
  likes: number;
  location: {
    name: string;
    city: string;
    country: string;
    position: {
      latitude: number;
      longitude: number;
    };
  };
  tags: { title: string; type: string }[];
  updated_at: string;
  urls: {
    full: string;
    raw: string;
    regular: string;
    small: string;
    small_s3: string;
    thumb: string;
  };
  user: {
    bio: string;
    name: string;
    portfolio_url: string;
    profile_image: {
      small: string;
      medium: string;
      large: string;
    };
    total_collections: number;
    total_likes: number;
    total_photos: number;
  };
  views: number;
  width: number;
}
