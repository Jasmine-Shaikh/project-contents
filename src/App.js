import React from "react";
import ReactDOM from "react-dom"
import todo from "./Todo.js"
import './App.css';
let todoList = [
  { id: 1, title: "Wake up", status: true },
  { id: 2, title: "drink tea", status: false },
  { id: 3, title: "eat maggi", status: true },
  { id: 4, title: "sleep", status: false }
];



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
         <input type="text" placeholder="Enter task here"></input>
         <button>Add</button>
         <div id="displayList">
           <todo/>
         </div>
       </div>

    </div>
  );
}

export default App;
