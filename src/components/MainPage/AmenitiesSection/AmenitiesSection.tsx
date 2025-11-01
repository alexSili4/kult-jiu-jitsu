import GeneralContainer from '@CommonComponents/GeneralContainer';
import { FC, useRef } from 'react';
import {
  Container,
  Content,
  Details,
  Section,
  Text,
  AmenitiesList,
  AmenitiesCard,
  AmenitiesListItem,
  CardText,
  IconWrap,
  AmenitiesAnimatedCard,
  Image,
  ImageWrap,
} from './AmenitiesSection.styled';
import { amenities, SectionId } from '@/constants';
import SectionTitle from '@CommonComponents/SectionTitle';
import { IconType } from 'react-icons';
import { Transition, useInView, VariantLabels, Variants } from 'framer-motion';
import Marquee from 'react-fast-marquee';

interface IAmenitiesListCardProps {
  icon: IconType | null;
  text: string | null;
}

const AmenitiesListCard: FC<IAmenitiesListCardProps> = ({
  icon: Icon,
  text,
}) => {
  const containerRef = useRef(null);

  const inView = useInView(containerRef, { amount: 1 });

  const animate: VariantLabels = inView ? 'visible' : 'hidden';

  const containerVariants: Variants = {
    hidden: {},
    visible: {},
  };

  const transition: Transition = {
    type: 'spring',
    duration: 1,
    bounce: 0.4,
  };

  const itemVariants: Variants = {
    hidden: { y: 60, opacity: 0, transition },
    visible: {
      y: 0,
      opacity: 1,
      transition,
    },
  };

  return (
    <AmenitiesAnimatedCard
      ref={containerRef}
      variants={containerVariants}
      initial='hidden'
      animate={animate}
    >
      <AmenitiesCard variants={itemVariants}>
        {Icon && (
          <IconWrap>
            <Icon size={32} color='#18181C' />
          </IconWrap>
        )}
        {text && <CardText>{text}</CardText>}
      </AmenitiesCard>
    </AmenitiesAnimatedCard>
  );
};

const AmenitiesSection: FC = () => {
  const { list, images } = amenities;

  return (
    <Section id={SectionId.amenities}>
      <Container>
        <GeneralContainer>
          <SectionTitle text='зручності' />
        </GeneralContainer>

        <Content>
          <Marquee>
            {images.map(({ src, alt }) => (
              <ImageWrap key={src}>
                <Image src={src} alt={alt} />
              </ImageWrap>
            ))}
          </Marquee>

          <GeneralContainer>
            <Details>
              <Text>
                Ми створили простір, у якому можна відчути баланс. Комфорт перед
                тренуванням, розмови й сміх після. Ми зробили його простим,
                щирим і своїм.
              </Text>

              <AmenitiesList>
                {list.map(({ icon, text }) => (
                  <AmenitiesListItem key={text}>
                    <AmenitiesListCard icon={icon} text={text} />
                  </AmenitiesListItem>
                ))}
              </AmenitiesList>
            </Details>
          </GeneralContainer>
        </Content>
      </Container>
    </Section>
  );
};

export default AmenitiesSection;
