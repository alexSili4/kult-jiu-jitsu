import GeneralContainer from '@CommonComponents/GeneralContainer';
import { FC } from 'react';
import { Section, Content } from './PriceSection.styled';
import SectionTitle from '@CommonComponents/SectionTitle';
import { SectionId } from '@/constants';
import PricesListDesk from '@MainPageComponents/PricesListDesk';
import PricesListMob from '@MainPageComponents/PricesListMob';

const PriceSection: FC = () => {
  return (
    <Section id={SectionId.price}>
      <SectionTitle text='Вартість' isHidden />

      <Content>
        <GeneralContainer>
          <PricesListMob />
          <PricesListDesk />
        </GeneralContainer>
      </Content>
    </Section>
  );
};

export default PriceSection;
