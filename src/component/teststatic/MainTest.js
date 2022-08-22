import React, { Component } from 'react'
import { Outlet } from 'react-router-dom'
import Testside from './testside'

export default class MainTest extends Component {
  render() {
    return (
      <div>
        <Testside/>
        <Outlet/>

      </div>
    )
  }
}
