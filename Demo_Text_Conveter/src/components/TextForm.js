import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick=()=>{
        let newtext = text.toUpperCase()
        setText(newtext)
    } 
    const handleLoClick=()=>{
        let newtext = text.toLowerCase()
        setText(newtext)
    } 
    const handleOnChange=(event)=>{
        setText(event.target.value);
    } 
const [text, setText] = useState('');
    // setText("hy i am yash now online here....");


  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>

        <div className="mb-2">
        {/* <label for="myBox" className="form-label"></label> */}
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="4"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convart to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convart to Lowercase</button>
    </div>
    <div className="container my-2">
        <h2>Your text summary</h2>
        <p><b>{text.split(" ").length}</b> Words and <b>{text.length}</b> characters</p>
        <p><b>{0.008 * text.split(" ").length}</b> Minutes read</p>
            <h2>Previwe</h2>
            <p><i>{text}</i></p>
        
    </div>

    </>
  )
}
