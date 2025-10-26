import styled from '@emotion/styled';
import Azov from '@/icons/veterans/azov.svg?react';
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
