import React from 'react';
import {IconSvg} from '../../ui-kit/icons';
import {icon} from '../../ui-kit/icons/types';
import {Typography} from '../../ui-kit/Typography/Text';
import {
  LogoContainer,
  MenuContainer,
  LogoTextWrapper,
  VersionText,
  MenuItemsContainer,
  MenuButton,
  ItemText,
  ButtonTextWrapper,
  UserBlock,
  UserImg,
  UserTextWrapper,
  MenuWrapper,
  UserPosition,
} from './styles';
import userImg from '../../mockData/user.png';
import {userData} from '../../mockData';

const menuItems: icon[] = ['dashboard', 'product', 'customers', 'income', 'promote', 'help'];

export const Menu: React.FC = () => {
  //mockData - need to use useLocation hook here
  const pathname = 'customers';

  return (
    <MenuContainer>
      <MenuWrapper>
        <LogoContainer>
          <IconSvg type={'logo'} width="31" height="33" />
          <LogoTextWrapper>
            <Typography variant="h1">Dashboard</Typography>
            <VersionText size={10} height={15} weight="medium" color="lightGray">
              v.01
            </VersionText>
          </LogoTextWrapper>
        </LogoContainer>

        <MenuItemsContainer>
          {menuItems.map((item) => (
            <MenuButton key={item} $isActive={item === pathname}>
              <ButtonTextWrapper>
                <IconSvg type={item} width="22" height="22" fillChildren={item === pathname ? '#FFFFFF' : undefined} />
                <ItemText variant="body" color={item === pathname ? 'white' : 'skyGray'}>
                  {item}
                </ItemText>
              </ButtonTextWrapper>
              {item !== 'dashboard' && (
                <IconSvg
                  type={'menuArrow'}
                  width="6"
                  height="10"
                  fillChildren={item === pathname ? '#FFFFFF' : undefined}
                />
              )}
            </MenuButton>
          ))}
        </MenuItemsContainer>
      </MenuWrapper>

      <UserBlock>
        <UserImg src={userImg} />
        <UserTextWrapper>
          <Typography variant="body">{userData.name}</Typography>
          <UserPosition variant="notice2" color="darkGray">
            {userData.position}
          </UserPosition>
        </UserTextWrapper>
      </UserBlock>
    </MenuContainer>
  );
};
