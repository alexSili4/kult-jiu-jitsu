import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Container = styled.div`
  position: relative;
`;

export const CoachInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const CoachDesc = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(8)}px;
`;

export const CoachDescItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(0.5)}px;
`;

export const DescText = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.theater};
  font-weight: 700;
  font-size: 48px;
  letter-spacing: -1px;
  text-transform: uppercase;
`;

export const DescTitle = styled.p`
  color: #808080;
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-weight: 400;
  font-size: 20px;
  line-height: 1.4;
`;

export const CoachName = styled.div`
  display: inline-flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(5)}px;
  width: 25.2vw;
`;

export const NameWrap = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing(2.5)}px;
`;

export const SymbolsWrap = styled.div`
  display: flex;
`;

export const Symbol = styled.div`
  width: 35px;
  height: 35px;
  background-color: #252525;
  border: 2px solid #18181c;
  border-radius: 50%;

  &:not(:first-of-type) {
    translate: -10px 0;
  }
`;

export const Name = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.theater};
  font-weight: 700;
  font-size: 48px;
  letter-spacing: -1px;
  text-transform: uppercase;
`;

export const Desc = styled.p`
  color: #d9d9d9;
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-weight: 400;
  font-size: 20px;
  line-height: 1.4;
`;

export const CardBtn = styled(motion.button)`
  position: absolute;
  bottom: -100px;
  left: 50%;
  width: 26.7vw;
  aspect-ratio: 317.7 / 475.62;
  border-radius: 20px;
  border: 10px solid #252525;
  translate: -50% 0;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
