import { theme } from '@/constants';
import { getFlexItemWidth } from '@/utils';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const amenitiesListGap = theme.spacing(5);

export const Section = styled.section`
  position: relative;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(15)}px;
  background-color: #18181c;
  padding-top: ${({ theme }) => theme.spacing()}px;
  padding-bottom: ${({ theme }) => theme.spacing(45.5)}px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(41)}px;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(16)}px;
  width: 66.7vw;
  margin-left: auto;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-weight: 400;
  font-size: 44px;
  line-height: 1.32;
`;

export const AmenitiesList = styled.ul`
  display: flex;
  flex-wrap: wrap-reverse;
  gap: ${amenitiesListGap}px;
  row-gap: ${({ theme }) => theme.spacing(12.5)}px;
`;

export const AmenitiesListItem = styled.li`
  width: calc(
    ${getFlexItemWidth({ listGap: amenitiesListGap, listLength: 3 })}
  );
`;

export const AmenitiesAnimatedCard = styled(motion.div)``;

export const AmenitiesCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(7)}px;
  min-height: 147px;
  padding-left: ${({ theme }) => theme.spacing(8)}px;
  padding-right: ${({ theme }) => theme.spacing(8)}px;

  li:not(:nth-of-type(3n + 1)) & {
    border-left: 1px solid ${({ theme }) => theme.colors.white10};
  }
`;

export const IconWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const CardText = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-weight: 500;
  font-size: 16px;
  line-height: 1.2;
`;

export const ImageWrap = styled.div`
  margin-right: ${({ theme }) => theme.spacing(10)}px;
`;

export const Image = styled.img`
  width: 774px;
  height: 520px;
  border-radius: 20px;
  object-fit: cover;
  overflow: hidden;
`;
