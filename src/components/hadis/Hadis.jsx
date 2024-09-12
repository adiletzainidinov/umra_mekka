import {
  Container,
  StyledBox,
  Overlay,
  Background,
  TextContainer,
} from './HadisStyle';

const Hadis = () => {
  return (
    <Container>
      <StyledBox>
        <Background />
        <Overlay />
        <TextContainer>
          <p className="tirmizi">Тирмизи, Насаи</p>
          <h1>
            «Чередуйте между хаджем и умрой, так как это защищает от бедности и
            грехов»
          </h1>
        </TextContainer>
      </StyledBox>
    </Container>
  );
};

export default Hadis;
