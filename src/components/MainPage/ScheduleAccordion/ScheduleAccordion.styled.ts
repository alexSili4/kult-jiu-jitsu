import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import {
  IStyledContentWrapProps,
  IStyledIconWrapProps,
} from './ScheduleAccordion.types';

export const DaysList = styled.ul`
  width: 100%;
`;

export const ListItem = styled.li``;

export const DetailsContainer = styled(motion.div)``;

export const Schedule = styled(motion.div)`
  padding-top: ${({ theme }) => theme.spacing(9)}px;
  padding-bottom: ${({ theme }) => theme.spacing(9)}px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.white10};
`;

export const DayBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.theater};
  font-weight: 700;
  font-size: 40px;
  line-height: 1;
  letter-spacing: -0.8px;
  text-align: start;
`;

export const IconWrap = styled.span<IStyledIconWrapProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  transform: rotate(${({ isShowElement }) => (isShowElement ? 45 : 0)}deg);
  transition: transform ${({ theme }) => theme.transitionDurationAndFunc};

  button:is(:hover, :focus) > & {
    transform: rotate(${({ isShowElement }) => (isShowElement ? 0 : 45)}deg);
  }
`;

export const ContentWrap = styled.div<IStyledContentWrapProps>`
  max-height: ${({ isShowElement, scrollHeight }) =>
    isShowElement ? scrollHeight : 0}px;
  overflow-y: hidden;
  transition: max-height ${({ theme }) => theme.transitionDurationAndFunc};
`;

export const Programs = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(7)}px;
`;

export const Days = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)}px;
`;

export const DayInfo = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)}px;
`;

export const Time = styled.p`
  display: flex;
  gap: ${({ theme }) => theme.spacing()}px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-weight: 400;
  font-size: 16px;
  line-height: 1.4;
`;

export const Symbol = styled.span`
  color: #88a94b;
  font-weight: 500;
  /* font-size: 22px; */
`;

export const Program = styled.p`
  color: #808080;
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-weight: 400;
  font-size: 16px;
  line-height: 1.4;
`;

export const Coach = styled.p`
  flex-grow: 1;
  color: #808080;
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-weight: 400;
  font-size: 16px;
  line-height: 1.4;
  text-align: right;
`;
