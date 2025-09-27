import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const[text, setText] = useState('');
  const[name, setName] = useState('anish');

  //variation - 1 : runs on every render
  useEffect(() => {
    console.log("UI RENDERING DONE")
  });

  //variation - 2 : first render
  useEffect(() => {
    console.log("UI RENDERING DONE")
  },[]);

  //variation - 3 : only on first render + whenever dependency changes
  useEffect(() => {
    console.log("Change observed")
  },[name]);

  //variation - 4 : to handle unmounting of a component
  useEffect(() => {
    console.log("listner added");
    //add event listner - we have to remove the old listner before adding new for performance, coz on every onChnage a event listner is called
    return () => {
      console.log("Listner removed")
    }
  }, [text]);
  //first listner will be removed means the return fxn will execute first then listner will be added


  function changeHandler(event) {
    console.log(text);
    setText(event.target.value); 
  } 
  return (
    <div className="App">
      <input type='text' onChange={changeHandler}></input>
    </div>
  );
}

export default App;
