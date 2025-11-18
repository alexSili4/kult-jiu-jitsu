import styled from '@emotion/styled';
import { IStyledTitleProps } from './SectionTitle.types';

export const Title = styled.h2<IStyledTitleProps>`
  position: ${({ isHidden }) => isHidden && 'absolute'};
  scale: ${({ isHidden }) => isHidden && 0};
  overflow: hidden;
`;

export const Text = styled.span`
  font-family: ${({ theme }) => theme.fontFamily.theater};
  font-weight: 700;
  background: linear-gradient(
    0deg,
    rgba(76, 76, 76, 0) 28%,
    rgba(76, 76, 76, 0.4) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-transform: uppercase;
`;
