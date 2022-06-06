import React from "react";

let todoList = [
    { id: 1, title: "Wake up", status: true },
    { id: 2, title: "drink tea", status: false },
    { id: 3, title: "eat maggi", status: true },
    { id: 4, title: "sleep", status: false }
  ];

function displayNotes(){
    document.getElementById("displayList").innerHTML = "";
    todoList.push(
        
        {title: document.getElementById("listBar").value})
    todoList.forEach((e)=>{

        let taskList = document.createElement("h4");
        taskList.innerHTML = e.title;

        if(e.status){
            taskList.style.color = "green"
        }
        else{
            {
                taskList.style.color = "red"
            }
        }

        document.getElementById("displayList").append(taskList)
    })



}
    
export default displayNotes;