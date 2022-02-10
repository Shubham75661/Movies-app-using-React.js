import React from 'react';
import {useState} from 'react';


function Showinfo(props) {
    const [Info, setInfo] = useState(true);
    return (
        <div>
            <div className ={ !Info ? 'hidden' : 'round'}>
                <h1> {props.data.uname} </h1>
                <h1> {props.data.phno} </h1>
                <h1> {props.data.address} </h1>
                <h1> {props.data.linkid_in} </h1>
            </div>
            <button onClick={() =>setInfo(!Info)}></button>
            <h1>{Info}</h1>
        </div>
    )
}

export default Showinfo;


