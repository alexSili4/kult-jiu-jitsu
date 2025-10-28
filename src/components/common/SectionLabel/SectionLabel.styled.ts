import styled from '@emotion/styled';

export const Title = styled.p`
  position: sticky;
  top: 100px;
  left: 0;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)}px;
  font-family: ${({ theme }) => theme.fontFamily.involve};
  color: #808080;
  font-size: 16px;
  font-weight: 400;
  line-height: 19.2px;
`;

export const Symbol = styled.span`
  color: #88a94b;
`;
