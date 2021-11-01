import * as React from 'react';
import { Logo } from './components/Logo';
import { Dialog } from '@reach/dialog';
import '@reach/dialog/styles.css';
import './App.css';

function App() {
  const [openModal, setOpenModal] = React.useState('none');

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
        </Dialog>

        <Dialog aria-label="Regitration Form" isOpen={openModal === 'register'}>
          <div>
            <button onClick={() => setOpenModal('none')}>Close</button>
          </div>
          <h3>Register</h3>
        </Dialog>
      </header>
    </div>
  );
}

export default App;
