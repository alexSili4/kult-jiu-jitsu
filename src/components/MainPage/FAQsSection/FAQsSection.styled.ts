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
  padding-top: ${({ theme: { spacing }, isModalWin }) =>
    spacing(isModalWin ? 10 : 40)}px;
  padding-bottom: ${({ theme: { spacing }, isModalWin }) =>
    spacing(isModalWin ? 16 : 67)}px;
`;

export const QuestionsList = styled.ul`
  width: 66.7vw;
`;

export const ListItem = styled.li``;

export const QuestionContainer = styled(motion.div)``;

export const Question = styled(motion.div)`
  padding-top: ${({ theme }) => theme.spacing(8)}px;
  padding-bottom: ${({ theme }) => theme.spacing(8)}px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.white10};
`;

export const QuestionBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.theater};
  font-weight: 700;
  font-size: 44px;
  line-height: 1;
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
  font-size: 20px;
  line-height: 1.4;
`;
