import React, {PropsWithChildren} from 'react';
import {StyledText, StyledH1, StyledH2, StyledH3, StyledNotice1, StyledNotice2, StyledBody} from './styles';
import {TextBaseProps, TypographyProps} from './types';

export type TextProps = TextBaseProps & {as?: keyof JSX.IntrinsicElements};

export const Text: React.FC<TextProps> = StyledText;

export const Typography: React.FC<TypographyProps & PropsWithChildren> = ({variant, children, ...props}) => {
  if (variant === 'h1') return <StyledH1 {...props}>{children}</StyledH1>;
  if (variant === 'h2') return <StyledH2 {...props}>{children}</StyledH2>;
  if (variant === 'h3') return <StyledH3 {...props}>{children}</StyledH3>;
  if (variant === 'notice1') return <StyledNotice1 {...props}>{children}</StyledNotice1>;
  if (variant === 'notice2') return <StyledNotice2 {...props}>{children}</StyledNotice2>;
  if (variant === 'body') return <StyledBody {...props}>{children}</StyledBody>;
  return <Text>{children}</Text>;
};
