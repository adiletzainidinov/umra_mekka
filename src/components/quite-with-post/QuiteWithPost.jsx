import { Container, Typography } from '@mui/material';
import Button from '../../shared/UI/button/Button';
import { QuoteContainer, StyledBox } from './QuiteWithPostStyle';

const shareToTelegram = (message) => {
  const telegramUrl = `https://t.me/share/url?url=&text=${encodeURIComponent(
    message
  )}`;

  window.open(telegramUrl, '_blank');
};

const QuiteWithPost = () => {
  const message = `Сообщается, что Аиша однажды спросила у пророка Мухаммада ﷺ: «О посланник Всевышнего, возложен ли на женщин джихад?», 
        на что он ﷺ (да благословит его Аллах и приветствует) ответил: «Их джихад — совершение Хаджа и Умры».`;

  return (
    <Container>
      <StyledBox>
        <QuoteContainer>
          <div className="text">{message}</div>
          <Typography
            variant="subtitle1"
            component="span"
            color="#7ad5ab"
            style={{ marginBottom: 35 }}
          >
            (Ибн Маджа)
          </Typography>
          <Button onClick={() => shareToTelegram(message)}>
            Поделиться в Telegram
          </Button>
        </QuoteContainer>
      </StyledBox>
    </Container>
  );
};

export default QuiteWithPost;
