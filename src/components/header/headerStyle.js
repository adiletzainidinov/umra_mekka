import { styled } from '@mui/material';

export const Container = styled('div')(() => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
}));

// menyBurger

export const IconAndBurger = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

export const BurgerOpen = styled('div')(() => ({
  width: '100%',
  maxWidth: 200,
  height: '100%',
  boxShadow: '1px 1px 5px 1px rgba(1,1,1,0.1)',
  backgroundColor: 'white',
  color: 'black',
  display: 'flex',
  flexDirection: 'column',
  padding: '30px 20px',
  marginTop: 10,
  position: 'absolute',
  borderRadius: 5,
  top: 35,
  right: 50,
  zIndex: 10,
}));
