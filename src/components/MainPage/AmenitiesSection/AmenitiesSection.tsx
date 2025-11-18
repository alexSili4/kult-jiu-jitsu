import GeneralContainer from '@CommonComponents/GeneralContainer';
import { FC, useRef } from 'react';
import {
  Container,
  Content,
  Details,
  Section,
  Text,
  AmenitiesCard,
  AmenitiesListItem,
  CardText,
  IconWrap,
  AmenitiesAnimatedCard,
  Image,
  ImageWrap,
  AmenitiesListDesk,
  AmenitiesListMob,
  Message,
  Hand,
  AdditionalText,
  DetailsWrap,
} from './AmenitiesSection.styled';
import { amenities, SectionId } from '@/constants';
import SectionTitle from '@CommonComponents/SectionTitle';
import { IconType } from 'react-icons';
import { Transition, useInView, VariantLabels, Variants } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';

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

  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      dragFree: true,
      containScroll: false,
    },
    [
      AutoScroll({
        speed: 1,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ]
  );

  return (
    <Section id={SectionId.amenities}>
      <Container>
        <GeneralContainer>
          <SectionTitle text='зручності' />
        </GeneralContainer>

        <Content>
          <div
            ref={emblaRef}
            style={{
              overflow: 'hidden',
              cursor: 'grab',
            }}
          >
            <div style={{ display: 'flex' }}>
              {[...images, ...images].map(({ src, alt }, index) => (
                <div key={index} style={{ flex: '0 0 auto' }}>
                  <ImageWrap>
                    <Image src={src} alt={alt} draggable={false} />
                  </ImageWrap>
                </div>
              ))}
            </div>
          </div>

          <GeneralContainer>
            <DetailsWrap>
              <Details>
                <Text>
                  Ми створили простір, у якому можна відчути баланс. Комфорт
                  перед тренуванням, розмови й сміх після. Ми зробили його
                  простим, щирим і своїм.
                </Text>

                <AmenitiesListMob>
                  {list.mob.map(({ icon, text }) => (
                    <AmenitiesListItem key={text}>
                      <AmenitiesListCard icon={icon} text={text} />
                    </AmenitiesListItem>
                  ))}
                </AmenitiesListMob>
                <AmenitiesListDesk>
                  {list.desk.map(({ icon, text }) => (
                    <AmenitiesListItem key={text}>
                      <AmenitiesListCard icon={icon} text={text} />
                    </AmenitiesListItem>
                  ))}
                </AmenitiesListDesk>
              </Details>
              <AdditionalText>
                Ще є наш Двіж-двір <Hand />. Місце куди можна зайти просто
                поговорити, пограти в теніс або потрапити на тематичний вечір{' '}
                <Message />. Це продовження залу, тільки без правил і графіка.
              </AdditionalText>
            </DetailsWrap>
          </GeneralContainer>
        </Content>
      </Container>
    </Section>
  );
};

export default AmenitiesSection;
