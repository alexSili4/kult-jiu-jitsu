import styled from '@emotion/styled';
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

export const Content = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding-top: ${({ theme }) => theme.spacing(40)}px;
  padding-bottom: ${({ theme }) => theme.spacing(67)}px;
`;

export const Title = styled.p`
  position: sticky;
  top: 100px;
  left: 0;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)}px;
  font-family: ${({ theme }) => theme.fontFamily.involve};
  color: #808080;
  font-size: 16px;
  font-weight: 400;
  line-height: 19.2px;
`;

export const Symbol = styled.span`
  color: #88a94b;
`;