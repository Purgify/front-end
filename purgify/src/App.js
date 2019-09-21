import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Purgify Spotify</h2> 
        <p>
        It's time to purge your Spotify of the music you don't listen to.
        </p>
      </header>

      <div className="search">

        <p> Pick a Playlist </p>
        <input type="text" placeholder="Search Playlist" />

        <p> Pick an artist </p>
        <input type="text" placeholder="Search Artist" />

        <p> Pick a song </p>
        <input type="text" placeholder="Search Songs" />

        
      </div>
     
      <button className="purgeButton" type="submit"> Purge </button>
    </div>
  );
}

export default App;
