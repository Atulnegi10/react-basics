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
    const interval = setInterval(function(){
    setcount(count => count + 1);
   },1000)
     console.log('useEffect called')
      return () => {
        clearInterval(interval);
    };
   },[]);

   
   
   return (
    <div>
     <h1 id='text'>{count}</h1>
    
    </div>
   );
  
}

export default App;