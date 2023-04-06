import React,{useState} from 'react'

export default function Form() {
  const [text,setText]= useState("enter text");
  const handleOnChange = (event)=>{
   setText(event.target.value);
  }
  const handleUpperCase = ()=>{
    let newText= text.toUpperCase()
    setText(newText);
  }
  
  const handleLowerCase = ()=>{
    let newText= text.toLowerCase()
    setText(newText);
  }
  return (
    <div>
<h1>Enter the word</h1>
<textarea value={text} onChange={handleOnChange} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
<button onClick={handleUpperCase}>UppweCase</button>
<button onClick={handleLowerCase}>LowerCase</button>

    </div>
  )
}
