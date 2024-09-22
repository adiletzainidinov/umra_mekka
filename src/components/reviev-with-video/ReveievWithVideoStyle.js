import { styled } from '@mui/material';
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
}));

export const BoxContainer = styled('div')(() => ({
  width: '100%',
  maxWidth: '1200px',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
}));

export const CardContainer = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
}));

export const TitleRevievVideo = styled('div')(() => ({
  textAlign: 'center',
  '& h2': {
    fontSize: 50,
    marginBottom: 80,
    color: '#252543',
    transition: 'color 0.3s ease',
    '&:hover': {
      color: '#FF6347',
    },
  },
}));



export const ButtonStyleVideo = styled(Button)(() => ({
    width: '100%',
    maxWidth: '200px',
    margin: '0 auto',
    marginTop: 50,
    padding: '20px',
    marginBottom: 80
  }));
  