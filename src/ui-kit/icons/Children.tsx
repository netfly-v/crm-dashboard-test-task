import React from 'react';
import {StyledSvgIconProps} from './types';
import {
  CustomersIcon,
  DashboardIcon,
  HelpIcon,
  IncomeIcon,
  Logo,
  MenuArrow,
  ProductIcon,
  PromoteIcon,
  SearchIcon,
} from './paths';

export const SvgChildren: React.FC<StyledSvgIconProps> = ({type, fillChildren}) => {
  if (type === 'logo') {
    return <Logo />;
  }
  if (type === 'dashboard') {
    return <DashboardIcon fillChildren={fillChildren} />;
  }
  if (type === 'product') {
    return <ProductIcon fillChildren={fillChildren} />;
  }
  if (type === 'customers') {
    return <CustomersIcon fillChildren={fillChildren} />;
  }
  if (type === 'income') {
    return <IncomeIcon fillChildren={fillChildren} />;
  }
  if (type === 'promote') {
    return <PromoteIcon fillChildren={fillChildren} />;
  }
  if (type === 'help') {
    return <HelpIcon fillChildren={fillChildren} />;
  }
  if (type === 'menuArrow') {
    return <MenuArrow fillChildren={fillChildren} />;
  }
  if (type === 'search') {
    return <SearchIcon />;
  }

  return null;
};
