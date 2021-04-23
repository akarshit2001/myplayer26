import React from 'react';
function Div(props){
    return (
  <div className="card">
  
  <div className="pic">
   <img src={props.imgs}  alt="msd"/>
  </div>
  <div className="info">
  
  <p>{props.para}</p>
  <a href ={props.link} alt="msd">
  
 
  <br></br>
  <button >click to watch!</button>
  </a>
  
  
  </div>
  
  
  
  
  </div>
    );
  }
  export default Div;