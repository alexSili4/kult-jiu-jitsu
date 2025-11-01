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
