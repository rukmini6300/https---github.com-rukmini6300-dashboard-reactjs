import { useState } from 'react';
import './App.css'
import Header from './Components/Header'
import NavMenu from './Components/NavMenu';
function App() {
  const [inputValue, setInputValue] = useState({
    title: "",
    points: "",
    status:"",
    priority:"",
    description:""
  });
  const [newTable, setNewTable] = useState([]);
  const handleChange = (e: any) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };
  const submitData = () => {
    setNewTable((p): any => [...p, inputValue]);
    setInputValue({title: "",  points: "",description:"",status:"",priority:""});
  };
  const deleteRow = (index: number) => {
    setNewTable((prevTable) => prevTable.filter((item:any, i:any) => i !== index));
  };
  return (
    <div className='main_component'  >
    <NavMenu handleChangeCallback = {handleChange} submitData = {submitData} inputValue = {inputValue}/>
   <div className='body_cont'>
     <Header newTable={newTable} deleteRow={deleteRow} />
   </div>
    </div>
  )
}

export default App

