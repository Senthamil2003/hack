import React, { Component } from 'react'

import "./Nav.css"


import logo from "../../image/logo.png"

export default class Nav1 extends Component {
  render() {
    return (
      <div >
        <div className='nav'>
          <div className='nimg'>
            <img src={logo} alt="hi" className='img1' />
          </div>
          <div className='search'>
            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
            <input type="text" className="input" placeholder="search" /> <button className='btn1'>Search</button>
          </div>
          <div className='prof'>
            <p className='p1'>Johnathen</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
            </svg>

          </div>
        </div>

      </div>
    )
  }
}
