import { Button as MuiButton, styled } from '@mui/material';
import PropTypes from 'prop-types';

const Button = ({ type = 'button', onClick, children, ...rest }) => {
  return (
    <MuiButtonStyle type={type} onClick={onClick} {...rest}>
      {children}
    </MuiButtonStyle>
  );
};

export default Button;

const MuiButtonStyle = styled(MuiButton)(() => ({
  borderRadius: 4,
  backgroundColor: 'rgba(255, 90, 5, 1)',
  color: 'white',
  padding: '15px 30px',
  '&:hover': {
    backgroundColor: 'rgba(255, 90, 5, 0.8)',
  },
}));

Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};
