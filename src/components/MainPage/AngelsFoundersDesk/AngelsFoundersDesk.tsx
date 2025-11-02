import { FC, MouseEvent, useRef } from 'react';
import {
  MotionValue,
  SpringOptions,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import { FaInstagram } from 'react-icons/fa';
import { veterans } from '@/constants';
import {
  CardsList,
  Angels,
  AngelsLogo,
  Card,
  CardContainer,
  CardDesc,
  CardDetails,
  CardHeader,
  CardLinks,
  CardName,
  CardText,
  Image,
  Instagram,
  ListItem,
  Accent,
  AzovIcon,
  AzovIconWrap,
  Content,
  Founders,
  Title,
  TitlePart,
} from './AngelsFoundersDesk.styled';

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

  const rotateZ = useTransform(scrollYProgress, [0.35, 0.5], [15, 0]);
  const rotateY = useTransform(scrollYProgress, [0.35, 0.5], [60, 0]);
  const y1 = useTransform(scrollYProgress, [0.35, 0.5], [1100, 0]);
  const y2 = useTransform(scrollYProgress, [0.35, 0.5], [1000, 0]);

  const smoothRotateZ = useSpring(rotateZ, transition);
  const smoothRotateY = useSpring(rotateY, transition);
  const smoothY1 = useSpring(y1, transition);
  const smoothY2 = useSpring(y2, transition);

  const smoothNegativeRotateZ = useTransform(smoothRotateZ, (value) => -value);
  const smoothNegativeRotateY = useTransform(smoothRotateY, (value) => -value);

  const onLinkClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.blur();
  };

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
                        onClick={onLinkClick}
                      >
                        <FaInstagram color='#D9D9D9' size={20} />
                      </Instagram>
                    </ListItem>
                    <ListItem>
                      <Angels
                        href='https://www.azovangels.com/'
                        target='_blank'
                        rel='noopener noreferrer'
                        onClick={onLinkClick}
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

const AngelsFoundersDesk: FC = () => {
  const foundersRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: foundersRef,
    offset: ['start end', 'end start'],
  });

  const transition: SpringOptions = {
    stiffness: 150,
    damping: 100,
    mass: 0.5,
  };

  const x = useTransform(scrollYProgress, [0, 0.5], [400, 0]);

  const smoothX = useSpring(x, transition);

  const smoothNegativeX = useTransform(smoothX, (value) => -value);

  return (
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

        <FoundersCards scrollYProgress={scrollYProgress} />
      </Content>
    </Founders>
  );
};

export default AngelsFoundersDesk;
