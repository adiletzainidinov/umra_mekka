import LeftPrice from './LeftPrice';
import {
  BlueBox,
  BoxContainer,
  Container,
  ContainerContent,
  PartnerBox,
  StyledBox,
  TextContent,
  WaveBox,
} from './PriceStyle';
import RightPrice from './RightPrice';

const BoxCardData = [
  { id: 1, text: 'Partner' },
  { id: 1, text: 'Partner' },
  { id: 1, text: 'Partner' },
  { id: 1, text: 'Partner' },
  { id: 1, text: 'Partner' },
];

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

          <BlueBox>
            <h2>НАШИ ПАРТНЕРЫ</h2>
            <PartnerBox>
              {BoxCardData.map((item) => (
                <div className="boxCard" key={item.id}>
                  {item.text}
                </div>
              ))}
            </PartnerBox>
          </BlueBox>
          <WaveBox />
        </StyledBox>
      </Container>
    </>
  );
};

export default Price;
