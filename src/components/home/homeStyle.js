import { styled } from '@mui/material';
import BackgroundUrl from '../../assets/images/home-backgroun.png';
import Button from '../../shared/UI/button/Button';


// home

export const Container = styled('div')(() => ({
  width: '100%',
  height: '100%',
  minHeight: '600px',
  display: 'flex',
  justifyContent: 'center',
}));

export const StyledBox = styled('div')(() => ({
  width: '100%',
  maxWidth: '1440px',
  display: 'flex',
  justifyContent: 'center',
  backgroundImage: `url(${BackgroundUrl})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
}));

export const BoxContainer = styled('div')(() => ({
  width: '100%',
  maxWidth: '1200px',
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'space-between',
  paddingTop: 62,
  paddingBottom: 71,
}));

// LeftHome

export const LeftContainer = styled('div')(() => ({
  width: '100%',
  maxWidth: 480,
  marginTop: 20,
  color: 'rgba(255, 255, 255, 1)',
  '& h3': {
    fontWeight: 600,
    fontSize: 20,
    marginBottom: 15,
  },
  '& h1': {
    fontWeight: 700,
    fontSize: 50,
    marginBottom: 15,
  },
  '& h2': {
    fontWeight: 500,
    fontSize: 50,
    marginBottom: 15,
    lineHeight: '60px',
  },
  '& .line': {
    width: 365,
    height: 2,
    backgroundColor: 'white',
    marginTop: 20,
    marginBottom: 20,
  },
  '& p': {
    fontWeight: 300,
    fontSize: 16,
    marginBottom: 43,
    lineHeight: '26px',
  },
  '& .buttonPapa': {
    display: 'flex',
    gap: 41,
  },
}));

export const StyledButtonInformation = styled(Button)(() => ({
  border: '2px solid rgba(255, 255, 255, 0.3)',
  background: 'none'
}));

// Right Home

export const RightContainer = styled('div')(() => ({
  width: '100%',
  maxWidth: 600,
}));

export const Img3DContainer = styled('div')(() => ({
  display: 'flex',
  gap: '20px', 
  perspective: '1500px',
}));

export const Img3DWrapper = styled('div')(() => ({
  position: 'relative',
  width: '400px',
  height: 'auto',
  transformStyle: 'preserve-3d',
  transition: 'transform 0.5s ease-out',
  '&:hover': {
    transform: 'rotateX(20deg) rotateY(-20deg)',
  },
}));

export const Img3D = styled('img')(() => ({
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

export const FloatingDecor = styled('div')(() => ({
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

export const FloatingDecor2 = styled(FloatingDecor)(() => ({
  top: '75%',
  left: '40%',
  width: '80px',
  height: '80px',
  background: 'radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, rgba(0, 0, 0, 0) 70%)',
  boxShadow: '0 10px 30px rgba(255, 255, 255, 0.5)',
  animation: 'float 6s ease-in-out infinite',
}));

export const FloatingDecor3 = styled(FloatingDecor)(() => ({
  top: '10%',
  left: '75%',
  width: '100px',
  height: '100px',
  background: 'radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, rgba(0, 0, 0, 0) 70%)',
  boxShadow: '0 15px 35px rgba(255, 255, 255, 0.6)',
  animation: 'float 7s ease-in-out infinite',
}));

export const FloatingDecor4 = styled(FloatingDecor2)(() => ({
  top: '105%',
  left: '15%',
  width: '60px',
  height: '60px',
  background: 'radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, rgba(0, 0, 0, 0) 60%)',
  boxShadow: '0 8px 20px rgba(255, 255, 255, 0.5)',
  animation: 'float 5s ease-in-out infinite',
}));
