import { useState } from "react";

export default function Login() {

  // const[enteredEmail,setEnteredEmail]=useState('');
  // const[enteredPassword,setEnteredPassword]=useState('');

    const[enteredValue,setEnteredvalue]=useState({
      email:'',
      password:''
    });



  function handleClick(event){
    event.preventDefault();
  }

  // function handleEmailChange(event){
  //   setEnteredEmail(event.target.value)
  // }

  // function handlePasswordChange(event){
  //   setEnteredPassword(event.target.value);
  // }


  function handleInputChange(identifier,event){
    setEnteredvalue((prevValue)=>({
      ...prevValue,
      [identifier]:event.target.value
    }))
  }



  return (
    <form onSubmit={handleClick}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" value={enteredValue.email} onChange={(event)=>handleInputChange('email',event)} />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" value={enteredValue.password} name="password" onChange={(event)=>handleInputChange('password',event)} />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
