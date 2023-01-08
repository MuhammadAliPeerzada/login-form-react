import React, { useEffect, useState } from "react";


function App() {

const [studentArray, setStudentArray] = useState([])
const [username, setUsername] = useState("")
const [password, setPassword] = useState("")

function submitFunc(){
  setStudentArray(
     [...studentArray,
      {
        username,
        password
      }
    ]
    )
    
}

useEffect(()=>{console.log(studentArray);},[studentArray])


  return (
   <>
   <br />
   <label htmlFor="userName">Name
   <br />
   <input type="text" id="userName" placeholder="Username" onChange={(e)=>{setUsername(e.target.value)}}/>
   </label>
   <br />
   <br />
   <label htmlFor="password">Password
   <br />
   <input type="password" id="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/>
   </label>
   <br />
   <br />
   <button onClick={submitFunc}>Submit</button>
   </>
  );
}

export default App;
