import { useEffect, useState } from 'react';
function App() {
  return (
    <div>
      <Counter></Counter> 
    </div>
  );
}

function Counter(){
   const [count, setcount] = useState(0);

   

   useEffect(()=>{
    setInterval(function(){
    setcount(count => count + 1);
   },1000)

   },[]);

   function increaseCount(){
      setcount(count + 1);
   }
   
   return (
    <div>
     <h1 id='text'>{count}</h1>
     <button onClick={increaseCount}>increase count</button>
    </div>
   );
  
}

export default App;