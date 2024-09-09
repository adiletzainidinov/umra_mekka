import { styled } from '@mui/material';
import { RightContainer } from './home';
import mekkeImg from '../../assets/images/mekke.jpg';
import mekkeImgGorod from '../../assets/images/1.jpg';

// Контейнер для 3D-эффекта
const Img3DContainer = styled('div')(() => ({
  display: 'flex',
  gap: '20px', // Расстояние между изображениями
  perspective: '1500px',
}));

const Img3DWrapper = styled('div')(() => ({
  position: 'relative',
  width: '400px',
  height: 'auto',
  transformStyle: 'preserve-3d',
  transition: 'transform 0.5s ease-out',
  '&:hover': {
    transform: 'rotateX(20deg) rotateY(-20deg)',
  },
}));

const Img3D = styled('img')(() => ({
  position: 'relative',
  width: '100%',
  height: '100%',
  maxHeight: 300,
  transform: 'rotateX(5deg) rotateY(-5deg)',
  boxShadow: '0 30px 60px rgba(0, 0, 0, 0.4)',
  borderRadius: '20px',
  zIndex: '2',
  transition: 'transform 0.5s ease, box-shadow 0.5s ease',

  '&:hover': {
    transform: 'rotateX(0deg) rotateY(0deg) scale(1.1)',
    boxShadow: '0 50px 90px rgba(0, 0, 0, 0.6)',
  },
}));

const FloatingDecor = styled('div')(() => ({
  position: 'absolute',
  top: '5%',
  left: '85%',
  width: '120px',
  height: '120px',
  background: 'radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, rgba(0, 0, 0, 0) 80%)',
  borderRadius: '50%',
  boxShadow: '0 20px 50px rgba(255, 255, 255, 0.7)',
  animation: 'float 8s ease-in-out infinite',
  zIndex: '-1',

  '@keyframes float': {
    '0%': { transform: 'translateY(0)' },
    '50%': { transform: 'translateY(-25px)' },
    '100%': { transform: 'translateY(0)' },
  },
}));

const FloatingDecor2 = styled(FloatingDecor)(() => ({
  top: '75%',
  left: '40%',
  width: '80px',
  height: '80px',
  background: 'radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, rgba(0, 0, 0, 0) 70%)',
  boxShadow: '0 10px 30px rgba(255, 255, 255, 0.5)',
  animation: 'float 6s ease-in-out infinite',
}));

const FloatingDecor3 = styled(FloatingDecor)(() => ({
  top: '10%',
  left: '75%',
  width: '100px',
  height: '100px',
  background: 'radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, rgba(0, 0, 0, 0) 70%)',
  boxShadow: '0 15px 35px rgba(255, 255, 255, 0.6)',
  animation: 'float 7s ease-in-out infinite',
}));

const FloatingDecor4 = styled(FloatingDecor2)(() => ({
  top: '105%',
  left: '15%',
  width: '60px',
  height: '60px',
  background: 'radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, rgba(0, 0, 0, 0) 60%)',
  boxShadow: '0 8px 20px rgba(255, 255, 255, 0.5)',
  animation: 'float 5s ease-in-out infinite',
}));

const RightHome = () => {
  return (
    <RightContainer>
      <Img3DContainer>
        <Img3DWrapper>
          <Img3D src={mekkeImg} alt="mekkeImg" /> {/* 3D изображение */}
          <FloatingDecor /> {/* Декоративный элемент для стиля */}
          <FloatingDecor2 /> {/* Второй декоративный элемент */}
        </Img3DWrapper>

        <Img3DWrapper>
          <Img3D style={{marginTop: 130}} src={mekkeImgGorod} alt="mekkeImgGorod" /> {/* Второе 3D изображение */}
          <FloatingDecor3 /> {/* Декоративный элемент для второго изображения */}
          <FloatingDecor4 /> {/* Второй декоративный элемент для второго изображения */}
        </Img3DWrapper>
      </Img3DContainer>
    </RightContainer>
  );
};

export default RightHome;
