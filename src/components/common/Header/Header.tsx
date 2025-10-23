import { FC } from 'react';
import {
  StyledHeader,
  List,
  ListItem,
  Logo,
  Nav,
  Link,
  BookASessionBtn,
  IconWrap,
  Label,
  Container,
} from './Header.styled';
import GeneralContainer from '@CommonComponents/GeneralContainer';
import { navLinks } from '@/constants';

const Header: FC = () => {
  return (
    <StyledHeader>
      <GeneralContainer>
        <Container>
          <Nav>
            <Logo />

            <List>
              {navLinks.map(({ href, label }) => (
                <ListItem>
                  <Link key={href} href={href}>
                    {label}
                  </Link>
                </ListItem>
              ))}
            </List>
          </Nav>

          <BookASessionBtn>
            <Label>Записатись</Label>
            <IconWrap></IconWrap>
          </BookASessionBtn>
        </Container>
      </GeneralContainer>
    </StyledHeader>
  );
};

export default Header;
