import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material';

const Header = () => {
  return (
    <>
      <Container>
        <Box sx={{ flexGrow: 1, width: '100%', maxWidth: 1440 }}>
          <AppBar
            position="static"
            sx={{ background: 'linear-gradient(45deg,#6677ff, #2e42f0 )' }}
          >
            <Toolbar
              variant="regular"
              sx={{ display: 'flex', justifyContent: 'space-between' }}
            >
              <p>LiderUmra-logo</p>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                size="large"
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
        </Box>
      </Container>
    </>
  );
};

export default Header;

const Container = styled('div')(() => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
}));
