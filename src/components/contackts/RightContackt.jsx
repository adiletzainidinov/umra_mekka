import {
  ContacktsRightBox,
  SossialMediaBox,
  SossialMediaButton,
} from './ContacktsStyle';
import telegramIcon from '../../assets/images/telegramIconSecond.png';

const sossialMediaData = [
  { id: 1, logo: 'logo-instagram' },
  { id: 2, logo: 'logo-whatsapp' },
  { id: 3, logo: 'logo-youtube' },
];

const RightContackt = () => {
  return (
    <>
      <ContacktsRightBox>
        <SossialMediaBox>
          {sossialMediaData.map((item) => (
            <p key={item.id}>
              <ion-icon name={item.logo}></ion-icon>
            </p>
          ))}
        </SossialMediaBox>
        <SossialMediaButton>
          <p>Будьте в курсе новых умра туров</p>{' '}
          <img
            style={{ width: 25, height: 25, marginLeft: 10 }}
            src={telegramIcon}
            alt="telegramIcon"
          />
        </SossialMediaButton>
      </ContacktsRightBox>
    </>
  );
};

export default RightContackt;
