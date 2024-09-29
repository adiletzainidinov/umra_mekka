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
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

const BoxCardData = [
  { id: 1, text: 'Partner1' },
  { id: 2, text: 'Partner2' },
  { id: 3, text: 'Partner3' },
  { id: 4, text: 'Partner4' },
  { id: 5, text: 'Partner5' },
];

const animation = { duration: 15000, easing: (t) => t };

const Price = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: 'performance',
    drag: false,
    slides: {
      perView: window.innerWidth < 768 ? 1 : window.innerWidth < 1200 ? 3 : 5, 
      spacing: 40, 
    },
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });

  return (
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
          <PartnerBox ref={sliderRef} className="keen-slider">
            {BoxCardData.map((item) => (
              <div className="boxCard keen-slider__slide " key={item.id}>
                {item.text}
              </div>
            ))}
          </PartnerBox>
        </BlueBox>
        <WaveBox />
      </StyledBox>
    </Container>
  );
};

export default Price;
