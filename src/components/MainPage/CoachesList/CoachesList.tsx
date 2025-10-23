import { FC, useEffect, useState } from 'react';
import { coaches } from '@/constants';
import {
  CoachInfo,
  CoachDesc,
  CoachDescItem,
  DescText,
  DescTitle,
  CoachName,
  Desc,
  Name,
  Container,
  NameWrap,
  SymbolsWrap,
  Symbol,
  Image,
  CardBtn,
  CardWrapper,
} from './CoachesList.styled';
import { MotionValue, SpringOptions, useTransform } from 'framer-motion';
import { useSpring } from 'framer-motion';

interface ICoachesListProps {
  scrollYProgress: MotionValue<number>;
}

interface ICoachCardProps {
  scaleStart: number;
  scaleEnd: number;
  start: number;
  rotateEnd: number;
  img: string;
  name: string;
  scrollYProgress: MotionValue<number>;
}

const CoachCard: FC<ICoachCardProps> = ({
  scaleStart,
  scaleEnd,
  start,
  rotateEnd,
  img,
  name,
  scrollYProgress,
}) => {
  const rotate = useTransform(
    scrollYProgress,
    [start, rotateEnd, scaleStart, scaleEnd],
    [-45, 0, 0, 15]
  );

  const y = useTransform(scrollYProgress, [start, rotateEnd], [1000, 0]);

  const scale = useTransform(scrollYProgress, [scaleStart, scaleEnd], [1, 0.5]);

  const transition: SpringOptions = {
    stiffness: 150,
    damping: 12,
    mass: 0.5,
  };

  const smoothScale = useSpring(scale, transition);

  const smoothY = useSpring(y, transition);

  const smoothRotate = useSpring(rotate, transition);

  return (
    <CardWrapper
      style={{
        y: smoothY,
        scale: smoothScale,
        rotate: smoothRotate,
      }}
    >
      <CardBtn>
        <Image src={img} alt={name} />
      </CardBtn>
    </CardWrapper>
  );
};

const CoachesList: FC<ICoachesListProps> = ({ scrollYProgress }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      const offset = 0.15; // початок після 15% скролу
      const clamped = Math.max(0, latest - offset) / (1 - offset);
      const index = Math.min(
        coaches.length - 1,
        Math.floor(clamped * coaches.length)
      );
      setCurrentIndex(index);
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  const coach = coaches[currentIndex];

  const coachesData = Object.values(coaches);

  return (
    <Container>
      <CoachInfo>
        <CoachDesc>
          <CoachDescItem>
            <DescText>{coach.qualification}</DescText>
            <DescTitle>Кваліфікація</DescTitle>
          </CoachDescItem>
          <CoachDescItem>
            <DescText>{coach.experience}</DescText>
            <DescTitle>Досвід</DescTitle>
          </CoachDescItem>
          <CoachDescItem>
            <DescText>{coach.groups}</DescText>
            <DescTitle>Групи</DescTitle>
          </CoachDescItem>
        </CoachDesc>

        <CoachName>
          <NameWrap>
            <Name>{coach.name}</Name>

            <SymbolsWrap>
              <Symbol></Symbol>
              <Symbol></Symbol>
            </SymbolsWrap>
          </NameWrap>
          <Desc>{coach.desc}</Desc>
        </CoachName>
      </CoachInfo>

      {coachesData.map(({ img, name }, index) => {
        const start = index * 0.25;
        const rotateEnd = start + 0.25;
        const scaleStart = rotateEnd + 0.17;
        const scaleEnd = scaleStart + 0.25;

        return (
          <CoachCard
            key={name}
            rotateEnd={rotateEnd}
            scaleEnd={scaleEnd}
            scaleStart={scaleStart}
            start={start}
            img={img}
            name={name}
            scrollYProgress={scrollYProgress}
          />
        );
      })}
    </Container>
  );
};

export default CoachesList;
