
function App() {
  return (
    <div style={{background: "#dfe6e9", height: "100vh"}}>
      <div style={{display: "flex",justifyContent: " center"}}>
          <postcomponent></postcomponent>
      </div>
    </div>
  );
}

const style = { width: 200, backgroundColor: "white",borderradius: 10,bordercolor: "grey",borderwidth: 1, padding : 20 };

function postcomponent(){
  return (
    <div style={style}>
     
    </div>
  );
}

export default App;