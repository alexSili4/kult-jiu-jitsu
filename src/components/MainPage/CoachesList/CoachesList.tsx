import { FC, useState } from 'react';
import { coaches } from '@/constants';
import { ICoach } from '@/types/coaches';
import {
  CoachInfo,
  CoachDesc,
  CoachDescItem,
  DescText,
  DescTitle,
  CoachName,
  Desc,
  Name,
  Card,
  Container,
} from './CoachesList.styled';

const CoachesList: FC = () => {
  const [coach, setCoach] = useState<ICoach>(() => coaches[0]);

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
          <Name>{coach.name}</Name>
          <Desc>{coach.desc}</Desc>
        </CoachName>
      </CoachInfo>

      <Card />
    </Container>
  );
};

export default CoachesList;
