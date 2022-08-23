import React, { Component } from 'react'
import { Outlet } from 'react-router-dom'

import "./tnav.css"

import Tnav1 from './tnav1'
import Tnav2 from './tnav2'



export default class Tdash extends Component {
    render() {
        return (
            <div >
               <Tnav1/>
               <Tnav2/>
               <Outlet/>
            </div>
        )
    }
}
