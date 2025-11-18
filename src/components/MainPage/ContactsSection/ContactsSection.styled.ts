import { theme } from '@/constants';
import { getFlexItemWidth } from '@/utils';
import styled from '@emotion/styled';
import { IStyledOpenSelectBtnIconProps } from './ContactsSection.types';

const linksGap = theme.spacing(2.5);

export const Section = styled.section``;

export const Container = styled.div`
  position: relative;
  background-color: #18181c;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  overflow: hidden;
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding-top: ${({ theme }) => theme.spacing(10)}px;
  padding-bottom: ${({ theme }) => theme.spacing(20)}px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mob}px) {
    padding-top: ${({ theme }) => theme.spacing(89)}px;
    padding-bottom: ${({ theme }) => theme.spacing(14)}px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    padding-top: ${({ theme }) => theme.spacing(100)}px;
    padding-bottom: ${({ theme }) => theme.spacing(20)}px;
  }
`;

// Contacts
export const ContactsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)}px;
  width: 100%;
  background-color: #252525;
  padding: ${({ theme }) => theme.spacing(3)}px;
  border-radius: 20px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    flex-direction: row;
  }
`;

export const ContactsWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)}px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: 40.4%;
  }
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
  height: 80px;
  background-color: #18181c;
  border-radius: 20px;
  color: #808080;

  & > svg {
    width: 40px;
    height: 40px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    height: 140px;

    & > svg {
      width: 60px;
      height: 60px;
    }
  }
`;

export const ContactPhone = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(4)}px;
  height: 80px;
  background-color: #18181c;
  border-radius: 20px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-weight: 400;
  font-size: 20px;
  line-height: 1.4;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    height: 132px;
    font-size: 24px;
  }
`;

export const Symbol = styled.span`
  width: 6px;
  height: 6px;
  background-color: #88a94b;
  border-radius: 50%;
`;

export const ContactsBannerWrap = styled.div`
  width: 100%;
  height: 180px;
  background-color: #18181c;
  border-radius: 20px;
  overflow: hidden;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    height: 300px;
  }
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
  padding: ${({ theme }) => theme.spacing(6)}px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    padding: ${({ theme }) => theme.spacing(14)}px;
  }
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
  font-size: 40px;
  line-height: 1;
  letter-spacing: -0.88px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mob}px) {
    font-size: 44px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    font-size: 56px;
  }
`;

export const FormText = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-weight: 400;
  font-size: 16px;
  line-height: 1.4;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    font-size: 20px;
  }
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
  position: relative;
  padding: ${({ theme }) => theme.spacing(4)}px;
  background-color: #527324;
  border-radius: 100px;
  color: transparent;
  font-family: ${({ theme }) => theme.fontFamily.theater};
  font-weight: 700;
  font-size: 28px;
  line-height: 1;
  letter-spacing: -0.2px;
  overflow: hidden;
`;

const SubmitBtnLabel = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.colors.white};
  transition: transform ${({ theme }) => theme.transitionDurationAndFunc};
`;

export const SubmitBtnLabelMain = styled(SubmitBtnLabel)`
  button:is(:hover, :focus) > & {
    transform: translateY(-100%);
  }
`;

export const SubmitBtnLabelAlt = styled(SubmitBtnLabel)`
  transform: translateY(100%);

  button:is(:hover, :focus) > & {
    transform: translateY(0%);
  }
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
  font-size: 16px;
  line-height: 1;
  outline: none;
  transition: border-color ${({ theme }) => theme.transitionDurationAndFunc};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    font-size: 20px;
  }

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
  z-index: 10;
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
  font-size: 16px;
  line-height: 1;
  text-align: left;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    font-size: 20px;
  }
`;
