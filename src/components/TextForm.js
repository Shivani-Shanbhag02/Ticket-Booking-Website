import React, { useState } from 'react'


export default function TextForm(props) {
  const [text, setText] = useState('');
  const handleOnChange = (event) => {
    setText(event.target.value);
  }
  const handleUpClick = () => {
    const newText = text.toUpperCase();
    setText(newText);
  }
  const handleLowClick = ()=> {
    const newText = text.toLowerCase();
    setText(newText);
  }
  const toggleCase = ()=> {
    text.isUpperCase();
  }
  return (
    <>
      <div>
        <div className="container">
          <div className="mb-3">
            <label htmlFor="myBox" className="form-label mt-4 ">{props.heading}</label>
            <textarea className="form-control" id="myBox1" rows="8" value={text} onChange={handleOnChange}></textarea>
          </div>
          <button className="btn btn-primary" onClick={handleUpClick}>Convert to upercase</button>
          <button className="btn btn-primary ms-5" onClick={handleLowClick}>Convert to upercase</button>
        </div>
      </div>

      <div className="container my-2">
        <h1>Your Text Summary</h1>
        <p> {text.split(" ").length} Words, {text.trim().length} Characters</p>
        <p>You will need <strong >{0.008 * text.split(" ").length }</strong> minute to reed the text</p>
        <h2>Preview</h2>
        <p className="border">{text}</p>
      </div>
    </>

  )
}

//This is a small project for react