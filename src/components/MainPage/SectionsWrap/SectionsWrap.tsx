import { FC, ReactNode } from 'react';
import { Container } from './SectionsWrap.styled';

interface ISectionsWrapProps {
  children: ReactNode;
}

const SectionsWrap: FC<ISectionsWrapProps> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default SectionsWrap;
