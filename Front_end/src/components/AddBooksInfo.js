import React, { useEffect, useState } from "react";
import BooksViews from './view_Books';
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
    const [name, setName] = useState("");
    const [pname, setpname] = useState("");
    const [age, setAge] = useState("");
    const [date, setdate] = useState("");
    const [page, setpage] = useState("");
    const [book_type, setbooktype] = useState("");

    const collectData = async () => {
        let result = await fetch("http://localhost:3000/Books/Add", {
            method: 'post',
            body: JSON.stringify({ name, pname, age, date,page,book_type }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result = await result.json();
        console.warn(result);
        localStorage.setItem("user", JSON.stringify(result.result))
        localStorage.setItem("token", JSON.stringify(result.auth))
         
        
    }

    return (
        <div className="register">
            <h1>Book Management</h1>
            <input className="inputBox" type="text" placeholder="Enter Name"
                value={name} onChange={(e) => setName(e.target.value)}
            />
            <input className="inputBox" type="text" placeholder="Enter P.Name"
                value={pname} onChange={(e) => setpname(e.target.value)}
            />
            <input className="inputBox" type="text" placeholder="Enter Your Age"
                value={age} onChange={(e) => setAge(e.target.value)}
            />
            <input className="inputBox" type="text" placeholder="Enter date"
                value={date} onChange={(e) => setdate(e.target.value)}
            />
            <input className="inputBox" type="text" placeholder="Enter Page Number"
                value={page} onChange={(e) => setpage(e.target.value)}
            />
            <input className="inputBox" type="text" placeholder="Enter Book type"
                value={book_type} onChange={(e) => setbooktype(e.target.value)}
            />
            <button onClick={collectData} className="appButton" type="button">ADD Book</button>
             
        </div>
    )
}
export default SignUp