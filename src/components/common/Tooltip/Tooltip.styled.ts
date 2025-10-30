import styled from '@emotion/styled';

export const Container = styled.div`
  border-radius: 6px;
  background-color: #88a94b;
  padding: ${({ theme }) => theme.spacing(1.5)}px;
`;

export const Arrow = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  width: 7px;
  height: 7px;
  background-color: #88a94b;
  translate: -50% -50%;
  rotate: 45deg;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-weight: 400;
  font-size: 12px;
  line-height: 1.2;
`;
