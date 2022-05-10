import React from 'react'
import "./Login.css"

export default function Login() {

  function eventHandler(){
    alert(' logged in successfully');
  }

  return (
    <div>
      <div class="login-page">
        <div class="form">
          <div class="login">
            <div class="login-header">
              <h3>LOGIN</h3>
              <p>Please enter your credentials to login.</p>
            </div>
          </div>
          <form class="login-form">
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />
            <button onClick={eventHandler}>login</button>

          </form>
        </div>
      </div>
    </div>
  )
}
