import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 537px;

  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.tablet - 1}px) {
    display: none;
  }
`;

export const TextWrap = styled(motion.div)`
  position: relative;
  width: 1046px;
  height: 526px;
`;

export const LeftShadow = styled.img`
  position: absolute;
  left: 3.3vw;
  bottom: 159px;
  width: 278px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    left: 7.5vw;
  }
`;

export const RightShadow = styled.img`
  position: absolute;
  right: 3.3vw;
  top: 85px;
  width: 278px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    right: 7.5vw;
  }
`;

export const TopShadow = styled.img`
  position: absolute;
  left: 21vw;
  top: 80px;
  width: 505px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    left: 28vw;
  }
`;

export const BottomShadow = styled.img`
  position: absolute;
  right: 22vw;
  bottom: 93px;
  width: 151px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    right: 29vw;
  }
`;

export const Left = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
`;

export const Right = styled.img`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
`;

export const CenterWrap = styled.div`
  position: absolute;
  left: 90px;
  right: 90px;
  top: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 526px;
  transform: translateY(-50%);
  overflow: hidden;
`;

export const Center = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 867px;
  max-width: none;
  height: 437px;
  transform: translateY(-50%) translateX(-50%);
`;

export const Text = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 620px;
  font-family: ${({ theme }) => theme.fontFamily.ubuntu};
  font-weight: 400;
  font-size: 32px;
  line-height: 1.32;
  text-align: center;
  transform: translateY(-50%) translateX(-50%);
`;
