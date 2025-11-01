import styled from '@emotion/styled';
import LogoIcon from '@/icons/logo.svg?react';
import { motion } from 'framer-motion';
import { IStyledMobileMenuBtnProps } from './Header.types';

export const AnimatedContainer = styled(motion.div)`
  position: fixed;
  z-index: 20;
  top: 0;
  left: 0;
  width: 100%;
`;

export const StyledHeader = styled(motion.header)`
  padding-top: ${({ theme }) => theme.spacing(2)}px;
  padding-bottom: ${({ theme }) => theme.spacing(2)}px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    padding-top: ${({ theme }) => theme.spacing(5)}px;
    padding-bottom: ${({ theme }) => theme.spacing(5)}px;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Nav = styled.nav`
  flex-grow: 1;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    height: 54px;
    padding-right: ${({ theme }) => theme.spacing(15)}px;
  }
`;

export const NavigationList = styled.div`
  display: none;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    display: block;
  }
`;

export const Logo = styled(LogoIcon)`
  position: relative;
  z-index: 100;
  width: 77px;
  height: 24px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    width: 128px;
    height: 40px;
  }
`;

export const List = styled(motion.ul)`
  display: none;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing(10)}px;
  }
`;

export const ListItem = styled.li``;

export const Link = styled.a`
  font-family: ${({ theme }) => theme.fontFamily.involve};
  color: #f9f9f9;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.57;
  white-space: nowrap;
`;

export const BookASessionLink = styled.a`
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing(2)}px;
  padding-left: ${({ theme }) => theme.spacing(8)}px;
  border-radius: 100px;
  background-color: #527324;
`;

export const DeskBookASessionLink = styled(BookASessionLink)`
  display: none;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    display: flex;
    gap: ${({ theme }) => theme.spacing(4)}px;
  }
`;

export const Label = styled.span`
  flex-grow: 1;
  position: relative;
  font-family: ${({ theme }) => theme.fontFamily.theater};
  color: ${({ theme }) => theme.colors.white};
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -0.2px;
  line-height: 1;
  text-align: center;
  translate: 0 2px;
`;

export const IconWrap = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const AnimatedFullNavigationContainer = styled(motion.div)`
  position: absolute;
  top: 0;
  right: 10px;
  display: block;
`;

export const FullNavigationContainer = styled(motion.div)`
  position: relative;
  background-color: #252525;
`;

export const FullNavigationBtn = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 54px;
  height: 54px;
  color: ${({ theme }) => theme.colors.white};
`;

export const FullNavigationLinks = styled(motion.div)`
  overflow: hidden;
`;

export const FullNavigationLinksList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)}px;
  padding: ${({ theme: { spacing } }) =>
    `0 ${spacing(7)}px ${spacing(5)}px ${spacing(4)}px`};
`;

export const MobileMenuContainer = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    display: none;
  }
`;

export const MobileMenuBtn = styled.button<IStyledMobileMenuBtnProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background-color: #252525;
  border-radius: 50%;
  transition: rotate ${({ theme }) => theme.transitionDurationAndFunc};
  color: ${({ theme }) => theme.colors.white};
  rotate: ${({ isOpen }) => (isOpen ? 90 : 0)}deg;
  transition: rotate ${({ theme }) => theme.transitionDurationAndFunc};

  &:is(:hover, :focus) {
    rotate: ${({ isOpen }) => (isOpen ? 0 : 90)}deg;
  }
`;

export const MobileMenuBackdrop = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  background-color: #18181c;
  padding: ${({ theme }) => theme.spacing(5)}px;
  padding-top: ${({ theme }) => theme.spacing(20)}px;
  padding-bottom: ${({ theme }) => theme.spacing(6)}px;
`;

export const MobileMenuLinks = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)}px;
`;
