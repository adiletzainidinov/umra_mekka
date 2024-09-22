import { styled } from '@mui/material';
import Button from '../../shared/UI/button/Button';

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
  flexDirection: 'column',
}));

export const BoxContainer = styled('div')(() => ({
  width: '100%',
  maxWidth: '1200px',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  '& h2': {
    textAlign: 'center',
    fontSize: 44,
    marginTop: 100,
    marginBottom: 40,
    color: '#0f0f30',
  },
}));

// Content

export const PapaLeftRightFooter = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
}));

export const LeftContactsFooter = styled('div')(() => ({}));

export const FooterFlex = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 18,
  gap: 40,
  '& .call': {
    marginRight: 10,
  },
}));

export const ButtonStyle = styled(Button)(() => ({
  position: 'relative',
  fontSize: 18,
  paddingLeft: 64,
  '& .or': {
    borderRadius: '50%',
    backgroundColor: '#ff8b4f',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    color: 'black',
    position: 'absolute',
    top: 5,
    left: -30,
    borderRight: '5px solid #ffb087',
  },
  '& .whatsapp': {
    marginLeft: 10,
  },
  '& .telegram': {
    width: 20,
    height: 20
  }
}));
