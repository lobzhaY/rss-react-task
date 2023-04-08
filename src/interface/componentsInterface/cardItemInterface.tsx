export type CardItemPropsType = {
  imageUrl: string;
  description: string;
  likes: number;
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

interface ICardsTag {
  title: string;
  type: string;
}

export interface ICardStateMain {
  alt_description: string;
  id: string;
  urls: ICardsUrls;
  user: ICardsUser;
  [key: string]: unknown;
  tags: ICardsTag[];
  likes: number;
  description: string;
}