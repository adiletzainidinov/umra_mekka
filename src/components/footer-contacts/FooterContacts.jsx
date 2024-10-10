import {
  BoxContainer,
  ButtonStyle,
  Container,
  FooterFlex,
  LeftContactsFooter,
  PapaLeftRightFooter,
  StyledBox,
} from './FooterContactsStyle';
import TelegramIconSecond from '../../assets/images/telegramIconSecond.png';

const FooterContactsData = [
  {
    id: 1,
    number: '+ 996 999 99 99 99',
    icon: 'logo-whatsapp',
    write: 'НАПИСАТЬ WHATSAPP',
  },
  {
    id: 2,
    number: '+ 996 999 99 99 99',
    telegram: TelegramIconSecond,
    write: 'НАПИСАТЬ TELEGRAM',
  },
];

const FooterContacts = () => {
  return (
    <Container>
      <StyledBox>
        <BoxContainer>
          <h2>Контакты</h2>
          <PapaLeftRightFooter>
            {FooterContactsData.map((item) => (
              <LeftContactsFooter key={item.id}>
                <FooterFlex>
                  <p className='call-out'>
                    <span className="call">
                      <ion-icon name="call-outline"></ion-icon>
                    </span>
                    {item.number}
                  </p>
                  <ButtonStyle>
                    <div className="or">
                      <p>ИЛИ</p>
                    </div>
                    {item.write}
                    <p className="whatsapp">
                      {item.icon && <ion-icon name={item.icon}></ion-icon>}
                      {item.telegram && (
                        <img
                          className="telegram"
                          src={item.telegram}
                          alt="telegram"
                        />
                      )}
                    </p>
                  </ButtonStyle>
                </FooterFlex>
              </LeftContactsFooter>
            ))}
          </PapaLeftRightFooter>
        </BoxContainer>
      </StyledBox>
    </Container>
  );
};

export default FooterContacts;
