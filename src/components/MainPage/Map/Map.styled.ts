import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import MetroIcon from '@/icons/contacts/metro.svg?react';
import ParkingIcon from '@/icons/contacts/parking.svg?react';

export const MapContainer = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  height: 150vh;
`;

export const MapWrap = styled.div`
  position: relative;
  top: 0;
  left: 0;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #252525;
  overflow: hidden;
`;

export const MapImgWrap = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  overflow: hidden;
`;

export const MapImgWrapMob = styled(MapImgWrap)`
  top: -50px;
  bottom: auto;
  width: 100%;
  aspect-ratio: 810 / 850;

  @media screen and (min-width: ${({ theme }) =>
      (theme.breakpoints.mob / 5) * 3}px) {
    top: -100px;
  }

  @media screen and (min-width: ${({ theme }) =>
      (theme.breakpoints.mob / 5) * 4}px) {
    top: -170px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mob}px) {
    top: -150px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    display: none;
  }
`;

export const MapImgWrapDesk = styled(MapImgWrap)`
  display: none;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    display: block;
    aspect-ratio: 1600 / 850;
  }
`;

export const MapImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: bottom right;
`;

export const MetroBtn = styled.button`
  position: absolute;
  translate: 50% 50%;
`;

export const Metro = styled(MetroIcon)`
  position: relative;
  width: 32px;
  height: 32px;
  rotate: 41deg;
`;

export const FinishBtn = styled.button`
  position: absolute;
  width: 17px;
  height: 17px;
  border: 3px solid ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  background-color: #88a94b;
  translate: 50% 50%;
`;

export const TooltipWrap = styled.span`
  position: absolute;
  bottom: 0;
  left: 50%;
  display: block;
  translate: -50% -32px;
  opacity: 1;
  transition:
    translate ${({ theme }) => theme.transitionDurationAndFunc},
    opacity ${({ theme }) => theme.transitionDurationAndFunc};

  button:not(:is(:hover, :focus)) > & {
    translate: -50% 0px;
    opacity: 0;
  }
`;

export const KultTooltipWrap = styled(TooltipWrap)`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mob}px) {
    bottom: 0;
    translate: -50% -32px;
  }
`;

export const MetroTooltipWrap = styled(TooltipWrap)`
  translate: -50% -48px;
`;

export const Glow = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100px;
  height: 100px;
  background-image: radial-gradient(
    50% 50% at 50% 50%,
    rgba(136, 169, 75, 0.36) 0%,
    rgba(136, 169, 75, 0) 100%
  );
  translate: -50% -50%;
`;

export const MapPath = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const Svg = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-shadow: 0px 0px 42.5px 0px #000000;
`;

export const Path = styled(motion.path)`
  stroke: #88a94b;
  stroke-width: 6px;
`;

export const PathShadow = styled(motion.path)`
  stroke: rgba(136, 169, 75, 0.35);
  stroke-width: 14px;
`;

export const Parking = styled(ParkingIcon)`
  position: absolute;
  width: 24px;
  height: 24px;
`;

export const AddressContainer = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mob}px) {
    left: 32px;
    bottom: 64px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    left: 40px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    left: 60px;
  }
`;

export const AddressWrap = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(8)}px;
  width: 100%;
  background-color: #252525;
  padding: ${({ theme }) => theme.spacing(8)}px;
  padding-left: ${({ theme }) => theme.spacing(5)}px;
  padding-right: ${({ theme }) => theme.spacing(5)}px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mob}px) {
    gap: ${({ theme }) => theme.spacing(12)}px;
    width: 380px;
    height: 320px;
    border-radius: 16px;
    border: 1px solid ${({ theme }) => theme.colors.white10};
    box-shadow: 0px -4px 30px rgba(0, 0, 0, 0.5);
    padding: ${({ theme }) => theme.spacing(6)}px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    gap: ${({ theme }) => theme.spacing(16)}px;
    width: 400px;
    height: 360px;
    padding: ${({ theme }) => theme.spacing(8)}px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    gap: ${({ theme }) => theme.spacing(11)}px;
    width: 440px;
  }
`;

export const AddressTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)}px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mob}px) {
    gap: ${({ theme }) => theme.spacing(5)}px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    gap: ${({ theme }) => theme.spacing(7)}px;
  }
`;

export const Address = styled.address`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)}px;
  font-style: normal;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mob}px) {
    gap: ${({ theme }) => theme.spacing(4)}px;
  }
`;

export const AddressTitle = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-weight: 400;
  font-size: 24px;
  line-height: 1.2;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mob}px) {
    font-size: 40px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    font-size: 44px;
  }
`;

export const AddressText = styled.p`
  color: #808080;
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-weight: 400;
  font-size: 16px;
  line-height: 1.2;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    font-size: 20px;
  }
`;

export const MapLink = styled.a`
  align-self: flex-start;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  min-width: 100%;
  background-color: #18181c;
  border-radius: 100px;
  padding: ${({ theme }) => theme.spacing(2)}px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.theater};
  font-weight: 700;
  font-size: 20px;
  line-height: 1;
  letter-spacing: -0.2px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mob}px) {
    min-width: 233px;
    font-size: 20px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    min-width: 226px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    min-width: 252px;
    font-size: 24px;
  }
`;

export const MapLinkTitle = styled.span`
  flex-grow: 1;
  text-align: center;
`;

export const MapLinkIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: #252525;
  border-radius: 50%;
`;
