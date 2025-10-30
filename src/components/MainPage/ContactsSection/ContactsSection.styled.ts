import { theme } from '@/constants';
import { getFlexItemWidth } from '@/utils';
import styled from '@emotion/styled';
import { IStyledOpenSelectBtnIconProps } from './ContactsSection.types';
import MetroIcon from '@/icons/contacts/metro.svg?react';
import ParkingIcon from '@/icons/contacts/parking.svg?react';
import { motion } from 'framer-motion';

const linksGap = theme.spacing(2.5);

export const Section = styled.section``;

export const Container = styled.div`
  position: relative;
  background-color: #18181c;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding-top: ${({ theme }) => theme.spacing(25)}px;
  padding-bottom: ${({ theme }) => theme.spacing(20)}px;
`;

// Map
export const MapContainer = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  height: 150dvh;
`;

export const MapWrap = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #252525;
  overflow: hidden;
`;

export const MapImgWrap = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  aspect-ratio: 1600 / 850;
  overflow: hidden;
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
  transition: translate ${({ theme }) => theme.transitionDurationAndFunc},
    opacity ${({ theme }) => theme.transitionDurationAndFunc};

  button:not(:is(:hover, :focus)) > & {
    translate: -50% 0px;
    opacity: 0;
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

// Address
export const AddressContainer = styled(motion.div)`
  position: absolute;
  bottom: 64px;
  left: 60px;
`;

export const AddressWrap = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(11)}px;
  width: 440px;
  height: 360px;
  background-color: #252525;
  padding: ${({ theme }) => theme.spacing(8)}px;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors.white10};
  box-shadow: 0px -4px 30px rgba(0, 0, 0, 0.5);
`;

export const AddressTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(7)}px;
`;

export const Address = styled.address`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)}px;
  font-style: normal;
`;

export const AddressTitle = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-weight: 400;
  font-size: 44px;
  line-height: 1.2;
`;

export const AddressText = styled.p`
  color: #808080;
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-weight: 400;
  font-size: 20px;
  line-height: 1.2;
`;

export const MapLink = styled.a`
  align-self: flex-start;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.spacing(4)}px;
  min-width: 252px;
  background-color: #18181c;
  border-radius: 100px;
  padding: ${({ theme }) => theme.spacing(2)}px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.theater};
  font-weight: 700;
  font-size: 24px;
  line-height: 1;
  letter-spacing: -0.2px;
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

// Contacts
export const ContactsContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(3)}px;
  width: 100%;
  background-color: #252525;
  padding: ${({ theme }) => theme.spacing(3)}px;
  border-radius: 20px;
`;

export const ContactsWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)}px;
  width: 40.4%;
`;

export const ContactsLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)}px;
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: ${linksGap}px;
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(${getFlexItemWidth({ listGap: linksGap, listLength: 2 })});
  height: 140px;
  background-color: #18181c;
  border-radius: 20px;
  color: #808080;
`;

export const ContactPhone = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(4)}px;
  height: 132px;
  background-color: #18181c;
  border-radius: 20px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-weight: 400;
  font-size: 24px;
  line-height: 1.4;
`;

export const Symbol = styled.span`
  width: 6px;
  height: 6px;
  background-color: #88a94b;
  border-radius: 50%;
`;

export const ContactsBannerWrap = styled.div`
  width: 100%;
  height: 100%;
  background-color: #18181c;
  border-radius: 20px;
  overflow: hidden;
`;

export const ContactsBanner = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

// ContactsForm
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(10)}px;
  background-color: #18181c;
  border-radius: 16px;
  padding: ${({ theme }) => theme.spacing(14)}px;
`;

export const FormHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)}px;
`;

export const FormTitle = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.theater};
  font-weight: 700;
  font-size: 56px;
  line-height: 1;
  letter-spacing: -0.88px;
`;

export const FormText = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-weight: 400;
  font-size: 20px;
  line-height: 1.4;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(15)}px;
`;

export const InputsWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)}px;
`;

export const SubmitBtn = styled.button`
  padding: ${({ theme }) => theme.spacing(4)}px;
  background-color: #527324;
  border-radius: 100px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.theater};
  font-weight: 700;
  font-size: 20px;
  line-height: 1;
  letter-spacing: -0.2px;
`;

// Input
export const StyledInput = styled.input`
  width: 100%;
  height: 52px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid;
  border-color: ${({ theme }) => theme.colors.white10};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-weight: 400;
  font-size: 20px;
  line-height: 1;
  outline: none;
  transition: border-color ${({ theme }) => theme.transitionDurationAndFunc};

  &::placeholder {
    color: ${({ theme }) => theme.colors.white50};
  }

  &:is(:focus, :hover) {
    border-color: ${({ theme }) => theme.colors.white60};
  }
`;

export const InputWrap = styled.div`
  position: relative;
`;

export const OpenSelectBtn = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: #808080;
`;

export const OpenSelectBtnIcon = styled.span<IStyledOpenSelectBtnIconProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 100%;
  margin-left: auto;
  rotate: ${({ isOpen }) => (isOpen ? 180 : 0)}deg;
  transition: rotate ${({ theme }) => theme.transitionDurationAndFunc};

  button:is(:hover, :focus) & {
    rotate: ${({ isOpen }) => (isOpen ? 0 : 180)}deg;
  }
`;

export const OptionsContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.white10};
  padding: ${({ theme }) => theme.spacing(3)}px;
  background-color: #18181c;
  transform: translateY(8px);
`;

export const OptionsList = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const ListItem = styled.li``;

export const OptionBtn = styled.button`
  width: 100%;
  padding: ${({ theme }) => theme.spacing(2)}px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-weight: 400;
  font-size: 20px;
  line-height: 1;
  text-align: left;
`;
