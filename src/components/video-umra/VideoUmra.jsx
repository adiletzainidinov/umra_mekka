import { Container, StyledBox, Overlay, Background, TextContainer } from './VideoUmraStyle';

const VideoUmra = () => {
  return (
    <Container>
      <StyledBox>
        <Background />
        <Overlay />
        <TextContainer>
          <h1>Посланник Аллаха ﷺ (мир <span className='world'>ему</span> и благословение) сказал:</h1>
          <p>
            «Когда наступит Рамадан, соверши умру, воистину умра в этот месяц
            равняется хаджу»
          </p>
          <p className='tirmizi'>Имам ат-Тирмизи</p>
        </TextContainer>
      </StyledBox>
    </Container>
  );
};

export default VideoUmra;
