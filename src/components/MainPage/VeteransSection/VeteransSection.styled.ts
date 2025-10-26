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
  height: 300dvh;
  background-color: #18181c;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
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

export const Title = styled.h3``;

export const TitlePart = styled.span``;

export const AzovIconWrap = styled.span``;

export const AzovIcon = styled(Azov)``;

export const Accent = styled.span``;
