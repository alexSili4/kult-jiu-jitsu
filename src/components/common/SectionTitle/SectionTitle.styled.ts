import styled from '@emotion/styled';
import { IStyledTitleProps } from './SectionTitle.types';

export const Title = styled.h2<IStyledTitleProps>`
  position: ${({ isHidden }) => isHidden && 'absolute'};
  scale: ${({ isHidden }) => isHidden && 0};
  text-transform: uppercase;
  overflow: hidden;
`;
