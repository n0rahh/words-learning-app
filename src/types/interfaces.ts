import { To } from 'react-router-dom';
import { ButtonType } from './enums';

export interface Word {
  Original: string,
  Translated: string,
  [key: string]: string;
}

export interface ButtonInterface {
  title: string;
  route?: To;
  url?: string;
  type?: ButtonType;
  isButton?: boolean;
  additionalClass?: string;
  onClick?: (value: unknown) => void;
}
