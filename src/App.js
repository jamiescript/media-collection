/** @jsx jsx */
import { jsx } from '@emotion/react';
import Nav from './components/Nav';

function App({ onSubmit, buttonText }) {
  return (
    <div
      css={{
        backgroundColor: '#282c34',
        color: 'white',
        padding: '1rem',
        height: '100vh',
        marginBottom: '3rem',
      }}
    >
      <Nav />
    </div>
  );
}

export default App;
