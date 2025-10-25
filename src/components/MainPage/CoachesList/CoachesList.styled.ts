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

export const CardBtn = styled.button`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  border: 10px solid #252525;
  overflow: hidden;
  transform-style: preserve-3d;
  transition: transform ${({ theme }) => theme.transitionDurationAndFunc};
  cursor: pointer;

  *:is(:hover, :focus) > &,
  &:focus {
    transform: rotateY(180deg);
  }
`;

// export const Image = styled.img`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
//   opacity: 0;

//   *:is(:hover, :focus) > * > &,
//   *:focus > & {
//     opacity: 0;
//   }
// `;

export const Video = styled.div`
  /* position: absolute;
  top: 0;
  left: 0; */
  width: 100%;
  height: 100%;
  /* opacity: 0;

  *:is(:hover, :focus) > * > &,
  *:focus > & {
    opacity: 1;
  } */
`;

export const StyledVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
