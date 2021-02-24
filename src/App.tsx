import React from 'react';


function App() {
  const checkFetch= async  ()=>{
    try{
      const res = await fetch('http://localhost:5000');
      const resData = await res.json();
      console.log(resData);
    }catch(err){
      console.log(err);
    }
  }
  return (
    <div className="App">
      <button onClick={checkFetch}>
        check
      </button>
    </div>
  );
}

export default App;
