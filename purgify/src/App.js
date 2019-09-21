import React from 'react';
import logo from './logo.svg';
<<<<<<< HEAD
// import './App.css';
import Columns from 'react-bulma-components/lib/components/columns';
import {
  Field,
  Control,
  Label,
  Input,
  Textarea,
  Select,
  Checkbox,
  Radio,
  Help,
} from 'react-bulma-components/lib/components/form';
import Button from 'react-bulma-components/lib/components/button';
=======
import Searc from './components/Search';
import './App.css';
>>>>>>> e038add6b60a7aa7e79e813b7af5ca1cdc1bc4b7

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Purgify Spotify</h2> 
        <p>
        It's time to purge your Spotify of the music you don't listen to.
        </p>
      </header>
      <Columns>
        <Columns.Column size={6} offset={3}>
          <div className="search">
            <Field>
              <Label>Playlists</Label>
              <Control>
                <Input placeholder="Playlist name" />
              </Control>
              <Control>
                <Button type="primary">Search Playlists</Button>
              </Control>
            </Field>
          </div>
        </Columns.Column>
      </Columns>
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
