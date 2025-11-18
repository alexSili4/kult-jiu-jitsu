import { theme } from '@/constants';
import { getFlexItemWidth } from '@/utils';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import HandIcon from '@/icons/amenities/hand.svg?react';
import MessageIcon from '@/icons/amenities/message.svg?react';
import { css } from '@emotion/react';

export const globalStyles = css`
  .hide-scrollbar::-webkit-scrollbar {
    display: none;
  }
`;

const amenitiesListGapMob = theme.spacing(2);
const amenitiesListGapDesk = theme.spacing(5);

export const Section = styled.section`
  position: relative;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(15)}px;
  background-color: #18181c;
  padding-top: ${({ theme }) => theme.spacing(20)}px;
  padding-bottom: ${({ theme }) => theme.spacing(20)}px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    padding-top: ${({ theme }) => theme.spacing(16)}px;
    padding-bottom: ${({ theme }) => theme.spacing(27)}px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    padding-top: ${({ theme }) => theme.spacing()}px;
    padding-bottom: ${({ theme }) => theme.spacing(45.5)}px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(41)}px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mob}px) {
    gap: ${({ theme }) => theme.spacing(50)}px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    gap: ${({ theme }) => theme.spacing(56)}px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    gap: ${({ theme }) => theme.spacing(41)}px;
  }
`;

export const DetailsWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(16)}px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mob}px) {
    gap: ${({ theme }) => theme.spacing(18)}px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    gap: ${({ theme }) => theme.spacing(15)}px;
    width: 67.2vw;
    margin-left: auto;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    width: 66.7vw;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(14)}px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mob}px) {
    gap: ${({ theme }) => theme.spacing(20)}px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    gap: ${({ theme }) => theme.spacing(16)}px;
  }
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-weight: 400;
  font-size: 24px;
  line-height: 1.32;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mob}px) {
    font-size: 44px;
  }
`;

export const AmenitiesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${amenitiesListGapMob}px;
  row-gap: ${({ theme }) => theme.spacing(7)}px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mob}px) {
    flex-wrap: wrap-reverse;
    gap: ${amenitiesListGapDesk}px;
    row-gap: ${({ theme }) => theme.spacing(12.5)}px;
  }
`;

export const AmenitiesListMob = styled(AmenitiesList)`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mob}px) {
    display: none;
  }
`;

export const AmenitiesListDesk = styled(AmenitiesList)`
  display: none;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mob}px) {
    display: flex;
  }
`;

export const AmenitiesListItem = styled.li`
  width: calc(
    ${getFlexItemWidth({ listGap: amenitiesListGapMob, listLength: 2 })}
  );

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mob}px) {
    width: calc(
      ${getFlexItemWidth({ listGap: amenitiesListGapDesk, listLength: 3 })}
    );
  }
`;

export const AmenitiesAnimatedCard = styled(motion.div)``;

export const AmenitiesCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)}px;

  li:not(:nth-of-type(2n + 1)) & {
    padding-left: ${({ theme }) => theme.spacing(5)}px;
    border-left: 1px solid ${({ theme }) => theme.colors.white10};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mob}px) {
    gap: ${({ theme }) => theme.spacing(7)}px;
    min-height: 147px;
    padding-left: ${({ theme }) => theme.spacing(8)}px;
    padding-right: ${({ theme }) => theme.spacing(8)}px;

    li:not(:nth-of-type(2n + 1)) & {
      border-left: none;
    }

    li:not(:nth-of-type(3n + 1)) & {
      border-left: 1px solid ${({ theme }) => theme.colors.white10};
    }
  }
`;

export const IconWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.white};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mob}px) {
    width: 80px;
    height: 80px;
  }
`;

export const CardText = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-weight: 500;
  font-size: 14px;
  line-height: 1.2;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    font-size: 16px;
  }
`;

export const ImageWrap = styled.div`
  margin-right: ${({ theme }) => theme.spacing(5)}px;
  user-select: none;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    margin-right: ${({ theme }) => theme.spacing(10)}px;
  }
`;

export const Image = styled.img`
  width: 311px;
  height: 400px;
  border-radius: 16px;
  object-fit: cover;
  overflow: hidden;
  user-select: none;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mob}px) {
    width: 780px;
    height: 520px;
    border-radius: 20px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    width: 774px;
    height: 520px;
  }
`;

export const AdditionalText = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-weight: 400;
  font-size: 24px;
  line-height: 1.32;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mob}px) {
    font-size: 44px;
  }
`;

export const Hand = styled(HandIcon)`
  display: inline-block;
  width: 35px;
  height: 34px;
  vertical-align: middle;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mob}px) {
    width: 52px;
    height: 50px;
  }
`;

export const Message = styled(MessageIcon)`
  display: inline-block;
  width: 43px;
  height: 32px;
  vertical-align: middle;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mob}px) {
    width: 70px;
    height: 52px;
  }
`;

export const ScrollContainer = styled.div`
  display: flex;
  overflow-x: auto;
  cursor: grab;
  user-select: none;
  scrollbar-width: none;
  -ms-overflow-style: none;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
  }

  &:active {
    cursor: grabbing;
  }
`;
