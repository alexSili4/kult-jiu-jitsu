import styled from '@emotion/styled';
import decorativeIcon from '@/icons/programs/decotative-element.svg';
import { motion } from 'framer-motion';

export const Section = styled.section`
  position: sticky;
  top: -100dvh;
  left: 0;
  height: 200dvh;
  background-color: #18181c;
`;

export const Container = styled.div`
  position: relative;
  height: 100%;
  padding-top: ${({ theme }) => theme.spacing(30)}px;
`;

export const Content = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100dvh;
`;

export const List = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)}px;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const EndRow = styled(Row)`
  justify-content: flex-end;
`;

export const StartRow = styled(Row)`
  justify-content: flex-start;
`;

export const Program = styled.button`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing(2.5)}px;

  &:is(:hover, :focus) {
    cursor: none;
  }
`;

export const CursorImg = styled.img`
  scale: 0;
  transition: scale ${({ theme }) => theme.transitionDurationAndFunc};

  button:is(:hover, :focus) & {
    scale: 1;
  }
`;

export const Name = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.theater};
  font-weight: 700;
  font-stretch: condensed;
  font-size: 160px;
  text-transform: uppercase;
  line-height: 0.93;
  letter-spacing: -7px;
`;

export const Desc = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-weight: 500;
  font-size: 24px;
`;

export const TitleWrap = styled.div`
  align-self: flex-end;
  position: relative;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)}px;
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-size: 20px;
  line-height: 1.2;
`;

export const Symbol = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const DecorativeElementWrap = styled.div`
  position: absolute;
  top: 3dvh;
  left: 50%;
  transform: translateX(-50%);
`;

export const DecorativeElement = styled(motion.div)`
  width: 37.5vw;
  height: 66.7dvh;
  background-image: url(${decorativeIcon});
  background-size: 100% 100%;
`;
