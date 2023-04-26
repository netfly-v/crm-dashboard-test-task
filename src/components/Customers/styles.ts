import {Input, Table, TableProps} from 'antd';
import styled from 'styled-components';
import {Media} from '../../ui-kit/theme/breakpoints';
import {Typography} from '../../ui-kit/Typography/Text';

export const CustomersContainer = styled.div`
  padding: 41px 95px 41px 71px;
  width: 100%;
  height: 100%;
  background-color: ${({theme}) => theme.palette.background.lightGray};
  ${Media.down.m} {
    padding: 20px;
  }
`;

export const CustomersTitleText = styled(Typography)`
  ${Media.down.m} {
    text-align: center;
  }
`;

export const ContentWrapper = styled.div`
  padding: 30px 44px 41px 38px;
  margin-top: 51px;
  box-shadow: 0px 10px 60px rgba(226, 236, 249, 0.5);
  border-radius: 30px;
  background-color: ${({theme}) => theme.palette.background.white};
  ${Media.down.m} {
    padding: 20px;
    margin-top: 30px;
  }
`;

export const ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  ${Media.down.m} {
    flex-direction: column;
    margin-bottom: 20px;
  }
`;

export const HeaderInfoWrapper = styled.div`
  ${Media.down.m} {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;
  }
`;

export const StyledNotice = styled(Typography)`
  color: ${({theme}) => theme.palette.common.green};
  margin-top: 7px;
`;

export const StyledInput = styled(Input)`
  background: ${({theme}) => theme.palette.common.inputGray};
  border-radius: 10px;
  border: none;
  height: 38px;
  width: 216px;
  input.ant-input {
    background: ${({theme}) => theme.palette.common.inputGray};
    ::placeholder {
      font-family: Poppins;
      font-size: 12px;
      font-weight: 400;
      line-height: 18px;
      color: ${({theme}) => theme.palette.text.gray};
    }
  }
  .ant-input-prefix {
    margin-right: 13px;
  }
`;

export const StyledTable = styled(Table)<TableProps<any>>`
  .ant-table {
    font-family: 'Poppins';
    font-size: 14px;
    font-weight: 500;
    line-height: 21px;
    ${Media.down.l} {
      overflow-x: scroll;
    }
  }
  thead > tr > .ant-table-cell {
    color: ${({theme}) => theme.palette.text.gray};
    border-bottom: 1px solid ${({theme}) => theme.palette.background.gray};
    background-color: transparent;
    font-weight: 500;
  }
  thead > tr > .ant-table-cell:first-child,
  thead > tr > .ant-table-cell:last-child {
    ::after {
      content: '';
      display: flex;
      bottom: -15px;
      height: 1px;
      background-color: ${({theme}) => theme.palette.background.gray};
      position: relative;
      ${Media.down.l} {
        content: none;
      }
    }
  }
  thead > tr > .ant-table-cell:first-child {
    ::after {
      left: -54px;
    }
  }
  thead > tr > .ant-table-cell:last-child {
    ::after {
      right: -60px;
    }
  }
  &.ant-table-wrapper
    .ant-table-thead
    > tr
    > th:not(:last-child):not(.ant-table-selection-column):not(.ant-table-row-expand-icon-cell):not([colspan])::before {
    content: none;
  }
  .ant-table-tbody > tr.ant-table-row:hover > td {
    background: none !important;
  }
  .ant-table-tbody > tr.ant-table-row > td {
    padding: 24px 16px;
    border-bottom: 1px solid ${({theme}) => theme.palette.background.gray};
  }
  &.ant-table-wrapper .ant-table-thead > tr > th {
    padding-bottom: 14px;
    padding-top: 0;
  }
  .ant-pagination .ant-pagination-item-active {
    border: 1px solid ${({theme}) => theme.palette.background.violet};
    background: ${({theme}) => theme.palette.background.violet};
    font-size: 12px;
    line-height: 12px;
    font-family: 'Poppins';
    min-width: auto;
    width: 25px;
    height: 24px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .ant-pagination .ant-pagination-item-active a {
    color: ${({theme}) => theme.palette.text.white};
  }
  &.ant-table-wrapper .ant-table-pagination.ant-pagination {
    align-items: center;
    margin-top: 30px;
    ${Media.down.m} {
      justify-content: center;
    }
  }
  .ant-pagination-prev,
  .ant-pagination-next {
    border: 1px solid ${({theme}) => theme.palette.background.gray};
    background: ${({theme}) => theme.palette.background.buttonGray};
    border-radius: 4px;
    min-width: auto;
    width: 26px;
    height: 24px;
  }
  .ant-pagination-prev {
    margin-right: 12px;
  }
  .ant-pagination-next {
    margin-left: 4px;
  }
  .anticon-left,
  .anticon-right {
    color: ${({theme}) => theme.palette.text.nightBlack};
    font-size: 12px;
    svg {
      width: 8px;
      height: 12px;
    }
  }
`;

export const StatusTag = styled.div<{status: 'active' | 'inactive'}>`
  width: 80px;
  height: 29px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({theme, status}) =>
    status === 'active' ? `${theme.palette.common.green}61` : theme.palette.common.pink};
  border: 1px solid ${({theme, status}) => (status === 'active' ? theme.palette.text.green : theme.palette.text.red)};
  border-radius: 4px;
  text-transform: capitalize;
`;

export const ContentFooter = styled.div`
  display: flex;
  margin-top: -38px;
  ${Media.down.m} {
    margin-top: 0;
    justify-content: center;
  }
`;
