import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
  overflow: auto;
`;

export const Button = styled.button`
  position: absolute;
  top: 20px;
  right: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 54px;
  height: 54px;
  border-radius: 50%;
  background-color: #88a94b;
`;
