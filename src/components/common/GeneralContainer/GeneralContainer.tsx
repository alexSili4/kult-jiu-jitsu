import { FC, ReactNode } from 'react';
import { Container } from './GeneralContainer.styled';

interface IGeneralContainerProps {
  children: ReactNode;
}

const GeneralContainer: FC<IGeneralContainerProps> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default GeneralContainer;
