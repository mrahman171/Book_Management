import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'

const UpdateInfo = () => {
    const [name, setName] = React.useState("");
    const [pname, setpname] = React.useState("");
    const [age, setAge] = React.useState("");
    const [date, setdate] = React.useState("");
    const [page, setpage] = React.useState("");
    const [book_type, setbooktype] = React.useState("");

     

    return (
        <div className='product'>
            <h1>Update Books Info</h1>
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
        </div>

        
    )
}

export default UpdateInfo;