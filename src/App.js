import { Logo } from './components/Logo';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo size="200px" />
        <h1>Media Collection</h1>

        <div>
          <button onClick={() => alert('login clicked')}>Login</button>
        </div>
        <div>
          <button onClick={() => alert('register clicked')}>Register</button>
        </div>
      </header>
    </div>
  );
}

export default App;
