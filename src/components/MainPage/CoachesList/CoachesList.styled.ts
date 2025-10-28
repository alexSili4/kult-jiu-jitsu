import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  position: relative;
`;

export const CoachInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const CoachDesc = styled(motion.div)`
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

export const CoachName = styled(motion.div)`
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

export const CardWrapper = styled(motion.div)`
  position: absolute;
  bottom: -100px;
  left: 50%;
  translate: -50% 0;
  width: 26.7vw;
  aspect-ratio: 317.7 / 475.62;
  perspective: 1500px;
`;

export const CardLink = styled.a`
  position: relative;
  display: inline-block;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  border: 10px solid #252525;
  overflow: hidden;
  cursor: none;
  transform-style: preserve-3d;
  transition: transform ${({ theme }) => theme.transitionDurationAndFunc};

  *:is(:hover, :focus) > &,
  &:focus {
    transform: rotateY(180deg);
  }
`;

export const Video = styled.div`
  width: 100%;
  height: 100%;
`;

export const StyledVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CoachCursorWrap = styled.div`
  border-radius: 50%;
  padding: ${({ theme }) => theme.spacing(2)}px;
  background-color: #527324;
  scale: 0.15;
  transition: scale ${({ theme }) => theme.transitionDurationAndFunc};

  div:has(a:is(:hover, :focus)) ~ div & {
    scale: 1;
  }
`;

export const LettersContainer = styled.div`
  position: relative;
  border-radius: 50%;
  height: 148px;
  margin: 0 auto;
  width: 148px;
  text-align: center;
  rotate: -65deg;
  transform-origin: 50% 50%;
  -webkit-transform-origin: 50% 50%;
  scale: 0;
  transition: scale ${({ theme }) => theme.transitionDurationAndFunc};

  div:has(a:is(:hover, :focus)) ~ div & {
    scale: 1;
  }
`;

export const Letter = styled.span`
  position: absolute;
  display: inline-block;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  color: #f9f9f9;
  font-family: ${({ theme }) => theme.fontFamily.theater};
  font-weight: 700;
  font-size: 21.64px;
  line-height: 1;
`;

export const LottieWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  opacity: 0;
  transition: opacity ${({ theme }) => theme.transitionDurationAndFunc};

  div:has(a:is(:hover, :focus)) ~ div & {
    opacity: 1;
  }
`;
