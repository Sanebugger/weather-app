import React, { useEffect, useState } from 'react'

export default function GetAPI() {

const [data,setdata] = useState([]); 

const api=()=>{
  fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(json =>{ 
    console.log(json);
    setdata(json); 
  })
}
{/*}
useEffect(()=>{
  GetAPI();
},[]);
*/}
return (
    <>
    <div><h3 >GET MY API</h3></div>
    <br/>
    <button onClick={api}>click to get </button>
    <pre>{JSON.stringify(data,null,2)}</pre>
   {/* <div>
      <ul>
        {data.map((item)=>(
          <li>{item.title}</li>
        ))}
      </ul>
    </div>
*/}
    </>
  )
}
