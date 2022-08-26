import React, { Component } from 'react'

import Graph from './quadrantgraph'
import "./report.css"


export default class Report extends Component {
  render() {
    return (
      <div className='reportcont'>
        <p className='rgp1'>Feedback</p>
        <div className='gph1'>
          <Graph />
        </div>
       

      </div>
    )
  }
}
