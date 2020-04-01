import React, { useState } from 'react';

const SongList = () => {
  const [songs, setSongs] = useState([   // songs is variable & setSong is a function
    { title: 'Bella Ciao', id: 1 },  // by using useState we keep the value into songs which is an array
    { title: 'High in the halls', id: 2 },
    { title: 'As long as you love me', id: 3 }
  ])
  const addSong = () => {
    setSongs([...songs,{ title: 'new Songs', id: 4 }]); //for updating state we need to call that function 
  }
  return (
    <div className="song-list">
      <ul>
        {songs.map(song =>
          <li key={song.id}>{song.title}</li>
        )}
      </ul>
      <button onClick={addSong}>Add new Song</button>
    </div>
  );
}

export default SongList;