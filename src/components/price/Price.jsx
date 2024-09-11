import LeftPrice from './LeftPrice';
import {
  BoxContainer,
  Container,
  ContainerContent,
  StyledBox,
  TextContent,
} from './PriceStyle';
import RightPrice from './RightPrice';

const Price = () => {
  return (
    <>
      <Container>
        <StyledBox>
          <BoxContainer>
            <TextContent>
              <h2>УМРА БААСЫ БИШКЕК</h2>
              <p>
                Баасына Бишкек-Джидда-Мадина-Мекке-Бишкек каттамы кирет. Ошондой
                эле Стамбул жана Дубай аркылуу варианттар бар. Учурдагы бааларды
                тактоо үчүн бизге кайрылыңыз.
              </p>
            </TextContent>
            <ContainerContent>
              <LeftPrice />
              <RightPrice />
            </ContainerContent>
          </BoxContainer>
        </StyledBox>
      </Container>
    </>
  );
};

export default Price;
