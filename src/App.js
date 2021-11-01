import * as React from 'react';
import { Logo } from './components/Logo';
import { Dialog } from '@reach/dialog';
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
      <div>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
      </div>
      <div>
        <button type="submit">{buttonText}</button>
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
          <button onClick={() => setOpenModal('login')}>Login</button>
        </div>
        <div>
          <button onClick={() => setOpenModal('register')}>Register</button>
        </div>
        <Dialog aria-label="Login Form" isOpen={openModal === 'login'}>
          <div>
            <button onClick={() => setOpenModal('none')}>Close</button>
          </div>
          <h3>Login</h3>
          <AuthForm onSubmit={login} buttonText="Login" />
        </Dialog>

        <Dialog aria-label="Regitration Form" isOpen={openModal === 'register'}>
          <div>
            <button onClick={() => setOpenModal('none')}>Close</button>
          </div>
          <h3>Register</h3>
          <AuthForm onSubmit={register} buttonText="Register" />
        </Dialog>
      </header>
    </div>
  );
}

export default App;
