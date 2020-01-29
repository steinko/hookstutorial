import React , { useState } from 'react'

export default function Dish () {
	
const [name, setName] = useState('');

  return (
    <div className="main-wrapper">
      <h1>Level Up Dishes</h1>
      <input data-testid = "dish"  
         type="text" onChange={e => setName(e.target.value)}
         value={name} 
       />
    </div>
  );
};