import React, { useState } from 'react';

 export default function Toggele() {
      const [isToggled, setIsToggled] = useState(false)
     return (
       <div>
         <button id = "toggleButton" onClick={() =>setIsToggled(!isToggled)}>Toggle</button>
         {isToggled && <h2>Hello!</h2>}
       </div>
     )
 }