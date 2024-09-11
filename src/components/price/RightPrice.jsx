import {
  ButtonRightPrice,
  CardRightPrice,
  FooterTextRightPrice,
  InformationRight,
  LineRightPrice,
} from './PriceStyle';

const PriceRightCardData = [
  {
    id: 1,
    icon: 'calendar',
    text: '14 дней в Медине 3 дней и в Мекке 10 дней',
  },
  {
    id: 2,
    icon: 'airplane',
    text: 'Авиаперелет туда и обратно',
  },
  {
    id: 3,
    icon: 'globe',
    text: 'Виза',
  },
  {
    id: 4,
    icon: 'bag-remove',
    text: ' Груз до 30кг',
  },
  {
    id: 5,
    icon: 'bag-check',
    text: 'Ручная кладь до 10кг',
  },
  {
    id: 6,
    icon: 'business',
    text: 'Проживание в отеле ★★★★',
  },
  {
    id: 7,
    icon: 'walk',
    text: 'До мечети Аль-Харам: 900 метров',
  },
  {
    id: 8,
    icon: 'bus',
    text: 'Бесплатные трансферы',
  },
  {
    id: 9,
    icon: 'male',
    text: 'Страховка',
  },
  {
    id: 10,
    icon: 'person',
    text: 'Высококвалифицированный гид',
  },
  {
    id: 11,
    icon: 'shirt',
    text: 'Форма паломника и сумка',
  },
  {
    id: 12,
    icon: 'restaurant',
    text: 'Двухразовое питание + 100$',
  },
];

const RightPrice = () => {
  return (
    <CardRightPrice>
      <div className="ribbon">ВСЕ ВКЛЮЧЕНО</div>
      <h2>СТОИМОСТЬ УМРА</h2>
      <p>Без питание, с питанием +100$</p>
      <h3>
        <span>от </span>900<spa className="dollar">$</spa>
      </h3>
      <h4>на одного человека</h4>
      {PriceRightCardData.map((item) => (
        <InformationRight key={item.id}>
          <div className="papaIconTextRight">
            <div>
              <ion-icon name={item.icon}></ion-icon>
            </div>
            <p>{item.text}</p>
          </div>
          <LineRightPrice></LineRightPrice>
        </InformationRight>
      ))}
      <ButtonRightPrice>ПОДАТЬ ЗАЯВКУ</ButtonRightPrice>
      <FooterTextRightPrice>Внимание! Место ограничено!</FooterTextRightPrice>
    </CardRightPrice>
  );
};

export default RightPrice;
