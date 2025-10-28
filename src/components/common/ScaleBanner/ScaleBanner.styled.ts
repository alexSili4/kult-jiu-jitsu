import styled from '@emotion/styled';
import { motion } from 'framer-motion';

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
