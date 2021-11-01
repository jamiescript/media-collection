import styled from '@emotion/styled/macro';
import { Dialog as ReachDialog } from '@reach/dialog';
import * as colors from './styles/colors';
import * as mq from './styles/media-queries';

const Heading3 = styled.h3({
  textAlign: 'center',
});

const buttonVariants = {
  primary: {
    background: colors.indigo,
    color: colors.white,
  },
  secondary: {
    background: colors.white,
    color: colors.black,
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
  border: `1px solid ${colors.grey}`,
  background: colors.grey,
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
  [mq.small]: {
    width: '100%',
    margin: '10vh auto',
  },
});

const DialogClose = styled.div({
  display: 'flex',
  justifyContent: 'flex-end',
});

export { Button, Dialog, Input, FormGroup, Heading3, DialogClose };
