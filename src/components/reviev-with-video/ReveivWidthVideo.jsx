import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import {
  BoxContainer,
  ButtonStyleVideo,
  CardContainer,
  Container,
  StyledBox,
  TitleRevievVideo,
} from './ReveievWithVideoStyle';

const RevievWithVideoData = [
  {
    id: 1,
    src: 'https://www.youtube.com/embed/tOGSg7OOnHo',
    title: 'Гулумкан апа умра тууралуу кызыктуу окуясы',
  },
  {
    id: 2,
    src: 'https://www.youtube.com/embed/tOGSg7OOnHo',
    title: 'Как умра изменила жизнь Гульнары апа',
  },
  {
    id: 3,
    src: 'https://www.youtube.com/embed/tOGSg7OOnHo',
    title: 'Духовное паломничество Айжамал апа: история умры',
  },
];

const ReveivWidthVideo = () => {
  return (
    <Container>
      <StyledBox>
        <BoxContainer>
          <TitleRevievVideo>
            <h2>Видео Отзывы наших паломников</h2>
          </TitleRevievVideo>
          <CardContainer>
            {RevievWithVideoData.map((item) => (
              <Card key={item.id} sx={{ maxWidth: 345,marginBottom: 4 }}>
                <CardActionArea>
                  <CardMedia
                    component="iframe"
                    height="330"
                    src={item.src}
                    title="green iguana"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.title}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
          </CardContainer>
          <ButtonStyleVideo>Все отзывы</ButtonStyleVideo>

        </BoxContainer>
      </StyledBox>
    </Container>
  );
};

export default ReveivWidthVideo;
