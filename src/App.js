import React from 'react';
import './index.css';
import Arr from './Array';
import Div from './Div';
import arr ,{music,actor}from './Array';
 function  print(val) {
   return (

    <Div className="imag" imgs={val.imgs} para= {val.para} link={val.link}/>


   );
 }


function App() {
  return (
    <React.Fragment>
    <h1 className="heading">Hola! Welcome to My Playlist!</h1>

    <h2>Movies</h2>
    {arr.map(print)}
  <h2>Songs</h2>
  {music.map(print)
  }
  <h2>Actors and Actress</h2>
  {actor.map(print)}
</React.Fragment>
  );
}

export default App;
