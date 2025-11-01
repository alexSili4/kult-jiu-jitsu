import { theme } from '@/constants';
import { getFlexItemWidth } from '@/utils';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const listGap = theme.spacing(5);

export const Section = styled.section`
  position: relative;
`;

export const Content = styled.div`
  background-color: #18181c;
  padding-top: ${({ theme }) => theme.spacing(10)}px;
  padding-bottom: ${({ theme }) => theme.spacing(35)}px;
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const List = styled.ul`
  display: flex;
  gap: ${listGap}px;
  width: 67.2vw;
`;

export const ListItem = styled.li`
  width: calc(${getFlexItemWidth({ listGap, listLength: 3 })});
`;

export const AnimatedContainer = styled(motion.div)``;

export const Card = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(12)}px;
  background-color: #252525;
  padding: ${({ theme }) => theme.spacing(8)}px;
  border-radius: 16px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(5)}px;
`;

export const About = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)}px;
`;

export const StartLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing(1.5)}px;
  border: 1px solid #88a94b;
  border-radius: 100px;
`;

export const Start = styled.p`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing()}px;
  color: #88a94b;
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-weight: 500;
  font-size: 12px;
  line-height: 1.5;
`;

export const Symbol = styled.span`
  font-size: 18px;
  line-height: 0.7;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)}px;
  padding-bottom: ${({ theme }) => theme.spacing(5)}px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.white10};
`;

export const Day = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.theater};
  font-weight: 700;
  font-size: 40px;
  line-height: 1;
  letter-spacing: -0.8px;
`;

export const Period = styled.p`
  color: #f9f9f9;
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-weight: 400;
  font-size: 16px;
  line-height: 1.4;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)}px;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Text = styled.p`
  color: #808080;
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-weight: 400;
  font-size: 16px;
  line-height: 1.4;
`;

export const Button = styled.button`
  background-color: #18181c;
  padding: ${({ theme }) => theme.spacing(5)}px;
  border-radius: 100px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.theater};
  font-weight: 700;
  font-size: 20px;
  line-height: 1;
  letter-spacing: -0.2px;
  transition: background-color ${({ theme }) => theme.transitionDurationAndFunc},
    color ${({ theme }) => theme.transitionDurationAndFunc};

  &:is(:hover, :focus) {
    background-color: ${({ theme }) => theme.colors.white};
    color: #18181c;
  }
`;
