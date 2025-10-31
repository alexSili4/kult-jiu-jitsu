import styled from '@emotion/styled';
import LogoIcon from '@/icons/logo.svg?react';
import { motion } from 'framer-motion';

export const AnimatedContainer = styled(motion.div)`
  position: fixed;
  z-index: 20;
  top: 0;
  left: 0;
  width: 100%;
`;

export const StyledHeader = styled(motion.header)`
  padding-top: ${({ theme }) => theme.spacing(5)}px;
  padding-bottom: ${({ theme }) => theme.spacing(5)}px;
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
  height: 54px;
  padding-right: ${({ theme }) => theme.spacing(15)}px;
`;

export const Logo = styled(LogoIcon)`
  width: 128px;
  height: 40px;
`;

export const List = styled(motion.ul)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(10)}px;
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

export const BookASessionBtn = styled.button`
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(4)}px;
  padding: ${({ theme }) => theme.spacing(2)}px;
  padding-left: ${({ theme }) => theme.spacing(8)}px;
  border-radius: 100px;
  background-color: #527324;
`;

export const Label = styled.span`
  position: relative;
  font-family: ${({ theme }) => theme.fontFamily.theater};
  color: ${({ theme }) => theme.colors.white};
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -0.2px;
  line-height: 1;
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
