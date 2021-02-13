 import React, { useState } from 'react';
 
const App = () => {
 const purple = "#8e44ad";
 const [bg,setBg]= useState(purple);
 const[name, setname]= useState("Click Me")

  const bgChange = () => {
    let newBg = "#34495d";
    setBg(newBg);
    setname("boom 💣");
  };
  
  return(
<>
<div style={ {backgroundColor:bg} }>
  <button onClick ={bgChange}>{name}</button>
</div>
</>
   );
 };

 export default App;