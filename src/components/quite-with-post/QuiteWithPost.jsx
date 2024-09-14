import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import Button from '../../shared/UI/button/Button';

const QuoteContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'linear-gradient(180deg, #1d1f47 0%, #0c625d 100%)',
  padding: '40px',
  borderRadius: '10px',
  color: 'white',
  textAlign: 'center',
  margin: '20px',
  fontFamily: 'Arial, sans-serif',
}));

const shareToInstagram = () => {
  const imageUrl = 'https://example.com/image-to-share.jpg'; // URL изображения

  // Попробуем открыть через URI схему Instagram
  const instagramUri = `instagram://story-camera?background=${encodeURIComponent(imageUrl)}`;

  // Проверим, если это мобильное устройство
  if (/Android|iPhone|iPad/i.test(navigator.userAgent)) {
    // Откроем URI схему
    window.location.href = instagramUri;

    // Если Instagram не установлен, попробуем открыть через веб-версию
    setTimeout(() => {
      window.location.href = `https://www.instagram.com/stories/share/?file=${encodeURIComponent(imageUrl)}`;
    }, 500);
  } else {
    alert('Поделиться в Instagram можно только с мобильного устройства.');
  }
};

const QuiteWithPost = () => {
  return (
    <QuoteContainer>
      <Typography variant="h6" component="p" gutterBottom>
        Сообщается, что Аиша однажды спросила у пророка Мухаммада ﷺ: «О посланник Всевышнего, возложен ли на женщин джихад?», 
        на что он ﷺ (да благословит его Аллах и приветствует) ответил: «Их джихад — совершение Хаджа и Умры».
      </Typography>
      <Typography variant="subtitle1" component="span" color="#7ad5ab">
        (Ибн Маджа)
      </Typography>
      <Button onClick={shareToInstagram}>
        Поделиться в Instagram Stories
      </Button>
    </QuoteContainer>
  );
};

export default QuiteWithPost;
