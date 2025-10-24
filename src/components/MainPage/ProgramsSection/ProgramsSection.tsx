import GeneralContainer from '@CommonComponents/GeneralContainer';
import { FC, useRef } from 'react';
import {
  Content,
  Row,
  Section,
  EndRow,
  StartRow,
  Program,
  Title,
  Desc,
  List,
  Container,
  Name,
  Symbol,
  TitleWrap,
  DecorativeElement,
  DecorativeElementWrap,
} from './ProgramsSection.styled';
import { programs } from '@/constants';
import SectionTitle from '@/components/common/SectionTitle';
import {
  SpringOptions,
  useInView,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import CustomCursor from '@CommonComponents/CustomCursor';

interface IGroupDescProps {
  desc: string | null;
}

const GroupDesc: FC<IGroupDescProps> = ({ desc }) => {
  return desc && <Desc>{desc}</Desc>;
};

const ProgramsSection: FC = () => {
  const { beginners, basic, events, kids, mixed, personal } = programs;

  const containerRef = useRef<HTMLDivElement>(null);
  const sectionInView = useInView(containerRef);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const transition: SpringOptions = {
    stiffness: 150,
    damping: 12,
    mass: 0.5,
  };

  const rotate = useTransform(scrollYProgress, [0.2, 0.8], [0, 15]);
  const scale = useTransform(scrollYProgress, [0.2, 0.8], [1, 8]);

  const smoothScale = useSpring(scale, transition);
  const smoothRotate = useSpring(rotate, transition);

  return (
    <Section ref={containerRef}>
      <SectionTitle text='Програми занять' isHidden />

      <GeneralContainer>
        <Container>
          <Content>
            <DecorativeElementWrap>
              <DecorativeElement
                style={{
                  scale: smoothScale,
                  rotate: smoothRotate,
                }}
              ></DecorativeElement>
            </DecorativeElementWrap>

            <List>
              <Row>
                <Program>
                  {sectionInView && (
                    <CustomCursor
                      img={beginners.image}
                      height={160}
                      width={160}
                    />
                  )}

                  <Name>{beginners.label}</Name>
                  <GroupDesc desc={beginners.desc} />
                </Program>
                <Program>
                  {sectionInView && (
                    <CustomCursor img={basic.image} width={160} height={200} />
                  )}

                  <Title>{basic.label}</Title>
                  <GroupDesc desc={basic.desc} />
                </Program>
              </Row>
              <Row>
                <Program>
                  {sectionInView && (
                    <CustomCursor img={mixed.image} width={160} height={200} />
                  )}

                  <Name>{mixed.label}</Name>
                  <GroupDesc desc={mixed.desc} />
                </Program>
                <Program>
                  {sectionInView && (
                    <CustomCursor img={kids.image} width={160} height={200} />
                  )}

                  <Name>{kids.label}</Name>
                  <GroupDesc desc={kids.desc} />
                </Program>
              </Row>
              <EndRow>
                <Program>
                  {sectionInView && (
                    <CustomCursor
                      img={personal.image}
                      width={160}
                      height={160}
                    />
                  )}

                  <Name>{personal.label}</Name>
                  <GroupDesc desc={personal.desc} />
                </Program>
              </EndRow>
              <StartRow>
                <Program>
                  {sectionInView && (
                    <CustomCursor img={events.image} width={192} height={200} />
                  )}

                  <Name>{events.label}</Name>
                  <GroupDesc desc={events.desc} />
                </Program>
              </StartRow>
            </List>

            <TitleWrap>
              <Symbol></Symbol>
              <Title>[Програми занять)</Title>
            </TitleWrap>
          </Content>
        </Container>
      </GeneralContainer>
    </Section>
  );
};

export default ProgramsSection;
