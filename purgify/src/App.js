import React from 'react';
import logo from './logo.svg';
// import './App.css';
import Heading from 'react-bulma-components/lib/components/heading';
import Box from 'react-bulma-components/lib/components/box';
import Columns from 'react-bulma-components/lib/components/columns';
import { Field, Control, Label, Input } from 'react-bulma-components/lib/components/form';
import Button from 'react-bulma-components/lib/components/button';
import Section from 'react-bulma-components/lib/components/section';

function App() {
  return (
    <div className="App">
      <Box>
        <Heading className="has-text-centered">Purgify Spotify</Heading>
        <Heading subtitle size={6} className="has-text-centered">
          It's time to purge your Spotify of the music you don't listen to.
        </Heading>
      </Box>
      <Section>
        <Columns>
          <Columns.Column size={6} offset={3}>
            <div className="search">
              <Field>
                <Label>Playlist</Label>
                <Control>
                  <Input placeholder="Playlist name" />
                </Control>
                <Control>
                  <Button type="primary">Search Playlists</Button>
                </Control>
              </Field>
              <Field>
                <Label>Artist</Label>
                <Control>
                  <Input placeholder="Artist name" />
                </Control>
                <Control>
                  <Button type="primary">Search Artists</Button>
                </Control>
              </Field>
              <Field>
                <Label>Song</Label>
                <Control>
                  <Input placeholder="Song name" />
                </Control>
                <Control>
                  <Button type="primary">Search Songs</Button>
                </Control>
              </Field>
            </div>
          </Columns.Column>
        </Columns>
      </Section>
    </div>
  );
}

export default App;
