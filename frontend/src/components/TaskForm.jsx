// src/components/TaskForm.jsx
// You need to write the code for TaskForm component in the TaskForm.jsx file.
import { useState } from 'react';
import axios from 'axios';

export default function TaskForm({taskFunc}) {
    const [formData,setFormData] = useState({
        title:"",
        dueDate: "",
        priority: "Medium",
        status: "To Do"
    })

    const valueHandler = (e) => {
        setFormData((prevData)=>({...prevData, [e.target.name] : e.target.value}))
    }

    const submitHandler = (e)=>{
        e.preventDefault()
        if (formData.title == "") {
            return alert("Title required")
        } 
        if (formData.dueDate == ""){
            return alert("Date required")
        }
        console.log(formData)
        taskFunc(formData)
    }

    return (
        <div>
            {}
            <form onSubmit={(e) => submitHandler(e)}>
                <input type="text" placeholder="title" name="title" onChange={(e)=>{valueHandler(e)}}/>
                <input type="date" placeholder="date" name="dueDate" onChange={(e)=>{valueHandler(e)}} />
                <select name="priority" onChange={(e)=>{valueHandler(e)}}>
                    <option value="High">High</option>
                    <option value="Medium" selected>Medium</option>
                    <option value="Low">Low</option>
                </select>
                <select name="status" onChange={(e)=>{valueHandler(e)}}>
                    <option value="To Do" selected>To Do</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Done">Done</option>
                </select>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}