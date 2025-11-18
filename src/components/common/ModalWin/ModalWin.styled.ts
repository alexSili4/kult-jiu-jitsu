import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
`;

export const Button = styled.button`
  position: absolute;
  top: 8px;
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #88a94b;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    top: 20px;
    right: 40px;
    width: 54px;
    height: 54px;
  }
`;
