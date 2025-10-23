import styled from '@emotion/styled';

export const StyledHeader = styled.header`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  padding-top: ${({ theme }) => theme.spacing(5)}px;
  padding-bottom: ${({ theme }) => theme.spacing(5)}px;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(15)}px;
`;

export const Nav = styled.nav`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img`
  width: 100px;
  height: 31px;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(10)}px;
`;

export const ListItem = styled.li``;

export const Link = styled.a`
  font-family: 'Involve Regular', 'Involve Regular Placeholder', sans-serif;
  color: #f9f9f9;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.57;
`;

export const BookASessionBtn = styled.button`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(4)}px;
  padding: ${({ theme }) => theme.spacing(2)}px;
  padding-left: ${({ theme }) => theme.spacing(8)}px;
  border-radius: 100px;
  background-color: #527324;
`;

export const Label = styled.span`
  font-family: 'Theater Bold Condensed', 'Theater Bold Condensed Placeholder',
    sans-serif;
  color: ${({ theme }) => theme.colors.white};
  font-size: 20px;
  font-weight: 400;
  letter-spacing: -0.2px;
  line-height: 1;
`;

export const IconWrap = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.white};
`;
