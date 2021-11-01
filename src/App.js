import * as React from 'react';
import { Logo } from './components/Logo';
import { Dialog } from '@reach/dialog';
import { Button, Input, FormGroup } from './components/lib';
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
    <form onSubmit={handleSubmit}>
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
    <div className="App">
      <header className="App-header">
        <Logo size="200px" />
        <h1>Media Collection</h1>

        <div>
          <Button onClick={() => setOpenModal('login')}>Login</Button>
        </div>
        <div>
          <Button onClick={() => setOpenModal('register')} variant="secondary">
            Register
          </Button>
        </div>
        <Dialog aria-label="Login Form" isOpen={openModal === 'login'}>
          <div>
            <Button onClick={() => setOpenModal('none')}>Close</Button>
          </div>
          <h3>Login</h3>
          <AuthForm onSubmit={login} buttonText="Login" />
        </Dialog>

        <Dialog aria-label="Regitration Form" isOpen={openModal === 'register'}>
          <div>
            <Button onClick={() => setOpenModal('none')}>Close</Button>
          </div>
          <h3>Register</h3>
          <AuthForm
            onSubmit={register}
            buttonText="Register"
            variant="secondary"
          />
        </Dialog>
      </header>
    </div>
  );
}

export default App;
