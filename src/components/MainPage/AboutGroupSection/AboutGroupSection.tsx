import { FC } from 'react';
import SectionTitle from '@CommonComponents/SectionTitle';
import { IAboutGroup } from '@/types/aboutGroups';
import {
  Banner,
  BannerWrap,
  Container,
  Section,
  Content,
  Details,
  AboutText,
  About,
  AboutListItem,
  AboutCard,
  Desc,
  IconWrap,
  Category,
  Subtitle,
  List,
  ListItem,
  TextWithSymbol,
  Text,
  Levels,
  Title,
} from './AboutGroupSection.styled';
import GeneralContainer from '@CommonComponents/GeneralContainer';
import SectionLabel from '@/components/common/SectionLabel';

interface IAboutGroupSectionProps {
  group: IAboutGroup;
}

const AboutGroupSection: FC<IAboutGroupSectionProps> = ({ group }) => {
  const { about, banner, goals, levels, text, title } = group;

  return (
    <Section>
      <SectionTitle text='Про програму' isHidden />

      <BannerWrap>
        <Banner src={banner} alt='Банер' />
        <Title>{title}</Title>
      </BannerWrap>

      <Container>
        <GeneralContainer>
          <Content>
            <SectionLabel text='Про програму' />
            <Details>
              <AboutText>{text}</AboutText>

              <About>
                {about.map(({ icon: Icon, text }) => (
                  <AboutListItem key={text}>
                    <AboutCard>
                      <IconWrap>
                        <Icon />
                      </IconWrap>
                      <Desc>{text}</Desc>
                    </AboutCard>
                  </AboutListItem>
                ))}
              </About>

              <Category>
                <Subtitle>Цілі програми</Subtitle>
                <List>
                  {goals.map((goal) => (
                    <ListItem key={goal}>
                      <TextWithSymbol>{goal}</TextWithSymbol>
                    </ListItem>
                  ))}
                </List>
              </Category>

              <Category>
                <Subtitle>Цілі програми</Subtitle>

                <Levels>
                  <Text>
                    Програма поділена на два рівні. Перехід учнів на другий
                    рівень здійснюється інструкторами залежно від навичок і
                    здатності зосереджуватися під час занять.
                  </Text>
                  <List>
                    {levels.map((level, index) => (
                      <ListItem key={level}>
                        <TextWithSymbol>
                          {`${String(index + 1).padStart(2, '0')} ${level}`}
                        </TextWithSymbol>
                      </ListItem>
                    ))}
                  </List>
                </Levels>
              </Category>
            </Details>
          </Content>
        </GeneralContainer>
      </Container>
    </Section>
  );
};

export default AboutGroupSection;
