import styled from '@emotion/styled/macro';
import { Dialog as ReachDialog } from '@reach/dialog';

const buttonVariants = {
  primary: {
    background: '#3d5af3',
    color: 'white',
  },
  secondary: {
    background: 'white',
    color: 'black',
  },
};

const Button = styled.button(
  {
    padding: '10px 15px',
    border: '0',
    lineHeight: '1',
    borderRadius: '3px',
  },
  ({ variant = 'primary' }) => buttonVariants[variant]
);

const Input = styled.input({
  borderRadius: '3px',
  border: '1px solid grey',
  background: 'grey',
  padding: '8px 12px',
});

const FormGroup = styled.div({
  display: 'flex',
  flexDirection: 'column',
});

const Dialog = styled(ReachDialog)({
  maxWidth: '450px',
  borderRadius: '3px',
  paddingBottom: '3.5em',
  boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.2)',
  margin: '20vh auto',
  '@media (max-width: 991px)': {
    width: '100%',
    margin: '10vh auto',
  },
});

export { Button, Dialog, Input, FormGroup };
