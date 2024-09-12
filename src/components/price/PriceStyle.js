import { Card, styled } from '@mui/material';
import Button from '../../shared/UI/button/Button';

// Price

export const Container = styled('div')(() => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
}));

export const StyledBox = styled('div')(() => ({
  width: '100%',
  maxWidth: '1440px',
  display: 'flex',
  justifyContent: 'center',
  position: 'relative',
  paddingBottom: 300,
}));

export const BoxContainer = styled('div')(() => ({
  width: '100%',
  maxWidth: '1200px',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
}));

export const TextContent = styled('div')(() => ({
  marginTop: 100,
  marginBottom: 100,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  '& h2': {
    fontSize: 45,
    marginBottom: 20,
    fontWeight: 700,
  },
  '& p': {
    fontSize: 14,
    marginBottom: 20,
    fontWeight: 400,
    color: '#9696a5',
    width: '100%',
    maxWidth: 630,
    lineHeight: '24px',
  },
}));

export const ContainerContent = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: 100,
}));

// LeftBox

export const ContainerLeftBox = styled('div')(() => ({
  '& h2': {
    fontSize: 35,
    marginBottom: 20,
    fontWeight: 500,
    width: '100%',
    maxWidth: '420px',
  },
}));

export const TextIcon = styled('div')(() => ({
  display: 'flex',
  gap: 10,
  width: '100%',
  maxWidth: '400px',
  '& ion-icon': {
    fontSize: '24px',
    color: '#5d6df4',
    cursor: 'pointer',
    '&:hover': {
      color: '#3b4bd4',
      transform: 'scale(1.1)',
      transition: 'all 0.3s ease',
    },
  },
  '&:hover': {
    '& ion-icon': {
      color: '#3b4bd4',
      transform: 'scale(1.2)',
      transition: 'all 0.3s ease',
    },
  },
}));

export const LinePrice = styled('div')(() => ({
  width: 50,
  height: '2px',
  backgroundColor: '#9696a5',
  marginTop: '20px',
  marginBottom: 10,
  position: 'relative',
  top: -7,
}));

// RightPrice

export const CardRightPrice = styled(Card)(() => ({
  width: '100%',
  maxWidth: 540,
  backgroundColor: '#fff',
  borderRadius: '15px',
  position: 'relative',
  color: '#fff',
  textAlign: 'center',

  '& h2': {
    fontSize: '30px',
    fontWeight: 700,
    backgroundColor: '#0d0b2f',
    height: '70px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '15px 15px 0 0',
    paddingTop: 20,
  },

  '& p': {
    fontSize: '14px',
    margin: 0,
    backgroundColor: '#0d0b2f',
    paddingBottom: 20,
  },

  '& .ribbon': {
    position: 'absolute',
    top: '40px',
    right: '-40px',
    transform: 'rotate(45deg)',
    backgroundColor: '#1fe48f',
    color: '#000',
    fontWeight: 700,
    padding: '5px 40px',
    fontSize: '14px',
  },

  '& h3': {
    color: '#0f0f30',
    marginTop: 30,
    fontSize: 60,
    '& .dollar': {
      fontSize: 30,
      position: 'relative',
      top: '-20px',
    },
  },

  '& h4': {
    color: '#9c9c9c',
    fontWeight: 300,
    position: 'relative',
    top: -10,
    marginBottom: 30,
  },
}));

export const InformationRight = styled('div')(() => ({
  marginBottom: 10,
  '& .papaIconTextRight': {
    display: 'flex',
    color: '#9c9c9c',
  },

  '& ion-icon': {
    fontSize: '24px',
    color: '#5d6df4',
    cursor: 'pointer',
    marginLeft: 20,
    '&:hover': {
      color: '#3b4bd4',
      transform: 'scale(1.1)',
      transition: 'all 0.3s ease',
    },
  },

  '& p': {
    background: 'none',
    marginLeft: 10,
    marginTop: 5,
  },

  '&:hover': {
    '& ion-icon': {
      color: '#3b4bd4',
      transform: 'scale(1.2)',
      transition: 'all 0.3s ease',
    },
  },
}));

export const LineRightPrice = styled('div')(() => ({
  width: 400,
  height: '1.5px',
  backgroundColor: '#9696a5',
  marginTop: '0px',
  position: 'relative',
  top: -7,
  marginLeft: 70,
}));

export const ButtonRightPrice = styled(Button)(() => ({
  marginTop: 20,
  marginBottom: 20,
  paddingLeft: '50px',
  paddingRight: '50px',
}));

export const FooterTextRightPrice = styled('h5')(() => ({
  marginBottom: 30,
  color: '#9c9c9c',
  fontWeight: 300,
}));

// blueBox

export const BlueBox = styled('div')(() => ({
  width: '100%',
  height: '100%',
  maxHeight: '800px',
  position: 'absolute',
  bottom: 0,
  left: 0,
  background: 'linear-gradient(to bottom right, white 30%, #6475fe 30%)',
  zIndex: -1,
  '& h2': {
    marginTop: 500,
    color: 'white ',
    textAlign: 'center',
    fontSize: 35,
    marginBottom: 50,
  },
}));

export const PartnerBox = styled('h5')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  maxWidth: '1300px',
  margin: '0 auto',
  '& .boxCard': {
    backgroundColor: 'white',
    boxShadow: '1px 1px 5px 1px rgba(0,0,0,0.15)',
    borderRadius: 7,
    padding: '35px 80px',
    maxWidth: '100%',
    width: 'fit-content',
    margin: '0 auto',
    fontSize: 20,
    color: '#0f0f30',
  },
}));

export const WaveBox = styled('div')(() => ({
  width: '100%',
  height: '150px',
  position: 'absolute',
  bottom: 0,
  left: 0,
  background: 'linear-gradient(to bottom right, #ff5a05, #ed9c73)',
  zIndex: -1,
  clipPath:
    'path("M0,32L48,58.7C96,85,192,139,288,160C384,181,480,171,576,149.3C672,128,768,96,864,74.7C960,53,1056,43,1152,58.7C1248,75,1344,117,1392,138.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z")',
}));
