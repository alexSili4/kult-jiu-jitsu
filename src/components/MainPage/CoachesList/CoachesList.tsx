import { FC, useEffect, useRef, useState } from 'react';
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
  CardBtn,
  CardWrapper,
  StyledVideo,
  Video,
} from './CoachesList.styled';
import {
  MotionValue,
  SpringOptions,
  Transition,
  useInView,
  useTransform,
  VariantLabels,
  Variants,
} from 'framer-motion';
import { useSpring } from 'framer-motion';

interface ICoachesListProps {
  scrollYProgress: MotionValue<number>;
}

interface ICoachCardProps {
  scaleStart: number;
  scaleEnd: number;
  start: number;
  rotateEnd: number;
  video: string;
  scrollYProgress: MotionValue<number>;
}

const CoachCard: FC<ICoachCardProps> = ({
  scaleStart,
  scaleEnd,
  start,
  rotateEnd,
  scrollYProgress,
  video,
}) => {
  const [isActive, setIsActive] = useState(false);

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
  const smoothRotate = useSpring(rotate, transition);
  const smoothY = useSpring(y, transition);

  return (
    <CardWrapper
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      onFocus={() => setIsActive(true)}
      onBlur={() => setIsActive(false)}
      style={{
        y: smoothY,
        scale: smoothScale,
        rotate: smoothRotate,
      }}
    >
      <CardBtn tabIndex={0}>
        <Video>
          <StyledVideo
            src={video}
            muted
            playsInline
            loop
            ref={(el) => {
              if (el) {
                if (isActive) {
                  el.play().catch(() => {});
                } else {
                  el.pause();
                  el.currentTime = 0;
                }
              }
            }}
          />
        </Video>
      </CardBtn>
    </CardWrapper>
  );
};

const CoachesList: FC<ICoachesListProps> = ({ scrollYProgress }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
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

  const descVariants: Variants = {
    hidden: { x: '-20vw', transition },
    visible: {
      x: 0,
      transition,
    },
  };

  const nameVariants: Variants = {
    hidden: { x: '30vw', transition },
    visible: {
      x: 0,
      transition,
    },
  };

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
    <Container
      ref={containerRef}
      variants={containerVariants}
      initial='hidden'
      animate={animate}
    >
      <CoachInfo>
        <CoachDesc variants={descVariants}>
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

        <CoachName variants={nameVariants}>
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

      {coachesData.map(({ name, video }, index) => {
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
            scrollYProgress={scrollYProgress}
            video={video}
          />
        );
      })}
    </Container>
  );
};

export default CoachesList;
