import React from "react";


import "./sign-in.css";

const signin = () => {
  

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'right',
        alignItems: 'center',
        height: '100vh',
        padding: '20px',
        
      }}
    >
      <h1>Sign In</h1>
    <div className="form">
          <div className="form-body">
              <div className="username">
                  <label className="form__label" for="firstName">First Name </label>
                  <input className="form__input" type="text" id="firstName" placeholder="First Name"/>
              </div>
              <div className="password">
                  <label className="form__label" for="password">Password </label>
                  <input className="form__input" type="password"  id="password" placeholder="Password"/>
              </div>
          </div>
          <div class="footer">
              <button type="submit" class="btn">Sign-In</button>
          </div>
      </div>      
    </div>
  );
};
export default signin;