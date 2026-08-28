import { useEffect, useState } from 'react';
function App() {
  let [countervisible, setcountervisible] = useState(true);

  useEffect(function(){
    setInterval(function(){
      setcountervisible(countervisible => !countervisible);
    }, 5000);
  },[]);
  return (
    <div>
      hi
      {countervisible && <Counter></Counter>}
      hello
    </div>
  );
}

function Counter(){
   const [count, setcount] = useState(0);

   useEffect(()=>{
    const interval = setInterval(function(){
      console.log('called from inside')
    setcount(count => count + 1);
   },1000)
     
      return () => {
        console.log("on unmount")
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