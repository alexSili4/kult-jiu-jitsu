import GeneralContainer from '@CommonComponents/GeneralContainer';
import { FC } from 'react';
import {
  Section,
  Container,
  Description,
  DescriptionWrap,
} from './VeteransSection.styled';
import SectionTitle from '@CommonComponents/SectionTitle';
import banner from '@/images/veterans/banner.jpg';
import { SectionId } from '@/constants';
import ScaleBanner from '@CommonComponents/ScaleBanner';
import AngelsFoundersMob from '@MainPageComponents/AngelsFoundersMob';
import AngelsFoundersDesk from '@MainPageComponents/AngelsFoundersDesk';

const VeteransSection: FC = () => {
  return (
    <Section id={SectionId.veterans}>
      <SectionTitle text='Тренування для ветеранів' isHidden />

      <ScaleBanner banner={banner} />

      <Container>
        <AngelsFoundersMob />
        <AngelsFoundersDesk />

        <GeneralContainer>
          <DescriptionWrap>
            <Description>
              У співпраці з патронатною службою «Янголи» ми проводимо
              безкоштовні заняття для ветеранів. Це простір підтримки, руху і
              взаємоповаги — без формальностей, без бар’єрів. Місце, де можна
              відновитист, розвантажити голову і просто бути серед своїх.
            </Description>
          </DescriptionWrap>
        </GeneralContainer>
      </Container>
    </Section>
  );
};

export default VeteransSection;
