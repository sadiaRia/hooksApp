import React, { useState } from 'react';

const NewSong = ({ addSong }) => {
  const [title, setTitle] = useState('');
  //const [test, setTest] = useState({test1:'',test2:''});//intialize object state just to test

  const setFiledOnChange = (e) => {
    setTitle(e.target.value);
    //setTest({test2:e.target.value,test1:'uihuihu'})//object state chage
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    addSong(title);
    setTitle('');
  }
  return (
    <form>
      <label>Enter New Song</label>
      <input type='text' value={title} required onChange={setFiledOnChange} />
      <button onClick={handleSubmit} >Add Song</button>
    </form>
  );
}

export default NewSong;
