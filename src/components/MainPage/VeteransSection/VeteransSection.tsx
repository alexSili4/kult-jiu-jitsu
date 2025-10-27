import GeneralContainer from '@CommonComponents/GeneralContainer';
import { FC, useRef } from 'react';
import {
  Section,
  AzovIcon,
  AzovIconWrap,
  Banner,
  BannerWrap,
  Container,
  Content,
  Title,
  TitlePart,
  Accent,
  Founders,
  Card,
  CardContainer,
  CardDetails,
  CardsList,
  Image,
  ListItem,
  Angels,
  AngelsLogo,
  CardDesc,
  CardHeader,
  CardLinks,
  CardName,
  CardText,
  Instagram,
  Description,
  DescriptionWrap,
} from './VeteransSection.styled';
import SectionTitle from '@/components/common/SectionTitle';
import banner from '@/images/veterans/banner.jpg';
import {
  MotionValue,
  SpringOptions,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import { veterans } from '@/constants';
import { FaInstagram } from 'react-icons/fa';

interface IFoundersCardsProps {
  scrollYProgress: MotionValue<number>;
}

const FoundersCards: FC<IFoundersCardsProps> = ({ scrollYProgress }) => {
  const { founders } = veterans;

  const transition: SpringOptions = {
    stiffness: 150,
    damping: 100,
    mass: 0.5,
  };

  const rotateZ = useTransform(scrollYProgress, [0, 0.5], [15, 0]);
  const rotateY = useTransform(scrollYProgress, [0, 0.5], [60, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.5], [1100, 0]);
  const y2 = useTransform(scrollYProgress, [0, 0.5], [1000, 0]);

  const smoothRotateZ = useSpring(rotateZ, transition);
  const smoothRotateY = useSpring(rotateY, transition);
  const smoothY1 = useSpring(y1, transition);
  const smoothY2 = useSpring(y2, transition);

  const smoothNegativeRotateZ = useTransform(smoothRotateZ, (value) => -value);
  const smoothNegativeRotateY = useTransform(smoothRotateY, (value) => -value);

  return (
    <CardsList>
      {founders.map(({ img, instagram, name }, index) => {
        const isFirst = !(index % 2);

        const rotateZ = isFirst ? smoothNegativeRotateZ : smoothRotateZ;
        const rotateY = isFirst ? smoothNegativeRotateY : smoothRotateY;
        const y = isFirst ? smoothY1 : smoothY2;

        return (
          <ListItem key={name}>
            <CardContainer style={{ rotateZ, rotateY, y }}>
              <Card>
                <CardDetails>
                  <CardHeader>
                    <CardName>{name}</CardName>
                    <CardDesc>
                      Засновник першої в Україні Патронатної служби Янголи
                    </CardDesc>
                  </CardHeader>

                  <CardText>
                    Trust is the cornerstone of Airbnb's community, and identity
                    verfication is part of how we build it.
                  </CardText>

                  <CardLinks>
                    <ListItem>
                      <Instagram
                        href={instagram}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <FaInstagram color='#D9D9D9' size={20} />
                      </Instagram>
                    </ListItem>
                    <ListItem>
                      <Angels
                        href='https://www.azovangels.com/'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <AngelsLogo />
                      </Angels>
                    </ListItem>
                  </CardLinks>
                </CardDetails>

                <Image src={img} alt={name} />
              </Card>
            </CardContainer>
          </ListItem>
        );
      })}
    </CardsList>
  );
};

const VeteransSection: FC = () => {
  const bannerRef = useRef<HTMLDivElement>(null);
  const foundersRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: bannerScrollYProgress } = useScroll({
    target: bannerRef,
    offset: ['start end', 'end start'],
  });
  const { scrollYProgress: foundersScrollYProgress } = useScroll({
    target: foundersRef,
    offset: ['start end', 'end start'],
  });

  const transition: SpringOptions = {
    stiffness: 150,
    damping: 100,
    mass: 0.5,
  };

  const scale = useTransform(bannerScrollYProgress, [0, 1], [1.5, 1]);
  const x = useTransform(foundersScrollYProgress, [0, 0.8], [400, 0]);

  const smoothScale = useSpring(scale, transition);
  const smoothX = useSpring(x, transition);

  const smoothNegativeX = useTransform(smoothX, (value) => -value);

  return (
    <Section>
      <SectionTitle text='Тренування для ветеранів' isHidden />

      <BannerWrap ref={bannerRef}>
        <Banner src={banner} alt='Банер' style={{ scale: smoothScale }} />
      </BannerWrap>

      <Container>
        <GeneralContainer>
          <Founders ref={foundersRef}>
            <Content>
              <Title>
                <TitlePart style={{ x: smoothX }}>
                  <AzovIconWrap>
                    <AzovIcon />
                  </AzovIconWrap>
                  <span>Безкоштовні</span>
                </TitlePart>
                <TitlePart style={{ x: smoothNegativeX }}>
                  <span>тренування</span>
                  <Accent>для</Accent>
                </TitlePart>
                <TitlePart style={{ x: smoothX }}>ветеранів</TitlePart>
              </Title>

              <FoundersCards scrollYProgress={foundersScrollYProgress} />
            </Content>
          </Founders>

          <DescriptionWrap>
            <Description>
              У співпраці з патронатною службою «Янголи» ми проводимо
              безкоштовні заняття для ветеранів. Це простір підтримки, руху і
              взаємоповаги — без формальностей, без бар’єрів. Місце, де можна
              відновити тіло, розвантажити голову і просто бути серед своїх.
            </Description>
          </DescriptionWrap>
        </GeneralContainer>
      </Container>
    </Section>
  );
};

export default VeteransSection;
