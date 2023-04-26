import React, {useState} from 'react';
import {Typography} from '../../ui-kit/Typography/Text';
import {customersData, userData} from '../../mockData';
import {
  CustomersContainer,
  ContentWrapper,
  ContentHeader,
  HeaderInfoWrapper,
  StyledNotice,
  StyledInput,
  StyledTable,
  StatusTag,
  ContentFooter,
  CustomersTitleText,
} from './styles';
import {IconSvg} from '../../ui-kit/icons';
import {ColumnsType} from 'antd/es/table';

interface DataType {
  key: string;
  company: string;
  phone: string;
  email: string;
  country: string;
  status: string;
}

const columns: ColumnsType<object> = [
  {
    title: 'Customer Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Company',
    dataIndex: 'company',
    key: 'company',
  },
  {
    title: 'Phone Number',
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Country',
    dataIndex: 'country',
    key: 'country',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (status) => <Tag status={status} />,
  },
];

const data: DataType[] = customersData.map((d, i) => ({...d, key: i.toString()}));

export const Customers: React.FC = () => {
  const [tableData, setTableData] = useState(data);
  const [searchValue, setSearchValue] = useState('');
  const searchItems = (v: string) => {
    if (v === '') {
      setTableData([...data]);
      return;
    }

    const filterValues = (d: DataType[]) =>
      d.filter((el: DataType) => Object.values(el).some((val) => val.toLowerCase().includes(v.toLowerCase())));
    const filtered = filterValues(tableData.length ? tableData : data);

    setTableData([...filtered]);
  };
  return (
    <CustomersContainer>
      <CustomersTitleText variant="h2">{`Hello ${userData.name} 👋🏼,`}</CustomersTitleText>
      <ContentWrapper>
        <ContentHeader>
          <HeaderInfoWrapper>
            <Typography variant="h3">All Customers</Typography>
            <StyledNotice variant="notice1">Active Members</StyledNotice>
          </HeaderInfoWrapper>
          <StyledInput
            placeholder="Search"
            prefix={<IconSvg type={'search'} width="20" height="20" />}
            value={searchValue}
            onChange={({target}) => {
              setSearchValue(target.value);
            }}
            onKeyDown={({key}) => {
              if (key === 'Enter') {
                searchItems(searchValue);
                setSearchValue('');
              }
            }}
          />
        </ContentHeader>
        <StyledTable columns={columns} dataSource={tableData} />
        <ContentFooter>
          <Typography variant="body" color="gray">
            Showing data 1 to 8 of 256K entries
          </Typography>
        </ContentFooter>
      </ContentWrapper>
    </CustomersContainer>
  );
};

const Tag: React.FC<{status: 'active' | 'inactive'}> = ({status}) => {
  return (
    <StatusTag status={status}>
      <Typography variant="body" color={status === 'active' ? 'green' : 'red'}>
        {status}
      </Typography>
    </StatusTag>
  );
};
