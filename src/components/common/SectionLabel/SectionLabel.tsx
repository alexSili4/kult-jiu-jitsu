import { FC } from 'react';
import { Symbol, Title } from './SectionLabel.styled';

interface ISectionLabelProps {
  text: string;
}

const SectionLabel: FC<ISectionLabelProps> = ({ text }) => {
  return (
    <Title>
      <Symbol>•</Symbol>
      <span>[{text})</span>
    </Title>
  );
};

export default SectionLabel;
