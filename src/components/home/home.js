import { styled } from '@mui/material';
import BackgroundUrl from '../../assets/images/home-backgroun.png';
import Button from '../../shared/UI/button/Button';

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
