import styled from '@emotion/styled';

export const Section = styled.section``;

export const MapContainer = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  height: 150dvh;
`;

export const MapWrap = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  height: 100dvh;
  background-color: #808080;
  overflow: hidden;
`;

export const MapImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Container = styled.div`
  position: relative;
  background-color: #18181c;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding-top: ${({ theme }) => theme.spacing(25)}px;
  padding-bottom: ${({ theme }) => theme.spacing(20)}px;
`;
