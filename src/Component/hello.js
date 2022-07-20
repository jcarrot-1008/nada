import React, { useState } from "react";

export default function Hello() {
  
  let name = 'Jun';
  const [name, setN] = useState('Jun'); 


  function nameChanged() {
    const newName = name === 'Jun' ? 'Jeyen' : 'Jun';
    setN(newName)
  }

  return (
    <>
     <h1>state</h1>
     <h2>{name}</h2>
     <button onClick={nameChanged}>Change</button>
    </>
  );
}
