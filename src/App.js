import React from "react";
import ReactDOM from "react-dom"
import todo from "./Todo.js"
import './App.css';

const name = "Bruce Wayne";
const profilePhoto = "https://avatarfiles.alphacoders.com/161/161365.jpg";



function App() {
  const [age,setCount] = React.useState(18);
  const changeAge = (value) => {
    setCount(age + value);
  };
  const [details,setStatus] = React.useState(true);
  const showDetails = (value) => {
    setStatus(value);
    if(details){
      document.getElementById("showDetailsBtn").style.visibility ="hidden";
      document.getElementById("moreDetails").style.visibility ="visible";
    }
    else{
      document.getElementById("showDetailsBtn").style.visibility ="visible";
      document.getElementById("moreDetails").style.visibility ="hidden";
    }
  };

  return (
    <div className="App">
       <div id="profilePage">
         <img src={profilePhoto}></img>
         <h3>Name: {name}</h3>
         <h3>Age: {age}</h3>
         <button onClick={()=>changeAge(+1)}>Increase Age</button>
         <button onClick={()=>changeAge(-1)}>Decrease Age</button>
         <br/>
         <button id="showDetailsBtn" onClick={()=>showDetails(false)}>More Details</button>
         
         <div id="moreDetails" style={{visibility:"hidden"}}>
           <h4>Location: Gotham Square, England.</h4>
           <h4>Organisation: Batman LLP.</h4>
         <button onClick={()=>showDetails(true)} >Hide Details</button>
         </div>
       </div>
       <div id="todoPage">
         <input id="listBar" type="text" placeholder="Enter task here"></input>
         <button  onClick={todo}>Add</button>
         <h2>To Do List:</h2>
         <div id="displayList">
         </div>
       </div>

    </div>
  );
}

export default App;
