import { FC } from 'react';
import { Container, Arrow, Text } from './Tooltip.styled';

interface ITooltipProps {
  text: string;
}

const Tooltip: FC<ITooltipProps> = ({ text }) => {
  return (
    <Container>
      <Text>{text}</Text>
      <Arrow></Arrow>
    </Container>
  );
};

export default Tooltip;
