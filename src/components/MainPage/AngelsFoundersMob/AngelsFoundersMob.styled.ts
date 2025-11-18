import AngelsLogoIcon from '@/icons/veterans/angels.svg?react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import Azov from '@/icons/veterans/azov.svg?react';
import {
  IStyledCardDetailsProps,
  IStyledImageProps,
  StyledCardProps,
} from './AngelsFoundersMob.types';

export const Founders = styled.div`
  position: relative;
  height: 200dvh;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    display: none;
  }
`;

export const Content = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100dvh;
  overflow: hidden;
`;

export const Title = styled.h3`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.theater};
  font-weight: 700;
  font-size: 72px;
  line-height: 0.9;
  letter-spacing: -4.2px;
  text-transform: uppercase;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mob}px) {
    font-size: 140px;
  }
`;

export const TitlePart = styled(motion.span)`
  display: flex;
  align-items: center;
`;

export const AzovIconWrap = styled.span`
  display: flex;
  padding-right: ${({ theme }) => theme.spacing(2)}px;
`;

export const AzovIcon = styled(Azov)`
  width: 43px;
  height: 64px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mob}px) {
    width: 68px;
    height: 102px;
  }
`;

export const Accent = styled.span`
  color: ${({ theme }) => theme.colors.white50};
`;

export const CardsList = styled.ul`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(5)}px;
  translate: -50% -75%;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mob}px) {
    gap: ${({ theme }) => theme.spacing(35)}px;
  }
`;

export const ListItem = styled.li``;

export const CardContainer = styled(motion.div)`
  cursor: pointer;
`;

export const Card = styled.div<StyledCardProps>`
  position: relative;
  width: 70.15vw;
  aspect-ratio: 273 / 403.81;
  background-color: #252525;
  border: 8px solid #252525;
  border-radius: 16px;
  overflow: hidden;
  transition: transform ${({ theme }) => theme.transitionDurationAndFunc};
  transform: ${({ isActive }) =>
    isActive ? 'rotateY(180deg)' : 'rotateY(0deg)'};

  /* *:is(:hover, :focus) > &,
  &:has(*:focus) {
    transform: rotateY(180deg);
  } */

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mob}px) {
    width: 40vw;
    aspect-ratio: 324 / 479.25;
  }
`;

export const Image = styled.img<IStyledImageProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity ${({ theme }) => theme.transitionDurationAndFunc};
  opacity: ${({ isActive }) => (isActive ? 0 : 1)};
  pointer-events: ${({ isActive }) => (isActive ? 'none' : 'all')};

  /* *:is(:hover, :focus) > * > &,
  *:has(*:focus) > & {
    opacity: 0;
    pointer-events: none;
  } */
`;

export const CardDetails = styled.div<IStyledCardDetailsProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: ${({ theme }) => theme.spacing(4)}px;
  opacity: 0;
  transform: rotateY(180deg);
  transition: opacity ${({ theme }) => theme.transitionDurationAndFunc};
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};

  /* *:is(:hover, :focus) > * > &,
  *:has(*:focus) > & {
    opacity: 1;
  } */
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(1.5)}px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mob}px) {
    gap: ${({ theme }) => theme.spacing(2)}px;
  }
`;

export const CardName = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-weight: 400;
  font-size: 20px;
  line-height: 1.2;
  letter-spacing: -0.4px;
`;

export const CardDesc = styled.div`
  color: #808080;
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-weight: 400;
  font-size: 14px;
  line-height: 1.2;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mob}px) {
    font-size: 16px;
  }
`;

export const CardText = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-weight: 400;
  font-size: 14px;
  line-height: 1.4;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mob}px) {
    font-size: 16px;
  }
`;

export const CardLinks = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Instagram = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background-color: #18181c;
  border-radius: 50%;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mob}px) {
    width: 56px;
    height: 56px;
  }
`;

export const Angels = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AngelsLogo = styled(AngelsLogoIcon)`
  width: 118px;
  height: 28px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mob}px) {
    width: 140px;
    height: 33px;
  }
`;
