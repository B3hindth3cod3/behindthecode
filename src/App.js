import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          I love you Blessing
        </p>
      </header>
      <div className="about">
        About me 
      </div>
      <div className="social">
        Social Media 
      </div>
      <div className="portfolio">
        Portfolio
      </div>
      <div className="contact"> 
        Contact
      </div>
    </div>
  );
}

export default App;
