import { DaySwitch } from '../../components/DaySwitch';
import { DayDashboard } from '../../components/DayDashboard';
import {
  DiaryConteiner,
  InfoContainer,
  ProdAndExercise,
  TitleAndSwitch,
} from './DiaryPage.styled';
import { Container } from '../../styles/GlobalStyles';

const DiaryPage = () => {
  return (
    <Container>
      <DiaryConteiner>
        <TitleAndSwitch>
          <DaySwitch />
        </TitleAndSwitch>
        <InfoContainer>
          <DayDashboard />
          <ProdAndExercise></ProdAndExercise>
        </InfoContainer>
      </DiaryConteiner>
    </Container>
  );
};

export default DiaryPage;