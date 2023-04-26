import {TextBaseProps} from './types';
import styled, {css} from 'styled-components';
import {defaultTheme as theme} from '../theme/theme';

const color = ({color}: TextBaseProps) => {
  return color ? theme.palette.text[color] : theme.palette.text.black;
};

export const fontSize = ({size}: Partial<TextBaseProps>) => {
  return size + 'px';
};

export const lineHeight = ({height}: Partial<TextBaseProps>) => {
  return height + 'px';
};

const fontWeight = ({weight}: TextBaseProps) => {
  if (weight) {
    switch (weight) {
      case 'semi-bold':
        return 600;
      case 'medium':
        return 500;
      case 'regular':
        return 400;
      default:
        return 400;
    }
  }
};

const fontCase = ({case: _case}: TextBaseProps) => {
  return _case ? {textTransform: _case} : {};
};

const textDecoration = ({decoration}: TextBaseProps) => {
  return decoration ? decoration : 'none';
};

const styles = css`
  font-family: Poppins;
  font-size: ${fontSize};
  font-weight: ${fontWeight};
  text-decoration: ${textDecoration};
  line-height: ${lineHeight};
  ${fontCase};
`;

export const StyledText = styled.span<TextBaseProps>`
  ${styles};
  color: ${color};
`;

export const StyledH1 = styled.h1`
  font-family: Poppins;
  font-size: 26px;
  font-weight: 600;
  line-height: 39px;
  margin: 0;
  color: ${color};
`;
export const StyledH2 = styled.h2`
  font-family: Poppins;
  font-size: 24px;
  font-weight: 500;
  line-height: 36px;
  margin: 0;
  color: ${color};
`;
export const StyledH3 = styled.h3`
  font-family: Poppins;
  font-size: 22px;
  font-weight: 600;
  line-height: 33px;
  margin: 0;
  color: ${color};
`;
export const StyledNotice1 = styled.h6`
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  margin: 0;
  color: ${color};
`;
export const StyledNotice2 = styled.h6`
  font-family: Poppins;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  margin: 0;
  color: ${color};
`;
export const StyledBody = styled.p`
  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  margin: 0;
  color: ${color};
`;
