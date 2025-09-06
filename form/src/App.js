import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { isVisible } from '@testing-library/user-event/dist/utils';

function App() {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // function changeFirstNameHandler(event) {
  //   // console.log("printing first name");
  //   // console.log(event.target.value);
  //   setFirstName(event.target.value);
  // }
  // function changeLastNameHandler(event) {
  //   // console.log("printing last name");
  //   // console.log(event.target.value);
  //   setLastName(event.target.value);

  // }

  function changeHandler(event) {
    const {name, value, checked, type} = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData, 
        [name]: type==='checkbox' ? checked : value
    }
    });
  }

  const [formData, setFormData] = useState( {firsName: "", lastName: "", email: "", comments: "", isVisible:true, mode:"", favCar:""} );

  // console.log(formData);

  function submitHandler(event) {
    event.preventDefault();
    console.log("finally printing entire form data...")
    console.log(formData);
  }

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <br />
        <input type='text' placeholder='first name' onChange={changeHandler} name="firstName" value={formData.firsName}/>
        <br /> <br />
        <input type='text' placeholder='last name' onChange={changeHandler} name="lastName" value={formData.lastName}/>
        <br /> <br />
        <input type='email' placeholder='Enter your email here' onChange={changeHandler} name="email" value={formData.email}/>
        <br /> <br />
        <textarea placeholder='enter your comments here' onChange={changeHandler} name='comments' value={formData.comments}/>
        <br /> <br />
        <input type='checkbox' onChange={changeHandler} name='isVisible' id='isVisible' checked={formData.isVisible}></input>
        <label htmlFor='isVisible'> Am I visible ?</label>
        <br />
        <br />
        <fieldset>
          <legend>Mode:</legend>
          <input type='radio' onChange={changeHandler} name='mode' value='Online-Mode' id='Online-Mode' checked={formData.mode === 'Online-Mode'} ></input>
        <label htmlFor='Online-Mode'>Online Mode</label>
        <input type='radio' onChange={changeHandler} name='mode' value='Offline-Mode' id='Offline-Mode' checked={formData.mode === 'Online-Mode'}></input>
        <label htmlFor='Offline-Mode'>Offline Mode</label>
        </fieldset>
        <label htmlFor='favCar'>
          Tell me your favourite car
        </label>
        <select onChange={changeHandler}
          name="favCar" id='favCar' value={formData.favCar}>
          <option value="scorpio">Scorpio</option>
          <option value="fortuner">Fortuner</option>
          <option value="Thar">Thar</option>
          <option value="Legender">Legender</option>
          <option value="defender">Defender</option>

          
        </select>
        <button>Submit</button>
        
        
      </form>
    </div>
  );
}

export default App;
