import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import signuplogo from "../../image/girl.jpeg"
import "./Login.css"
import logicon from "../../image/login icon.jpeg"



export default class Signup extends Component {
  render() {

    const inputs = document.querySelectorAll(".logininput");


    function addcl() {
      let parent = this.parentNode.parentNode;
      parent.classList.add("focus");
    }

    function remcl() {
      let parent = this.parentNode.parentNode;
      if (this.value === "") {
        parent.classList.remove("focus");
      }
    }


    inputs.forEach(input => {
      input.addEventListener("focus", addcl);
      input.addEventListener("blur", remcl);
    });

    return (
      <div className='loginmain'>

        <div className='container1'>
          <div className='login-content'>
            <form>
              <img src={signuplogo} className='girllogo' alt="no img"></img>
              <b><h2 className='loginwel'>WELCOME</h2></b>
              <div className="input-div">
                <div class="i">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                  </svg>

                </div>
                <div className="logindiv">
                  <h5>Username</h5>
                  <input type="text" ></input>
                </div>
              </div>
              <div class="input-div">
                <div class="i">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-lock" viewBox="0 0 16 16">
                    <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
                  </svg>
                </div>
                <div class="logindiv">
                  <h5>Password</h5>
                  <input type="password" className="logininput"></input>
                </div>
              </div>
              <a className='forgetpass' href="youtube.com">Forgot Password?</a>
              <Link to="/student/dashboard"><button  className="loginbtn" >Login</button></Link>
              
            </form>
          </div>
          <div className='j'>
            <img src={logicon} alt="no img" className='loginimg1' />
          </div>
        </div>
      </div>
    )
  }
}
