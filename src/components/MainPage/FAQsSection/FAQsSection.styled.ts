import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import {
  IStyledAnswerWrapProps,
  IStyledContainerProps,
  IStyledContentProps,
  IStyledIconWrapProps,
} from './FAQsSection.types';

export const Section = styled.section`
  position: relative;
`;

export const Container = styled.div<IStyledContainerProps>`
  position: relative;
  background-color: #18181c;
  border-top-right-radius: ${({ isModalWin }) => (isModalWin ? 0 : 20)}px;
  border-top-left-radius: ${({ isModalWin }) => (isModalWin ? 0 : 20)}px;
`;

export const Content = styled.div<IStyledContentProps>`
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)}px;
  padding-top: ${({ theme: { spacing }, isModalWin }) =>
    spacing(isModalWin ? 10 : 20)}px;
  padding-bottom: ${({ theme: { spacing }, isModalWin }) =>
    spacing(isModalWin ? 6 : 31)}px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mob}px) {
    gap: ${({ theme }) => theme.spacing(10)}px;
    padding-top: ${({ theme: { spacing }, isModalWin }) =>
      spacing(isModalWin ? 10 : 35)}px;
    padding-bottom: ${({ theme: { spacing }, isModalWin }) =>
      spacing(isModalWin ? 6 : 47)}px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    flex-direction: row;
    gap: 0;
    padding-top: ${({ theme: { spacing }, isModalWin }) =>
      spacing(isModalWin ? 10 : 40)}px;
    padding-bottom: ${({ theme: { spacing }, isModalWin }) =>
      spacing(isModalWin ? 6 : 72)}px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    padding-bottom: ${({ theme: { spacing }, isModalWin }) =>
      spacing(isModalWin ? 16 : 67)}px;
  }
`;

export const QuestionsList = styled.ul`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: 67.2vw;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    width: 66.7vw;
  }
`;

export const ListItem = styled.li``;

export const QuestionContainer = styled(motion.div)``;

export const Question = styled(motion.div)`
  padding-top: ${({ theme }) => theme.spacing(6)}px;
  padding-bottom: ${({ theme }) => theme.spacing(6)}px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.white10};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mob}px) {
    padding-top: ${({ theme }) => theme.spacing(8)}px;
    padding-bottom: ${({ theme }) => theme.spacing(8)}px;
  }
`;

export const QuestionBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(2)}px;
  width: 100%;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.theater};
  font-weight: 700;
  font-size: 32px;
  line-height: 1;
  text-align: start;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mob}px) {
    font-size: 40px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    font-size: 44px;
  }
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

export const AnswerWrap = styled.div<IStyledAnswerWrapProps>`
  max-height: ${({ isShowElement, scrollHeight }) =>
    isShowElement ? scrollHeight : 0}px;
  overflow-y: hidden;
  transition: max-height ${({ theme }) => theme.transitionDurationAndFunc};
`;

export const Answer = styled.div`
  padding-top: ${({ theme }) => theme.spacing(4)}px;
`;

export const AnswerText = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-weight: 400;
  font-size: 16px;
  line-height: 1.4;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    font-size: 20px;
  }
`;
