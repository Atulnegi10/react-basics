import {useSTATE} from 'react';
import "./app.css";

export default function App(){
  const [count, setcount] = useSTATE(0);

  function onClickHandler(){
    setcount(count+1);
  }
  return(
    <div>
    <button onClickHandler= {onClickHandler}>
    </button>
    </div>
  );
}
function button(props){
  return (
    <button onClick={props.onClickHandler}>
      counter{props.count}
    </button>
  );
}
//dont mind this file