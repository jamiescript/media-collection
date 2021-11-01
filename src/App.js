/** @jsx jsx */
import { jsx } from '@emotion/react';
import * as React from 'react';
import { Logo } from './components/Logo';
import { Dialog } from '@reach/dialog';
import {
  Button,
  Input,
  FormGroup,
  Heading3,
  DialogClose,
} from './components/lib';
import VisuallyHidden from '@reach/visually-hidden';
import '@reach/dialog/styles.css';
import './App.css';

function AuthForm({ onSubmit, buttonText }) {
  function handleSubmit(event) {
    event.preventDefault();
    const [username, password] = event.target.elements;

    onSubmit({
      username: username.value,
      password: password.value,
    });
  }

  return (
    <form
      css={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        '> div': {
          margin: '10px auto',
          width: '100%',
          maxWidth: '300px',
        },
      }}
      onSubmit={handleSubmit}
    >
      <FormGroup>
        <label htmlFor="username">Username</label>
        <Input type="text" id="username" />
      </FormGroup>
      <FormGroup>
        <label htmlFor="password">Password</label>
        <Input type="password" id="password" />
      </FormGroup>
      <div>
        <Button type="submit">{buttonText}</Button>
      </div>
    </form>
  );
}

function App() {
  const [openModal, setOpenModal] = React.useState('none');

  function login(formData) {
    console.log('login', formData);
  }

  function register(formData) {
    console.log('register', formData);
  }

  return (
    <div
      className="App"
      css={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100vh',
      }}
    >
      <Logo size="200px" />
      <h1>Media Collection</h1>

      <div
        css={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
          gridGap: '0.75rem',
        }}
      >
        <Button onClick={() => setOpenModal('login')}>Login</Button>
        <Button onClick={() => setOpenModal('register')} variant="secondary">
          Register
        </Button>
      </div>
      <Dialog aria-label="Login Form" isOpen={openModal === 'login'}>
        <DialogClose>
          <Button onClick={() => setOpenModal('none')}>
            <VisuallyHidden>Close</VisuallyHidden>
            <span>&times;</span>
          </Button>
        </DialogClose>
        <Heading3>Login</Heading3>
        <AuthForm onSubmit={login} buttonText="Login" />
      </Dialog>

      <Dialog aria-label="Regitration Form" isOpen={openModal === 'register'}>
        <DialogClose>
          <Button onClick={() => setOpenModal('none')}>
            <VisuallyHidden>Close</VisuallyHidden>
            <span>&times;</span>
          </Button>
        </DialogClose>
        <Heading3>Register</Heading3>
        <AuthForm
          onSubmit={register}
          buttonText="Register"
          variant="secondary"
        />
      </Dialog>
    </div>
  );
}

export default App;
