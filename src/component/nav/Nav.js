import React, { Component } from 'react'
import { Outlet } from 'react-router-dom'

import "./Nav.css"
import Nav1 from './Nav1'
import Nav2 from './Nav2'



export default class Nav extends Component {
    render() {
        return (
            <div >
               <Nav1/>
               <Nav2/>
               <Outlet/>
            </div>
        )
    }
}
