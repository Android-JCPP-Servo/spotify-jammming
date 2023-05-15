import logo from './logo.svg';
import './App.css';

import SearchBar from './SearchBar/SearchBar';
import Tracklist from './Tracklist/Tracklist';
import Playlist from './Playlist/Playlist';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}

        <SearchBar/>
        <div className="grid">
          <div>
            <Tracklist/>
          </div>
          <div>
            <Playlist />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
