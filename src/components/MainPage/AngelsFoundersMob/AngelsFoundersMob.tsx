import { FC, MouseEvent, MouseEventHandler, useRef, useState } from 'react';
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
} from './AngelsFoundersMob.styled';

interface IFoundersCardsProps {
  scrollYProgress: MotionValue<number>;
}

interface IFounderCardProps {
  img: string;
  name: string;
  rotateZ: MotionValue<number>;
  rotateY: MotionValue<number>;
  y: MotionValue<number>;
  instagram: string;
  onLinkClick: MouseEventHandler;
}

const FounderCard: FC<IFounderCardProps> = ({
  img,
  name,
  rotateZ,
  rotateY,
  y,
  instagram,
  onLinkClick,
}) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const onCardClick = () => {
    setIsActive((prevState) => !prevState);
  };

  return (
    <CardContainer style={{ rotateZ, rotateY, y }}>
      <Card isActive={isActive} onClick={onCardClick}>
        <CardDetails isActive={isActive}>
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

        <Image src={img} alt={name} isActive={isActive} />
      </Card>
    </CardContainer>
  );
};

const FoundersCards: FC<IFoundersCardsProps> = ({ scrollYProgress }) => {
  const { founders } = veterans;

  const transition: SpringOptions = {
    stiffness: 150,
    damping: 100,
    mass: 0.5,
  };

  const rotateFirstZ = useTransform(scrollYProgress, [0.3, 0.42], [15, 0]);
  const rotateFirsY = useTransform(scrollYProgress, [0.3, 0.42], [40, 0]);
  const rotateSecondZ = useTransform(scrollYProgress, [0.35, 0.5], [15, 0]);
  const rotateSecondY = useTransform(scrollYProgress, [0.35, 0.5], [40, 0]);
  const y1 = useTransform(scrollYProgress, [0.35, 0.5], [1100, 0]);
  const y2 = useTransform(scrollYProgress, [0.45, 0.5], [1000, 0]);

  const smoothRotateFirstZ = useSpring(rotateFirstZ, transition);
  const smoothRotateFirstY = useSpring(rotateFirsY, transition);
  const smoothRotateSecondZ = useSpring(rotateSecondZ, transition);
  const smoothRotateSecondY = useSpring(rotateSecondY, transition);
  const smoothY1 = useSpring(y1, transition);
  const smoothY2 = useSpring(y2, transition);

  const smoothNegativeRotateZ = useTransform(
    smoothRotateSecondZ,
    (value) => -value
  );
  const smoothNegativeRotateY = useTransform(
    smoothRotateSecondY,
    (value) => -value
  );

  const onLinkClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.blur();
  };

  return (
    <CardsList>
      {founders.map(({ img, instagram, name }, index) => {
        const isFirst = !(index % 2);

        const rotateZ = isFirst ? smoothRotateFirstZ : smoothNegativeRotateZ;
        const rotateY = isFirst ? smoothRotateFirstY : smoothNegativeRotateY;
        const y = isFirst ? smoothY1 : smoothY2;

        return (
          <ListItem key={name}>
            <FounderCard
              img={img}
              instagram={instagram}
              name={name}
              onLinkClick={onLinkClick}
              rotateY={rotateY}
              rotateZ={rotateZ}
              y={y}
            />
          </ListItem>
        );
      })}
    </CardsList>
  );
};

const AngelsFoundersMob: FC = () => {
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

  const x = useTransform(scrollYProgress, [0, 0.4], [400, 0]);

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

export default AngelsFoundersMob;
