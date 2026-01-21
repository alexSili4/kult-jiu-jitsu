import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 580px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    display: none;
  }
`;

export const TextWrap = styled(motion.div)`
  position: relative;
  width: 100%;
  max-width: 375px;
  height: 580px;
`;

export const CenterShadow = styled.img`
  position: absolute;
  right: 9.2vw;
  top: 185px;
  width: 278px;
`;

export const TopShadow = styled.img`
  position: absolute;
  left: 22.3vw;
  top: 45px;
  width: 278px;
`;

export const BottomShadow = styled.img`
  position: absolute;
  left: 26vw;
  bottom: 104px;
  width: 151px;
`;

export const Top = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
`;

export const Bottom = styled.img`
  position: absolute;
  left: 0;
  bottom: -20px;
  width: 100%;
`;

export const CenterWrap = styled.div`
  position: absolute;
  left: 2px;
  right: 6px;
  top: 43px;
  bottom: 27px;
  overflow: hidden;
`;

export const Center = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 368px;
  max-width: none;
  height: 521px;
`;

export const Text = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 272px;
  font-family: ${({ theme }) => theme.fontFamily.ubuntu};
  font-weight: 400;
  font-size: 24px;
  line-height: 1.3;
  transform: translateY(-50%) translateX(-50%);
`;
