import styled from '@emotion/styled';
import Azov from '@/icons/veterans/azov.svg?react';
import AngelsLogoIcon from '@/icons/veterans/angels.svg?react';
import { motion } from 'framer-motion';

export const Section = styled.section`
  position: relative;
`;

export const BannerWrap = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  height: 100dvh;
  overflow: hidden;
`;

export const Banner = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Container = styled.div`
  position: relative;
  background-color: #18181c;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
`;

export const Founders = styled.div`
  position: relative;
  height: 300dvh;
`;

export const Content = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100dvh;
`;

export const Title = styled.h3`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.theater};
  font-weight: 700;
  font-size: 180px;
  line-height: 0.9;
  letter-spacing: -4.2px;
  text-transform: uppercase;
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
  width: 93px;
  height: 140px;
`;

export const Accent = styled.span`
  color: ${({ theme }) => theme.colors.white50};
`;

export const DescriptionWrap = styled.div`
  width: 66.7vw;
  margin-left: auto;
  padding-top: ${({ theme }) => theme.spacing(20)}px;
  padding-bottom: ${({ theme }) => theme.spacing(45)}px;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-weight: 400;
  font-size: 44px;
  line-height: 1.32;
`;

export const CardsList = styled.ul`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(35)}px;
  translate: -50% -50%;
`;

export const ListItem = styled.li``;

export const CardContainer = styled(motion.div)`
  cursor: pointer;
`;

export const Card = styled.div`
  position: relative;
  width: 21.6vw;
  aspect-ratio: 345.59 / 511.18;
  background-color: #252525;
  border: 10px solid #252525;
  border-radius: 24px;
  overflow: hidden;
  transition: transform ${({ theme }) => theme.transitionDurationAndFunc};

  *:is(:hover, :focus) > &,
  &:has(*:focus) {
    transform: rotateY(180deg);
  }
`;

export const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity ${({ theme }) => theme.transitionDurationAndFunc};

  *:is(:hover, :focus) > * > &,
  *:has(*:focus) > & {
    opacity: 0;
  }
`;

export const CardDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: ${({ theme }) => theme.spacing(4)}px;
  opacity: 0;
  transform: rotateY(180deg);
  transition: opacity ${({ theme }) => theme.transitionDurationAndFunc};

  *:is(:hover, :focus) > * > &,
  *:has(*:focus) > & {
    opacity: 1;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)}px;
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
  font-size: 16px;
  line-height: 1.2;
`;

export const CardText = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-weight: 400;
  font-size: 16px;
  line-height: 1.4;
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
  width: 56px;
  height: 56px;
  background-color: #18181c;
  border-radius: 50%;
`;

export const Angels = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AngelsLogo = styled(AngelsLogoIcon)`
  width: 140px;
  height: 33px;
`;
