import React from 'react';
import {Customers} from '../Customers';
import {Menu} from '../Menu';
import {DashboardContainer} from './styles';

export const Dashboard: React.FC = () => {
  return (
    <DashboardContainer>
      <Menu />
      <Customers />
    </DashboardContainer>
  );
};
