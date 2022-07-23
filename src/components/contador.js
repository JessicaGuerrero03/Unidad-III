import React, { useState } from "react" 
  
 const Counter = () => { 
  
     const [counter, setCounter] = useState(0); 
  
     return <div> 
         <p>Numero de visitas: {counter}</p> 
         <button onClick={() => { setCounter( counter + 1) }}> Contar visita</button> 
     </div> 
 } 
  
 export default Counter;