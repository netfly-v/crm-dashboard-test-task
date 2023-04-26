import styled from 'styled-components';
import {Media} from '../../ui-kit/theme/breakpoints';

export const DashboardContainer = styled.div`
  display: flex;
  height: 100%;
  ${Media.down.m} {
    flex-direction: column;
  }
`;
