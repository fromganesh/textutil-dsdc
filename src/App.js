import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Card from "./components/Card";
import Alert from "./components/Alert";
import Github from "./components/Github";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


import { useState } from "react";

function App() {
 const [mode,setMode] = useState('light')
 const [alert,setAlert] = useState(null)
 const showAlert = (type,message)=>{
     setAlert({
  type:type,
  message:message
 });
 }
 const handleMode =() =>{
    if(mode=== 'light')
    {
      setMode('dark')
      showAlert('success','darkmode')
    }
    else{
    setMode('light')
    showAlert('success','lightmode')
  }}

  setTimeout(function(){
    setAlert(null)
  },
  1500);


  return (
  
  <BrowserRouter>
    <Navbar  mode={mode} handleMode={handleMode} title="REACT"/>
   <Alert alert={alert}/>
  <Routes>
  
  
   <Route path='/' element={<Form/>}/> 
  <Route path='/card' element={<Card mode={mode}/>}/>
  <Route path='/git' element={<Github/>}/>
  </Routes> 

  </BrowserRouter>
  );
}

export default App;
