import React from 'react';

export type TextBaseProps = {
  weight?: 'regular' | 'medium' | 'semi-bold';
  size?: number;
  height?: number;
  decoration?: 'underline' | 'none';
  case?: 'uppercase' | 'lowercase' | 'capitalize';
  color?: TextColor;
  children: React.ReactNode;
};

export type TypographyProps = {
  variant?: TypographyVariants;
  color?: TextColor;
};

export type TextColor =
  | 'white'
  | 'black'
  | 'lightBlack'
  | 'nightBlack'
  | 'gray'
  | 'skyGray'
  | 'darkGray'
  | 'lightGray'
  | 'green'
  | 'red';
export type TypographyVariants = 'h1' | 'h2' | 'h3' | 'notice1' | 'notice2' | 'body';
