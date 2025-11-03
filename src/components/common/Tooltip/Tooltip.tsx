import { FC } from 'react';
import { Container, Arrow, Text } from './Tooltip.styled';
import { ITooltipProps } from './Tooltip.types';

const Tooltip: FC<ITooltipProps> = ({
  text,
  isLeftPosition = false,
  isRightPosition = false,
}) => {
  return (
    <Container>
      <Text>{text}</Text>
      <Arrow
        isLeftPosition={isLeftPosition}
        isRightPosition={isRightPosition}
      ></Arrow>
    </Container>
  );
};

export default Tooltip;
