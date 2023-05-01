import { ICardStateMain, IMainCardItem } from './componentsInterface/cardItemInterface';
import { ICardState } from './formInterface';

export interface FormReduxState {
  forms: ICardState[];
}

export interface CardReduxState {
  card: IMainCardItem | null;
  errorState: string[];
  isPending: boolean;
  isError: boolean;
}

export interface IAllCardsState {
  searchValue: string;
  cardsState: ICardStateMain[];
  isError: boolean;
  errorState: string[];
  isPending: boolean;
  isNotFound: boolean;
}
