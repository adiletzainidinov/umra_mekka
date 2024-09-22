import { useState } from 'react';
import {
  BoxContainer,
  Container,
  StyledBox,
  ReviewsFromЗilgrims,
  RevievCard,
  AboutNameReviev,
  RealReviev,
  DateAndRead,
  ReviewPapa,
  ButtonStyle,
} from './ReviewStyle';

const ReviewData = [
  {
    id: 1,
    name: 'Бахтияр Каратай-Оглу Самедов',
    img: 'https://i.pinimg.com/564x/37/d1/91/37d191df740d6260664ad945ab2d88da.jpg',
    raiting: '10/10',
    review: `АССАЛМУ АЛЕЙКУМ ДОРОГИЕ БРАТЬЯ И СЁСТРЫ! ПОЗДРАВЛЯЮ ВСЕХ ПАЛОМНИКОВ "UMMA TUR" 2024 ГОДА С СОВЕРШЕНИЕМ ХАДЖА! Пусть Аллах примет ваши молитвы и сделает этот Хадж причиной вашего прощения! Да благословит вас Всевышний!`,
    date: '5 августа 2024',
    BackgroundColor: '#f3ffc6',
  },
  {
    id: 2,
    name: 'Гюзель Гатина',
    img: 'https://i.pinimg.com/564x/67/d2/93/67d293abfd027d227b8f8dc5e4bcb56b.jpg',
    raiting: '9/10',
    review: `Ас-саляму алейкум!!! По воле Всевышнего Аллаha, Альхамдулилляh, совершила хадж, пусть Аллаh примет его. Но, здесь хочу остановиться про UMMA TOUR, моя`,
    date: '10 августа 2024',
    BackgroundColor: '#fac8cd',
  },
  // {
  //   id: 3,
  //   name: 'Гюзель Гатина',
  //   img: 'https://i.pinimg.com/564x/37/d1/91/37d191df740d6260664ad945ab2d88da.jpg',
  //   raiting: '10/10',
  //   review: `Ассалям алейкум! В этом году мы с супругом совершили свой первый Хадж. Самую главную поездку нашей жизни мы доверили Умма Тур и не ошиблись. Выбирали из`,
  //   date: '5 августа 2024',
  //   BackgroundColor: '#9cffd9',
  // },
  // {
  //   id: 4,
  //   name: 'Гюзель Гатина',
  //   img: 'https://i.pinimg.com/564x/67/d2/93/67d293abfd027d227b8f8dc5e4bcb56b.jpg',
  //   raiting: '9/10',
  //   review: `Умма тур - это лучшее что есть на российском рынке. Есть с чем сравнить(3-й хадж и все поездки с разными операторами) Не пожалел ни на минуту! Всем`,
  //   date: '10 августа 2024',
  //   BackgroundColor: '#68c5db',
  // },
  // {
  //   id: 5,
  //   name: 'Гюзель Гатина',
  //   img: 'https://i.pinimg.com/564x/37/d1/91/37d191df740d6260664ad945ab2d88da.jpg',
  //   raiting: '10/10',
  //   review: `Ассаляму алейкум. Хочу оставить свой отзыв, ведь многие также как я выбирают и сравнивают цены, условия, надежность компании. Умматур сделала абсолютно...`,
  //   date: '5 августа 2024',
  //   BackgroundColor: '#b9caff',
  // },
  // {
  //   id: 6,
  //   name: 'Гюзель Гатина',
  //   img: 'https://i.pinimg.com/564x/67/d2/93/67d293abfd027d227b8f8dc5e4bcb56b.jpg',
  //   raiting: '9/10',
  //   review: `Ассаламу алейкум. Хвала Всевышнему выбрала вас после истихара намаза. Хочу поблагодарить вашу турфирму за прекрасно проведенный Хадж. Благодарю за...`,
  //   date: '10 августа 2024',
  //   BackgroundColor: '#d7ffab',
  // },
];

const Review = () => {
  const [expandedReviews, setExpandedReviews] = useState({});
  const maxTextLength = 120;

  const handleToggleExpand = (id) => {
    setExpandedReviews((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <Container>
      <StyledBox>
        <BoxContainer>
          <ReviewsFromЗilgrims>Отзывы наших паломников</ReviewsFromЗilgrims>

          <ReviewPapa>
            {ReviewData.map((review) => {
              const isExpanded = expandedReviews[review.id];
              const displayedText = isExpanded
                ? review.review
                : `${review.review.slice(0, maxTextLength)}${
                    review.review.length > maxTextLength ? '...' : ''
                  }`;

              return (
                <RevievCard
                  key={review.id}
                  BackgroundColor={review.BackgroundColor}
                >
                  <AboutNameReviev>
                    <img src={review.img} alt="Отзыв паломника" />
                    <p>{review.name}</p>
                    <div className="raiting">{review.raiting}</div>
                  </AboutNameReviev>

                  <RealReviev>
                    <p>{displayedText}</p>
                  </RealReviev>

                  <DateAndRead onClick={() => handleToggleExpand(review.id)}>
                    <h2>{review.date}</h2>
                    <div className="icon">
                      <ion-icon name="chevron-forward-outline"></ion-icon>
                    </div>
                  </DateAndRead>
                </RevievCard>
              );
            })}
          </ReviewPapa>
          <ButtonStyle>Все отзывы</ButtonStyle>
        </BoxContainer>
      </StyledBox>
    </Container>
  );
};

export default Review;
