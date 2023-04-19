import React,{useState} from 'react'

export default function Form(props) {
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
  const removeSpace = ()=>{
    let newText= text.trim()
    setText(newText);
  }
  const clearText = ()=>{
    let newText= "";
    setText(newText);
  }
  const firstUpperCase =()=>{

  }
  return (
    <div style={{backgroundColor:props.mode === 'dark'?'black':'white',color:props.mode==='dark'?'white':'black'}}>
<h1>Enter the word</h1>
<textarea value={text} onChange={handleOnChange} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
<button class="mx-2" onClick={handleUpperCase}>UppweCase</button>
<button class="mx-2" onClick={handleLowerCase}>LowerCase</button>
<button class="mx-2" onClick={removeSpace}>spaceremover</button>
<button class="mx-2" onClick={clearText}>clear text</button>
<button class="mx-2" onClick={firstUpperCase}>firstUpperCase</button>
<p>{text.split(" ").length-1}words {text.length}characters</p>
<h1>preview</h1>
<p>{text}</p>
    </div>
  )
}
