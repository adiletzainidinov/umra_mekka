import { Box, Typography, Link, Container, Grid } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import { ContainerFooter, StyledBox } from './footerStyle';
import { Telegram, WhatsApp, YouTube } from '@mui/icons-material';

const Footer = () => {
  return (
    <ContainerFooter>
      <StyledBox>
        <Box
          component="footer"
          sx={{
            py: 4,
            px: 2,
            mt: 'auto',
            backgroundColor: '#3d51f4',
            borderTop: '1px solid #ddd',
            color: 'white',
          }}
        >
          <Container maxWidth="lg">
            <Grid container spacing={4} justifyContent="space-between">
              <Grid item xs={12} md={6}>
                <Typography variant="h6" gutterBottom>
                  О компании
                </Typography>
                <Typography variant="body2" color="white">
                  Мы предоставляем лучшие услуги для организации умры, помогая
                  паломникам сделать их путешествие незабываемым.
                </Typography>
              </Grid>

              <Grid item xs={12} md={3}>
                <Typography variant="h6" gutterBottom>
                  Полезные ссылки
                </Typography>
                <Link href="#" color="inherit" variant="body2">
                  Главная
                </Link>
                <br />
                <Link href="#" color="inherit" variant="body2">
                  О нас
                </Link>
                <br />
                <Link href="#" color="inherit" variant="body2">
                  Контакты
                </Link>
              </Grid>

              <Grid item xs={12} md={3}>
                <Typography variant="h6" gutterBottom>
                  Следите за нами
                </Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <Link href="#" color="inherit">
                    <YouTube />
                  </Link>
                  <Link href="#" color="inherit">
                    <WhatsApp />
                  </Link>
                  <Link href="#" color="inherit">
                    <InstagramIcon />
                  </Link>
                  <Link href="#" color="inherit">
                    <Telegram />
                  </Link>
                </Box>
              </Grid>
            </Grid>

            <Box mt={4} textAlign="center">
              <Typography variant="body2" color="white">
                &copy; {new Date().getFullYear()} Сайт создал Адилет{' '}
                <Link href="https://t.me/Makka567" color="inherit">
                  <Telegram sx={{ position: 'relative', top: 7}} />
                </Link>
              </Typography>
            </Box>
          </Container>
        </Box>
      </StyledBox>
    </ContainerFooter>
  );
};

export default Footer;
