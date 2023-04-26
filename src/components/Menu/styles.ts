import styled from 'styled-components';
import {Media} from '../../ui-kit/theme/breakpoints';
import {Text, Typography} from '../../ui-kit/Typography/Text';

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 20%;
  padding: 36px 28px 78px;
  background-color: ${({theme}) => theme.palette.background.white};
  ${Media.down.l} {
    width: 100%;
    align-items: center;
  }
  ${Media.down.m} {
    padding: 18px 14px;
  }
`;
export const MenuWrapper = styled.div``;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  ${Media.down.m} {
    justify-content: center;
  }
`;

export const LogoTextWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  margin-left: 11px;
`;

export const VersionText = styled(Text)`
  margin-left: 4px;
  margin-bottom: 7px;
`;

export const MenuItemsContainer = styled.div<{$isMobileOpen: boolean}>`
  margin-top: 65px;
  ${Media.down.m} {
    margin-top: 30px;
    display: ${({$isMobileOpen}) => (!$isMobileOpen ? 'none' : 'block')};
  }
`;

export const MenuButton = styled.button<{$isActive: boolean}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  background-color: ${({theme, $isActive}) => ($isActive ? theme.palette.background.violet : 'transparent')};
  border-color: transparent;
  border-radius: 8px;
  border-width: 0;
  padding: 13px 14px 13px;
  margin-bottom: 18px;
  width: 250px;
`;

export const ItemText = styled(Typography)`
  margin-left: 16px;
  text-transform: capitalize;
`;

export const ButtonTextWrapper = styled.div`
  display: flex;
  background-color: inherit;
`;

export const UserBlock = styled.div`
  display: flex;
  ${Media.down.m} {
    position: absolute;
    flex-direction: column;
    align-items: center;
    right: 20px;
    top: 10px;
  }
`;

export const UserTextWrapper = styled.div`
  margin-left: 12px;
  ${Media.down.m} {
    margin-left: 0;
  }
`;

export const UserImg = styled.img`
  width: 42px;
  height: 42px;
  object-fit: cover;
`;

export const UserPosition = styled(Typography)`
  ${Media.down.m} {
    display: none;
  }
`;

export const MobileMenuIconWrapper = styled.div`
  display: none;
  ${Media.down.m} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 20px;
  }
`;

export const MobileMenuText = styled(Typography)`
  margin-top: 5px;
`;

export const MobileMenuButton = styled.button`
  background: transparent;
  border: none;
`;
