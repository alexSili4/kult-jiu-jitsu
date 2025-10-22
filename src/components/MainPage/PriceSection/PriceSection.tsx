import GeneralContainer from '@CommonComponents/GeneralContainer';
import { FC } from 'react';
import { Section } from './PriceSection.styled';

const PriceSection: FC = () => {
  return (
    <Section>
      <GeneralContainer>
        <p>PriceSection</p>
      </GeneralContainer>
    </Section>
  );
};

export default PriceSection;
