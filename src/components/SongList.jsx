import React, { useState, useEffect } from 'react';
import NewSong from './NewSong';
import uuid from 'uuid/v1';

const SongList = () => {
  const [songs, setSongs] = useState([   // songs is variable & setSong is a function
    { title: 'Bella Ciao', id: 1 },  // by using useState we keep the value into songs which is an array
    { title: 'High in the halls', id: 2 },
    { title: 'As long as you love me', id: 3 }
  ])
  const addSong = (title) => {
    setSongs([...songs, { title, id: uuid() }]); //for updating state we need to call that function 
  }
  const [noOfSong, setSongListSize] = useState(0);
  // const sizeOfSongList = () => {
  //   setSongListSize(songs.length + 1)
  // }
  useEffect(() => { // this will re render when song list changed
    console.log("run hooks", songs)
  }, [songs])

  // useEffect(() => { // this will render when no of song changed
  //   console.log("run hooks", noOfSong)
  // }, [noOfSong])

  return (
    <div className="song-list">
      <ul>
        {songs.map(song =>
          <li key={song.id}>{song.title}</li>
        )}
      </ul>
      <NewSong addSong={addSong} />
      {/* <a onClick={sizeOfSongList}>Size of Sog List {noOfSong}</a> */}
    </div>
  );
}

export default SongList;