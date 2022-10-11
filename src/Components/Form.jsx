import React from 'react'
import { useState } from 'react';
import App from '../App';
import Card from './Card';





function Form({colors, setColors}) {
    
    const [color, setColor] = useState("");
    
    
    const handleInputChange = (event) => {
        console.log(event.target.name)
        //console.log(event.target.value)
        setColor({
            ...color,
            [event.target.name] : event.target.value
        })

        
    }

    const resetForms = () => { document.getElementById("myform").reset(); }

    const enviarDatos = (event) => {
        event.preventDefault()
        setColors([color, ...colors]);
        console.log(color);
        resetForms();
        
    }

    



return (
    <>
    <div>
        <form id='myform' onSubmit={enviarDatos}>
            <label htmlFor="">Color</label>
            <input type={"text"} name="color" onChange={handleInputChange}></input>
            <button type="submit">Add</button>
        </form>
    </div>
    
    </>
    
)
}

export default Form