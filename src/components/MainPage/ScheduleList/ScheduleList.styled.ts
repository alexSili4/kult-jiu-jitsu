import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const List = styled.ul`
  display: none;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    display: block;
    width: 66.7vw;
  }
`;

export const ListItem = styled.li``;

export const Container = styled(motion.div)``;

export const Wrapper = styled(motion.div)`
  display: flex;
  padding-top: ${({ theme }) => theme.spacing(15)}px;
  padding-bottom: ${({ theme }) => theme.spacing(15)}px;
  border-top: 1px solid ${({ theme }) => theme.colors.white10};
`;

export const Day = styled.p`
  flex-grow: 1;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.theater};
  font-weight: 700;
  font-size: 44px;
  line-height: 1;
  letter-spacing: -0.8px;
`;

export const Programs = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(5.5)}px;
  width: 73.7%;
`;

export const Days = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2.5)}px;
`;

export const DayInfo = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(6)}px;
`;

export const Time = styled.p`
  display: flex;
  gap: ${({ theme }) => theme.spacing(2)}px;
  width: 20%;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-weight: 400;
  font-size: 20px;
  line-height: 1.4;
`;

export const Symbol = styled.span`
  color: #88a94b;
  font-weight: 500;
  font-size: 22px;
`;

export const Program = styled.p`
  width: 59%;
  color: #808080;
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-weight: 400;
  font-size: 20px;
  line-height: 1.4;
`;

export const Coach = styled.p`
  flex-grow: 1;
  color: #808080;
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-weight: 400;
  font-size: 20px;
  line-height: 1.4;
`;
