// import React from 'react';

// // Profile Component (target component)
// function Profile({ name, email }) {
//   return (
//     <div>
//       <p>Name: {name}</p>
//       <p>Email: {email}</p>
//     </div>
//   );
// }

// // Child Component 2
// function Child2({ name, email }) {
//   return <Profile name={name} email={email} />;
// }

// // Child Component 1
// function Child1({ name, email }) {
//   return <Child2 name={name} email={email} />;
// }

// // App Component (parent component)
// function App() {
//   const user = {
//     name: 'chennupati srinivasulu',
//     email: 'vasuchennupati20@gmail.com',
//   };

//   return (
//     <div>
//       <Child1 name={user.name} email={user.email} />
//     </div>
//   );
// }

// export default App;


// import React,{useReducer}from 'react'

// function appleReducer(state=3,action){
//   switch(action.type){
//     case 'ADD_APPLE':
//       return state+1 ;
    
//     case 'EAT_APPLE' :
//       return state-1;
      
//     default:
//       return state;  

//   }
// }

// function App(){
//   const[state,dispatch]=useReducer(appleReducer,3)
//   return(
//     <div>
//       <h1>Apple Counter</h1>
//       <p>NUMBER OF APPLES:{state}</p>

//       <button onClick={()=>dispatch({type:'ADD_APPLE'})}> ADD APPLE</button>
//       <button onClick={()=>dispatch({type:'EAT_APPLE'})}> EAT APPLE</button>
//       </div>
//   )

// }
// export default App;

// import React, { useReducer } from 'react';

// function appleReducer(state = 3, action) {
//   switch (action.type) {
//     case 'ADD_APPLE':
//       return state + 1;
//     case 'REMOVE_APPLE':
//       return state - 1;
//     default:
//       return state;
//   }
// }

// function App() {
//   const [state, dispatch] = useReducer(appleReducer, 3);

//   return (
//     <div style={{ padding: '20px', textAlign: 'center' }}>
//       <h1 style={{ color: 'orange' }}>APPLE Counter</h1>
//       <p style={{color: 'bule' }}> Number of APPLES: {state}</p>
//       <button
//         onClick={() => dispatch({ type: 'ADD_APPLE' })}
//         style={{
//           backgroundColor: 'blue',
//           color: 'green',
//           padding: '10px 20px',
//           margin: '10px',
//           border: 'none',
//           borderRadius: '20px',
//           cursor: 'pointer',
//         }}
//       >
//         ADD APPLE
//       </button>
//       <button
//         onClick={() => dispatch({ type: 'REMOVE_APPLE' })}
//         style={{
//           backgroundColor: 'yellow',
//           color: 'pink',
//           padding: '10px 20px',
//           margin: '10px',
//           border: 'none',
//           borderRadius: '20px',
//           cursor: 'pointer',
//         }}
//       >
//         REMOVE APPLE
//       </button>
//     </div>
//   );
// }

// export default App;

// import React,{useState} from "react";

// function App(){
//   const[text,setText] = useState("")
  
//   const handleChange = (event) => {
//     setText(event.target.value)
//   }

//   return(
//     <div>
//       <input type="text" value={text} onChange={handleChange}/>
//       <p>Your Text:{text}</p>
//     </div>
    
//   )
// }
// export default App;  


// 

import React, { useState } from 'react';

function App() {
  const [key, setKey] = useState("");
  const handleKeyDown = (event) => {
    setKey(event.key);
  };

  return (
    <div className="app">
      <h1>welcome {key}</h1>
      {key && <h2>pressed key: {key}</h2>}
      <input type="text" onKeyDown={handleKeyDown} placeholder="press here" />
    </div>
  );
}

export default App;
