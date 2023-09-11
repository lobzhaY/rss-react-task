import { KeyboardEvent } from 'react';

export interface ISearch {
  handleChange: (e: KeyboardEvent<HTMLInputElement>) => Promise<void>;
}
